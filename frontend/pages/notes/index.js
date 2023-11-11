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

    const { onSuccess } = useNotifications();
    const { userInfo } = useContext(AuthContext);
    const [notesData, setNotesData] = useState(null);
    const [noteId, setNoteId] = useState(null);
    const [activeIcon, setActiveIcon] = useState("notes");
    const [showFavorite, setShowFavorite] = useState("all");

    const router = useRouter();

    useEffect(() => {
        if (!userInfo.isLoggedIn) {
            router.replace("/login");
        }
    }, [userInfo.isLoggedIn, router]);

    useEffect(() => {
        const fetchData = async () => {
            const favoriteFilter = showFavorite === "favorite" ? "?favorite=true" : "";
            const data = await useAxios(
                `/notes/list/${userInfo.userInfo.id}${favoriteFilter}`,
                "GET"
            );
            setNotesData(data);
        };
        fetchData();
    }, [notesData]);

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
    };

    const handleExit = () => {
        setCreate(false);
        setUpdate(false);
        setRemove(false);
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
                    <div className="flex flex-row flex-wrap items-start justify-start gap-x-[70px] gap-y-[10px] mt-[20px] md:mt-[28px]">
                        <div className="flex flex-row items-center justify-start gap-[10px]">
                            <h3 className="text-[15px] sm:text-[18px]">
                                Sort By:
                            </h3>
                            <select className="bg-white border-[1px] border-slate-300 rounded-[10px] w-[105px] sm:w-[150px] py-[5px] px-[7px] mt-[2px] hover:bg-white cursor-pointer outline-none transition-all ease-in-out duration-200">
                                <option value="newest">Latest</option>
                                <option value="oldest">Oldest</option>
                            </select>
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[10px]">
                            <h3 className="text-[15px] sm:text-[18px]">
                                Show:
                            </h3>
                            <select className="bg-white border-[1px] border-slate-300 rounded-[10px] w-[105px] sm:w-[150px] py-[5px] px-[7px] mt-[2px] hover:bg-white cursor-pointer outline-none transition-all ease-in-out duration-200"
                                    value = {showFavorite}
                                    onChange={(e) => setShowFavorite(e.target.value)}
                            >
                                <option value="all">All</option>
                                <option value="favorite">Favorite</option>
                            </select>
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[10px]">
                            <h3 className="text-[15px] sm:text-[18px]">
                                Topic:
                            </h3>
                            <select className="bg-white border-[1px] border-slate-300 rounded-[10px] w-[105px] sm:w-[150px] py-[5px] px-[7px] mt-[2px] hover:bg-white cursor-pointer outline-none transition-all ease-in-out duration-200">
                                <option value="newest">All</option>
                                <option value="oldest">Umum</option>
                                <option value="oldest">Topik A</option>
                                <option value="oldest">Topik B</option>
                            </select>
                        </div>
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
                                    updateDate={note.updateDate}
                                    handleEditClick={handleEditClick}
                                    handleDeleteClick={handleDeleteClick}
                                />
                            ))}
                        {/* Kalau diklik, dia auto menuju /notes/[id] */}
                        <CardNote
                            onClick={() => {
                                router.push("/notes/1");
                            }}
                        />
                        <CardNote
                            onClick={() => {
                                router.push("/notes/2");
                            }}
                        />
                        <CardNote
                            onClick={() => {
                                router.push("/notes/3");
                            }}
                        />
                        <CardNote
                            onClick={() => {
                                router.push("/notes/4");
                            }}
                        />
                        <CardNote
                            onClick={() => {
                                router.push("/notes/5");
                            }}
                        />
                        <CardNote
                            onClick={() => {
                                router.push("/notes/6");
                            }}
                        />
                        <CardNote
                            onClick={() => {
                                router.push("/notes/7");
                            }}
                        />
                    </div>
                </div>
            </div>
            <div
                className="fixed right-[50px] bottom-[40px] text-[60px] sm:text-[90px] text-[#2984C9] hover:text-[#396688] active:text-[#223e53] transition-all ease-in-out duration-200 cursor-pointer hover:scale-110"
                onClick={() => {
                    setCreate(true);
                }}
            >
                <RiAddCircleFill />
            </div>
            {/* Modal create note */}
            {create ? <FormNote handleExit={handleExit} /> : ""}
            {/* Modal update note */}
            {update ? (
                <FormNote id={noteId} isUpdate={true} handleExit={handleExit} />
            ) : (
                ""
            )}
            {/* Modal remove note */}
            {remove ? (
                <div className="flex flex-col items-center justify-center bg-opacity-50 bg-black w-full min-h-[100vh] overflow-hidden top-0 left-0 z-50 fixed">
                    <div className="flex flex-col items-start justify-start bg-white rounded-2xl p-[30px] overflow-hidden relative max-h-[95vh]">
                        <h4 className="text-[25px] font-bold -mt-[3px]">
                            Are you sure want to remove this note?
                        </h4>
                        <div className="flex flex-row items-center justify-end gap-[20px] w-full mt-[20px]">
                            <Button
                                text="Yes"
                                type="secondary"
                                size="sm"
                                onClick={handleRemove}
                            />
                            <Button
                                text="No"
                                type="secondary"
                                size="sm"
                                onClick={handleExit}
                            />
                        </div>
                    </div>
                </div>
            ) : (
                ""
            )}
        </>
    );
}
