import { RiAddCircleFill } from "react-icons/ri";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdFavorite } from "react-icons/md";
import CardNote from "@/components/CardNote";
import { useContext, useState, useEffect } from "react";
import Input from "@/components/Input";
import Button from "@/components/Button";
import useAxios from "@/utils/hooks/useAxios";
import useNotifications from "@/utils/hooks/useNotifications";
import { AuthContext } from "@/utils/context/AuthContext";
import Sidebar from "@/components/Sidebar";
import FormNote from "@/components/FormNote";

export default function Notes() {
    const [create, setCreate] = useState(false);
    const [update, setUpdate] = useState(false);
    const {userInfo} = useContext(AuthContext);
    const [notesData, setNotesData] = useState(null);
    const [editingNoteId, setEditingNoteId] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await useAxios(`/notes/list/${userInfo.userInfo.id}`, 'GET');
            setNotesData(data);
        };
        fetchData();
    }, [notesData]);

    const handleEditClick = (id) => {
        setEditingNoteId(id);
        setUpdate(true);
    };

    const handleExit = () => {
        setCreate(false);
        setUpdate(false);
    };

    return (
        <>
            <div className="flex flex-row items-start justify-start min-h-[100vh] relative overflow-hidden">
                <Sidebar />
                <div className="flex flex-col items-start justify-start ml-[160px] mr-[60px]">
                    <h2 className="text-[53px] font-semibold mt-[20px]">
                        <span className="bg-gradient-to-r from-[#2984C9] via-[#3681B8] to-[#0B3654] text-transparent bg-clip-text">
                            {userInfo.userInfo?.username}'s
                        </span>{" "}
                        Notes.
                    </h2>
                    <div className="flex flex-row flex-wrap items-start justify-start gap-x-[70px] gap-y-[10px] mt-[28px]">
                        <div className="flex flex-row items-center justify-start gap-[10px]">
                            <h3 className="text-[18px]">Sort By:</h3>
                            <select className="bg-white border-[1px] border-slate-300 rounded-[10px] w-[150px] py-[5px] px-[7px] mt-[2px] hover:bg-white cursor-pointer outline-none transition-all ease-in-out duration-200">
                                <option value="newest">Latest</option>
                                <option value="oldest">Oldest</option>
                            </select>
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[10px]">
                            <h3 className="text-[18px]">Show:</h3>
                            <select className="bg-white border-[1px] border-slate-300 rounded-[10px] w-[150px] py-[5px] px-[7px] mt-[2px] hover:bg-white cursor-pointer outline-none transition-all ease-in-out duration-200">
                                <option value="newest">All</option>
                                <option value="oldest">Favorite</option>
                            </select>
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[10px]">
                            <h3 className="text-[18px]">Topic:</h3>
                            <select className="bg-white border-[1px] border-slate-300 rounded-[10px] w-[150px] py-[5px] px-[7px] mt-[2px] hover:bg-white cursor-pointer outline-none transition-all ease-in-out duration-200">
                                <option value="newest">All</option>
                                <option value="oldest">Topik A</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap items-start justify-start mt-[31px] gap-[60px] mb-[70px] w-full relative">
                        {notesData && notesData.map((note, index) => (
                            <CardNote 
                                key={index}
                                id={note.id}
                                title={note.title}
                                topic={note.topic}
                                description={note.desc}
                                favorite={note.favorite}
                                updateDate={note.updateDate}
                                handleEditClick={handleEditClick}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div
                className="fixed right-[50px] bottom-[40px] text-[90px] text-[#2984C9] hover:text-[#396688] active:text-[#223e53] transition-all ease-in-out duration-200 cursor-pointer hover:scale-110"
                onClick={() => {
                    setCreate(true);
                }}
            >
                <RiAddCircleFill />
            </div>
            {/* Modal create note */}
            {create ? (
                <FormNote 
                    handleExit={handleExit}
                />
            ) : (
                ""
            )}
            {/* Modal update note */}
            {update ? (
                <FormNote 
                    id={editingNoteId}
                    isUpdate={true}
                    handleExit={handleExit}
                />
            ) : (
                ""
            )}
        </>
    );
}
