import useAxios from "@/utils/hooks/useAxios";
import { useState } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdFavorite } from "react-icons/md";

export default function CardNote({
    id,
    title = "My Title",
    topic = "My Topic",
    description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    updateDate = "12/12/2021",
    favorite = false,
    handleEditClick
}) {

    const [isFavorite, setIsFavorite] = useState(favorite);

    const handleAddToFavorite = async () => {
        await useAxios(`/notes/${id}`, 'PUT', { favorite: !isFavorite });
        setIsFavorite(!isFavorite);
    };

    const handleToogleEdit = () => {
        handleEditClick(id);
    };

    return (
        <>
            <div className="flex flex-row items-start justify-start w-full xl:w-[500px] h-[215px] rounded-[20px] shadow-lg shadow-[999999]/[29%] relative cursor-pointer hover:bg-slate-100 transition-all ease-in-out duration-200 bg-slate-50">
                <div className="flex flex-col items-start justify-start my-[14px] mx-[25px]">
                    <h1 className="text-[30px] font-semibold">{title}</h1>
                    <h3 className="text-[22px] text-slate-400">{topic}</h3>
                    <h6 className="text-[16px] mt-[3px] ml-[2px] line-clamp-3">{description}</h6>
                    <h4 className="text-[14px] mt-[5px] ml-[2px] text-slate-500">Updated at: {updateDate}</h4>
                </div>
                <div className="flex flex-col items-center justify-start min-w-[60px] h-full bg-[#2984C9] rounded-r-[20px] shadow-lg shadow-[999999]/[29%]">
                    <div onClick={handleToogleEdit} className="text-[25px] text-white mt-[15px] hover:bg-[#2b587a] active:bg-[#1e3c53] transition-all ease-in-out duration-200 hover:scale-110 rounded-lg p-[5px] cursor-pointer">
                        <AiFillEdit />
                    </div>
                    <div className="text-[25px] text-white mt-[15px] hover:bg-[#2b587a] active:bg-[#1e3c53] transition-all ease-in-out duration-200 hover:scale-110 rounded-lg p-[5px] cursor-pointer">
                        <AiFillDelete />
                    </div>
                    <div onClick={handleAddToFavorite} className={`text-[25px] text-white mt-[15px] transition-all ease-in-out duration-200 hover:scale-110 rounded-lg p-[5px] cursor-pointer ${isFavorite ? 'text-red-500' : ''}`}>
                        <MdFavorite />
                    </div>
                </div>
            </div>
        </>
    );
}
