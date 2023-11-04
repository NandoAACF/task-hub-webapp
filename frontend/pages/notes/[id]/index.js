import { CgNotes, CgProfile } from "react-icons/cg";
import { TbLogout2 } from "react-icons/tb";
import { FaTasks } from "react-icons/fa";
import { RiAddCircleFill } from "react-icons/ri";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdFavorite } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";
import CardNote from "@/components/CardNote";

import { useState } from "react";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Sidebar from "@/components/Sidebar";

export default function NotesById() {
    const [edit, setEdit] = useState(false);

    return (
        <>
            <div className="flex flex-row items-start justify-start min-h-[100vh] relative overflow-hidden">
                <Sidebar />
                <div className="flex flex-col items-start justify-start ml-[100px] sm:ml-[160px] mr-[30px] sm:mr-[60px] mt-[40px] w-full relative">
                    <div className="flex flex-row items-center justify-between w-full text-[26px] sm:text-[30px] text-[#2984C9]">
                        <div className="cursor-pointer hover:scale-[118%] transition-all ease-in-out duration-200 hover:bg-[#2984C9] hover:text-white rounded-xl p-[5px]">
                            <IoMdArrowRoundBack />
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[10px] sm:gap-[30px]">
                            <div
                                className="cursor-pointer hover:scale-[118%] transition-all ease-in-out duration-200 hover:bg-[#2984C9] hover:text-white rounded-xl p-[5px]"
                                onClick={() => {
                                    setEdit(true);
                                }}
                            >
                                <AiFillEdit />
                            </div>
                            <div className="cursor-pointer hover:scale-[118%] transition-all ease-in-out duration-200 hover:bg-[#2984C9] hover:text-white rounded-xl p-[5px]">
                                <AiFillDelete />
                            </div>
                            <div className="cursor-pointer hover:scale-[118%] transition-all ease-in-out duration-200 hover:bg-[#2984C9] hover:text-white rounded-xl p-[5px]">
                                <MdFavorite />
                            </div>
                        </div>
                    </div>
                    <h2 className="text-[33px] sm:text-[43px] font-semibold mt-[15px] ml-[7px]">
                        <span className="bg-gradient-to-r from-[#2984C9] via-[#3681B8] to-[#0B3654] text-transparent bg-clip-text">
                            My Note Title
                        </span>{" "}
                    </h2>
                    <div className="flex flex-col sm:flex-row  items-start sm:items-end justify-start sm:justify-between w-full mt-[7px] sm:mt-[12px]">
                        <h3 className="text-[26px] ml-[7px] font-medium">My Note Topic</h3>
                        <h4 className="text-[16px] sm:text-[19px] text-slate-400 ml-[7px] sm:ml-0">
                            Last Updated: 2 December 2023
                        </h4>
                    </div>
                    <h5 className="text-[17px] ml-[7px] mt-[17px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a convallis magna, in volutpat
                        purus. Fusce finibus magna vitae quam finibus convallis. Quisque non tellus vitae sem imperdiet
                        bibendum. Nam at lorem purus. Suspendisse lectus est, scelerisque sit amet velit ut, convallis
                        tempus ex. Curabitur leo mauris, pharetra varius fermentum ut, bibendum in ipsum. Integer sit
                        amet hendrerit nunc, eu tempor leo. Sed ac felis eget urna maximus lacinia. Aenean nec massa at
                        neque interdum fermentum. Morbi laoreet, nulla ut aliquet tristique, ante neque sagittis libero,
                        id aliquam justo est sit amet ex. Integer ac dolor nunc. Nulla eu dui nisl. Praesent commodo
                        pharetra augue, eu ullamcorper metus porttitor quis. Nunc venenatis hendrerit diam, gravida
                        varius nisi venenatis id. In blandit dolor ut neque lacinia, a euismod tellus facilisis.
                        Vestibulum tempor vitae sapien ut bibendum. Pellentesque fringilla nibh vel accumsan aliquam. Ut
                        aliquam est vel iaculis fringilla. Sed est nulla, pulvinar vitae nibh auctor, gravida eleifend
                        orci. Maecenas eget enim vitae enim varius interdum. Ut hendrerit vitae dui sit amet vestibulum.
                        Vestibulum tincidunt consectetur sapien, vitae finibus lacus venenatis quis. Nam efficitur
                        dignissim iaculis. In rutrum, metus a pretium maximus, ipsum quam pulvinar felis, ut venenatis
                        erat orci quis massa. Mauris porta magna fringilla, maximus tortor ut, sollicitudin odio.
                    </h5>
                </div>
            </div>
            {/* Modal edit note */}
            {edit ? (
                <div className="flex flex-col items-center justify-center bg-opacity-50 bg-black w-full min-h-[100vh] overflow-hidden top-0 left-0 z-50 fixed">
                    <div className="flex flex-col items-start justify-start bg-white rounded-2xl p-[30px] overflow-hidden relative max-h-[95vh]">
                        <h4 className="text-[25px] font-bold -mt-[3px]">Edit Note</h4>
                        <form className="flex flex-col items-start justify-start gap-[13px] mt-[14px] mb-[1px]">
                            <div className="flex flex-col relative w-[200px] sm:w-[400px] md:w-[600px]">
                                <input
                                    type="text"
                                    className=" bg-white border-[1px] border-slate-300 rounded-[10px] w-full py-[5px] px-[9px] mt-[2px] focus:border-[4px] outline-none text-[22px] font-semibold"
                                    placeholder="Title"
                                />
                            </div>
                            <div className="flex flex-col relative w-[200px] sm:w-[400px] md:w-[600px]">
                                <input
                                    type="text"
                                    className=" bg-white border-[1px] border-slate-300 rounded-[10px] w-full py-[5px] px-[9px] mt-[2px] focus:border-[4px] outline-none text-[18px] font-medium"
                                    placeholder="Topic"
                                />
                            </div>
                            <div className="flex flex-col relative w-[200px] sm:w-[400px] md:w-[600px]">
                                <textarea
                                    className=" bg-white border-[1px] border-slate-300 rounded-[10px] w-full py-[5px] px-[9px] mt-[2px] focus:border-[4px] outline-none min-h-[100px] max-h-[300px]"
                                    placeholder="Description"
                                />
                            </div>
                            <div className="flex flex-col sm:flex-row items-center justify-end gap-[18px] sm:gap-[20px] w-full mt-[15px] sm:mt-[20px]">
                                <Button
                                    text="Cancel"
                                    type="secondary"
                                    size="sm"
                                    onClick={() => {
                                        setEdit(false);
                                    }}
                                    className="order-2 sm:order-1"
                                />
                                <Button text="Add Note" type="primary" size="sm" className="order-1 sm:order-2" />
                            </div>
                        </form>
                    </div>
                </div>
            ) : (
                ""
            )}
        </>
    );
}
