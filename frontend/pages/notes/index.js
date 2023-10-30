import { CgNotes, CgProfile } from "react-icons/cg";
import { TbLogout2 } from "react-icons/tb";
import { FaTasks } from "react-icons/fa";
import { RiAddCircleFill } from "react-icons/ri";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdFavorite } from "react-icons/md";
import CardNote from "@/components/CardNote";

export default function Notes() {
    return (
        <>
            <div className="flex flex-row items-start justify-start min-h-[100vh] relative overflow-hidden">
                <div className="fixed flex flex-col items-center justify-between w-[110px] h-[100vh] bg-[#2984C9]">
                    <div className="flex flex-col items-start justify-start gap-[20px] mt-[30px]">
                        <div className="text-[35px] hover:bg-[#2b587a] active:bg-[#1e3c53] transition-all ease-in-out duration-200 hover:scale-110 rounded-lg p-[15px] cursor-pointer">
                            <FaTasks color="white" />
                        </div>
                        <div className="text-[35px]  hover:bg-[#2b587a] active:bg-[#1e3c53] transition-all ease-in-out duration-200 hover:scale-110 rounded-lg p-[15px] cursor-pointer">
                            <CgNotes color="white" />
                        </div>
                        <div className="text-[35px]  hover:bg-[#2b587a] active:bg-[#1e3c53] transition-all ease-in-out duration-200 hover:scale-110 rounded-lg p-[15px] cursor-pointer">
                            <CgProfile color="white" />
                        </div>
                    </div>
                    <div className="text-[35px] hover:bg-[#2b587a] active:bg-[#1e3c53] transition-all ease-in-out duration-300 hover:scale-110 rounded-lg p-[15px] cursor-pointer mb-[30px]">
                        <TbLogout2 color="white" />
                    </div>
                </div>
                <div className="flex flex-col items-start justify-start ml-[160px]">
                    <h2 className="text-[53px] font-semibold mt-[20px]">
                        <span className="bg-gradient-to-r from-[#2984C9] via-[#3681B8] to-[#0B3654] text-transparent bg-clip-text">
                            Username's
                        </span>{" "}
                        Notes.
                    </h2>
                    <div className="flex flex-row items-start justify-start gap-[70px] mt-[28px]">
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
                    <div className="flex flex-row flex-wrap items-start justify-start mt-[31px] gap-[60px] mb-[70px]">
                        <CardNote
                            title="My Title"
                            topic="My Topic"
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. sit amet consectetur adipisicing elit. Quisquam, voluptatum."
                            updateDate="12/12/2021"
                        />
                        <CardNote
                            title="My Title"
                            topic="My Topic"
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. sit amet consectetur adipisicing elit. Quisquam, voluptatum."
                            updateDate="12/12/2021"
                        />
                        <CardNote
                            title="My Title"
                            topic="My Topic"
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. sit amet consectetur adipisicing elit. Quisquam, voluptatum."
                            updateDate="12/12/2021"
                        />
                        <CardNote
                            title="My Title"
                            topic="My Topic"
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. sit amet consectetur adipisicing elit. Quisquam, voluptatum."
                            updateDate="12/12/2021"
                        />
                        <CardNote
                            title="My Title"
                            topic="My Topic"
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. sit amet consectetur adipisicing elit. Quisquam, voluptatum."
                            updateDate="12/12/2021"
                        />
                    </div>
                </div>
            </div>
            <div className="fixed right-[50px] bottom-[40px] text-[90px] text-[#2984C9] hover:text-[#396688] active:text-[#223e53] transition-all ease-in-out duration-200 cursor-pointer hover:scale-110">
                <RiAddCircleFill />
            </div>
        </>
    );
}