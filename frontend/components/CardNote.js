import useAxios from "@/utils/hooks/useAxios";
import { useState } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdFavorite } from "react-icons/md";
import moment from "moment";

export default function CardNote({
    id,
    title = "My Title",
    topic = "My Topic",
    description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    updatedAt,
    favorite = false,
    handleEditClick,
    handleDeleteClick,
    onClick,
}) {
    const [isFavorite, setIsFavorite] = useState(favorite);

    const handleAddToFavorite = async () => {
        await useAxios(`/notes/${id}`, "PUT", { favorite: !isFavorite });
        setIsFavorite(!isFavorite);
    };

    const handleToogleEdit = () => {
        console.log('handle toogle edit');
        handleEditClick(id);
    };

    const handleToogleDelete = () => {
        handleDeleteClick(id);
    };

    return (
        <>
            <div
                className="flex flex-row items-start justify-start w-full xl:w-[500px] h-[215px] rounded-[20px] shadow-lg shadow-[999999]/[29%] relative cursor-pointer hover:bg-slate-100 transition-all ease-in-out duration-200 bg-slate-50">
                <div onClick={onClick}
                      className="flex flex-col items-start justify-start my-[14px] mx-[25px] w-full"
                >
                    <h1 className="text-[26px] sm:text-[30px] font-semibold line-clamp-1">{title}</h1>
                    <h3 className="text-[19px] sm:text-[22px] text-slate-400 line-clamp-1">{topic}</h3>
                    <h6 className="text-[15px] sm:text-[16px] mt-[3px] ml-[2px] line-clamp-3">{description}</h6>
                    <h4 className="text-[14px] mt-[5px] ml-[2px] text-slate-500">Updated at: {moment(updatedAt).format("HH MMM YYYY HH:mm")}</h4>
                </div>
                <div className="hidden sm:flex flex-col items-center justify-start min-w-[50px] sm:min-w-[60px] h-full bg-[#2984C9] rounded-r-[20px] shadow-lg shadow-[999999]/[29%]">
                    <div
                        onClick={handleToogleEdit}
                        className="text-[21px] sm:text-[25px] text-white mt-[15px] hover:bg-[#2b587a] active:bg-[#1e3c53] transition-all ease-in-out duration-200 hover:scale-110 rounded-lg p-[5px] cursor-pointer"
                    >
                        <AiFillEdit />
                    </div>
                    <div
                        onClick={handleToogleDelete}
                        className="text-[21px] sm:text-[25px] text-white mt-[15px] hover:bg-[#2b587a] active:bg-[#1e3c53] transition-all ease-in-out duration-200 hover:scale-110 rounded-lg p-[5px] cursor-pointer"
                    >
                        <AiFillDelete />
                    </div>
                    <div
                        onClick={handleAddToFavorite}
                        className={`text-[21px] sm:text-[25px] text-white mt-[15px] transition-all ease-in-out duration-200 hover:scale-110 rounded-lg p-[5px] cursor-pointer ${
                            isFavorite === true ? "text-red-500 fill-current" : ""
                        }`}
                    >
                        <MdFavorite fill={isFavorite ? "red" : "currentColor"} />
                    </div>
                </div>
            </div>
        </>
    );
}
