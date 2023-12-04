import { RiAddCircleFill } from "react-icons/ri";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdFavorite } from "react-icons/md";

import { useContext, useState, useEffect } from "react";
import { router, useRouter } from "next/router";

import useAxios from "@/utils/hooks/useAxios";
import useNotifications from "@/utils/hooks/useNotifications";
import { AuthContext } from "@/utils/context/AuthContext";

import Sidebar from "@/components/Sidebar";
import FormNote from "@/components/FormNote";
import Input from "@/components/Input";
import Button from "@/components/Button";
import CardNote from "@/components/CardNote";

export default function Notes() {
    const [create, setCreate] = useState(false);
    const [update, setUpdate] = useState(false);
    const [remove, setRemove] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const { onSuccess } = useNotifications();
    const { userInfo } = useContext(AuthContext);
    const [notesData, setNotesData] = useState(null);
    const [noteId, setNoteId] = useState(null);
    const [activeIcon, setActiveIcon] = useState("notes");

    const router = useRouter();

    useEffect(() => {
        if (!userInfo.isLoggedIn) {
            router.replace("/login");
        }
    }, [userInfo.isLoggedIn, router]);

    const [topicOptions, setTopicOptions] = useState([
        { value: "", label: "All" }
    ]);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(false);
            const params = {
                sortBy: router.query.sortBy,
                topic: router.query.topic,
                favorite: router.query.favorite,
            };

            const data = await useAxios(`/notes/list/${userInfo.userInfo.id}`, "GET", null, true, params);
            setNotesData(data);
        };

        if (router.isReady || isLoading) {
            fetchData();
        }
    }, [router.isReady, router.query, isLoading]);

    useEffect(() => {
        const fetchTopicData = async () => {
            const fetchedTopicData = await useAxios(`/notes/findUniqueTopic/${userInfo?.userInfo?.id}`, "GET", null, true);

            const newTopicOptions = fetchedTopicData.map(newTopic => ({
                value: newTopic,
                label: newTopic,
            }));

            setTopicOptions([
                { value: "", label: "All" },
                ...newTopicOptions,
            ]);
        };

        if (router.isReady || isLoading) {
            fetchTopicData();
        }

    }, [router.isReady,  topicOptions]);


    const handleEditClick = (id) => {
        setNoteId(id);
        setUpdate(true);
    };

    const handleDeleteClick = (id) => {
        setNoteId(id);
        setRemove(true);
    };

    const handleRemove = async () => {
        await useAxios(`/notes/${noteId}`, "DELETE");
        onSuccess("Notes removed succesfully");
        setRemove(false);
        router.replace("/notes");
    };

    const handleExit = () => {
        setCreate(false);
        setUpdate(false);
        setRemove(false);
        setIsLoading(true);
    };

    const handleFilter = () => {
        let sortByValue = document.getElementById("sortBy").value;
        let favoriteValue = document.getElementById("favorite").value;
        let topicValue = document.getElementById("topic").value;

        router.push({
            pathname: router.pathname,
            query: {
                sortBy: sortByValue,
                favorite: favoriteValue,
                topic: topicValue,
            },
        });
    };
    
    const handleResetFilter = () => {
        document.getElementById("sortBy").value = "latest";
        document.getElementById("favorite").value = "";
        document.getElementById("topic").value = "";

        router.push({
            pathname: router.pathname,
            query: {},
        });
    };

    return (
        <>
            <div className="flex flex-row items-start justify-start min-h-[100vh] relative overflow-hidden">
                <Sidebar activeIcon={activeIcon} />
                <div className="flex flex-col items-start justify-start ml-[100px] sm:ml-[160px] mr-[30px] sm:mr-[70px]">
                    <h2 className="text-[23px] sm:text-[48px] md:text-[53px] font-semibold mt-[20px]">
                        <span className="bg-gradient-to-r from-[#2984C9] via-[#3681B8] to-[#0B3654] text-transparent bg-clip-text">
                            {userInfo.userInfo?.username}'s
                        </span>{" "}
                        Notes.
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 gap-x-[70px] gap-y-[20px] mt-[20px] md:mt-[28px]">
                        <div className="flex flex-row items-center justify-start gap-[10px]">
                            <h3 className="text-[15px] sm:text-[18px]">Sort By:</h3>
                            <select
                                id="sortBy"
                                className="bg-white border-[1px] border-slate-300 rounded-[10px] w-[105px] sm:w-[150px] py-[5px] px-[7px] mt-[2px] hover:bg-white cursor-pointer outline-none transition-all ease-in-out duration-200"
                            >
                                <option value="latest">Latest</option>
                                <option value="oldest">Oldest</option>
                            </select>
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[10px]">
                            <h3 className="text-[15px] sm:text-[18px]">Show:</h3>
                            <select
                                id="favorite"
                                className="bg-white border-[1px] border-slate-300 rounded-[10px] w-[105px] sm:w-[150px] py-[5px] px-[7px] mt-[2px] hover:bg-white cursor-pointer outline-none transition-all ease-in-out duration-200"
                            >
                                <option value="">All</option>
                                <option value="true">Favorite</option>
                            </select>
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[10px]">
                            <h3 className="text-[15px] sm:text-[18px]">Topic:</h3>
                            <select
                                id="topic"
                                className="bg-white border-[1px] border-slate-300 rounded-[10px] w-[105px] sm:w-[150px] py-[5px] px-[7px] mt-[2px] hover:bg-white cursor-pointer outline-none transition-all ease-in-out duration-200"
                            >
                                {topicOptions.map((topic) => (
                                    <option key={topic.value} value={topic.value}>
                                        {topic.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="flex justify-center gap-5">
                            <Button text="Apply Filters" type="primary" size="xsm" onClick={handleFilter} />
                            <Button text="Reset Filters" type="resetfilter" size="xsm" onClick={handleResetFilter} />
                        </div>
                        {/* <div className="flex items-center justify-start mt-[7px] sm:mt-0">
                        </div> */}
                    </div>
                    <div className="flex flex-row flex-wrap items-start justify-start mt-[25px] sm:mt-[31px] gap-[40px] sm:gap-[60px] mb-[70px] w-full relative">
                        {notesData &&
                            notesData.map((note, index) => (
                                <CardNote
                                    onClick={() => {
                                        router.push(`/notes/${note.id}`);
                                    }}
                                    key={index}
                                    id={note.id}
                                    title={note.title}
                                    topic={note.topic}
                                    description={note.desc}
                                    favorite={note.favorite}
                                    updatedAt={note.updatedAt}
                                    handleEditClick={handleEditClick}
                                    handleDeleteClick={handleDeleteClick}

                                />
                            ))}
                        {/* Kalau diklik, dia auto menuju /notes/[id] */}
                        {/* <CardNote
                            onClick={() => {
                                router.push("/notes/1");
                            }}
                        />
                        <CardNote />
                        <CardNote />
                        <CardNote />
                        <CardNote />
                        <CardNote />
                        <CardNote /> */}
                    </div>
                </div>
            </div>
            <div
                className="fixed right-[50px] bottom-[40px] text-[60px] sm:text-[90px] text-black hover:text-[#396688] active:text-[#223e53] transition-all ease-in-out duration-200 cursor-pointer hover:scale-110"
                onClick={() => {
                    setCreate(true);
                }}
            >
                <RiAddCircleFill />
            </div>
            {/* Modal create note */}
            {create ? <FormNote handleExit={handleExit} setTopics={setTopicOptions} /> : ""}
            {/* Modal update note */}
            {update ? <FormNote id={noteId} isUpdate={true} handleExit={handleExit} setTopics={setTopicOptions} /> : ""}
            {/* Modal remove note */}
            {remove ? (
                <div className="flex flex-col items-center justify-center bg-opacity-50 bg-black w-full min-h-[100vh] overflow-hidden top-0 left-0 z-50 fixed">
                    <div className="flex flex-col items-start justify-start bg-white rounded-2xl p-[30px] overflow-hidden relative max-h-[95vh]">
                        <h4 className="text-[25px] font-bold -mt-[3px]">Are you sure want to remove this note?</h4>
                        <div className="flex flex-row items-center justify-end gap-[20px] w-full mt-[20px]">
                            <Button text="Yes" type="secondary" size="sm" onClick={handleRemove} />
                            <Button text="No" type="secondary" size="sm" onClick={handleExit} />
                        </div>
                    </div>
                </div>
            ) : (
                ""
            )}
        </>
    );
}
