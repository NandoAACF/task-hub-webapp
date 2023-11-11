import { CgNotes, CgProfile } from "react-icons/cg";
import { TbLogout2 } from "react-icons/tb";
import { FaTasks } from "react-icons/fa";
import { RiAddCircleFill } from "react-icons/ri";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdFavorite } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";

import { useEffect, useState } from "react";
import useAxios from "@/utils/hooks/useAxios";
import useNotifications from "@/utils/hooks/useNotifications";
import { AuthContext } from "@/utils/context/AuthContext";
import { router, useRouter } from "next/router";

import CardNote from "@/components/CardNote";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Sidebar from "@/components/Sidebar";
import FormNote from "@/components/FormNote";

export default function NotesById() {
    const [update, setUpdate] = useState(false);
    const [remove, setRemove] = useState(false);

    const [noteData, setNoteData] = useState(null);
    const [activeIcon, setActiveIcon] = useState("notes");

    const { onSuccess } = useNotifications();

    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        const fetchData = async () => {
            const data = await useAxios(`/notes/${id}`, "GET");
            setNoteData(data);
        };
        fetchData();
    }, [noteData]);

    const handleRemove = async () => {
        await useAxios(`/notes/${id}`, "DELETE");
        onSuccess("Notes removed succesfully");
        setRemove(false);
        router.replace("/notes");
    };

    const handleExit = () => {
        setUpdate(false);
        setRemove(false);
    };

    const handleGoBack = () => {
        router.replace("/notes");
    };

    return (
        <>
            <div className="flex flex-row items-start justify-start min-h-[100vh] relative overflow-hidden">
                <Sidebar activeIcon={activeIcon} />
                <div className="flex flex-col items-start justify-start ml-[100px] sm:ml-[160px] mr-[30px] sm:mr-[60px] mt-[40px] w-full relative">
                    <div className="flex flex-row items-center justify-between w-full text-[26px] sm:text-[30px] text-[#2984C9]">
                        <div
                            className="cursor-pointer hover:scale-[118%] transition-all ease-in-out duration-200 hover:bg-[#2984C9] hover:text-white rounded-xl p-[5px]"
                            onClick={() => {
                                router.push("/notes");
                            }}
                        >
                            <IoMdArrowRoundBack />
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[10px] sm:gap-[30px]">
                            <div
                                className="cursor-pointer hover:scale-[118%] transition-all ease-in-out duration-200 hover:bg-[#2984C9] hover:text-white rounded-xl p-[5px]"
                                onClick={() => {
                                    setUpdate(true);
                                }}
                            >
                                <AiFillEdit />
                            </div>
                            <div
                                className="cursor-pointer hover:scale-[118%] transition-all ease-in-out duration-200 hover:bg-[#2984C9] hover:text-white rounded-xl p-[5px]"
                                onClick={() => {
                                    setRemove(true);
                                }}
                            >
                                <AiFillDelete />
                            </div>
                            <div className="cursor-pointer hover:scale-[118%] transition-all ease-in-out duration-200 hover:bg-[#2984C9] hover:text-white rounded-xl p-[5px]">
                                <MdFavorite />
                            </div>
                        </div>
                    </div>
                    <h2 className="text-[33px] sm:text-[43px] font-semibold mt-[15px] ml-[7px]">
                        <span className="bg-gradient-to-r from-[#2984C9] via-[#3681B8] to-[#0B3654] text-transparent bg-clip-text">
                            {noteData?.title}
                        </span>{" "}
                    </h2>
                    <div className="flex flex-col sm:flex-row  items-start sm:items-end justify-start sm:justify-between w-full mt-[7px] sm:mt-[12px]">
                        <h3 className="text-[26px] ml-[7px] font-medium">
                            {noteData?.topic}
                        </h3>
                        <h4 className="text-[16px] sm:text-[19px] text-slate-400 ml-[7px] sm:ml-0">
                            Last Updated: {noteData?.updateAt}
                        </h4>
                    </div>
                    <h5 className="text-[17px] ml-[7px] mt-[17px]">
                        {noteData?.desc}
                    </h5>
                </div>
            </div>
            {/* Modal update note */}
            {update ? (
                <FormNote id={id} isUpdate={true} handleExit={handleExit} />
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
