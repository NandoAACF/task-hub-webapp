import { CgNotes, CgProfile } from "react-icons/cg";
import { TbLogout2 } from "react-icons/tb";
import { FaTasks } from "react-icons/fa";
import { RiAddCircleFill } from "react-icons/ri";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdFavorite } from "react-icons/md";
import CardNote from "@/components/CardNote";

import { useState } from "react";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Sidebar from "@/components/Sidebar";

export default function UserProfile() {
    return (
        <>
            <div className="flex flex-row items-start justify-start min-h-[100vh] relative overflow-hidden">
                <Sidebar />
                <div className="flex flex-col items-start justify-start ml-[100px] sm:ml-[160px] mr-[30px] sm:mr-[70px]">
                    <h2 className="text-[23px] sm:text-[48px] md:text-[53px] font-semibold mt-[20px]">
                        <span className="bg-gradient-to-r from-[#2984C9] via-[#3681B8] to-[#0B3654] text-transparent bg-clip-text">
                            Username's
                        </span>{" "}
                        Profile.
                    </h2>
                    <form className="flex flex-col items-start justify-start gap-[19px] mt-[28px]">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-[6px] sm:gap-[25px]">
                            <h5 className="text-[16px] sm:text-[19px] font-semibold">Username:</h5>
                            <input
                                type="text"
                                className=" bg-white border-[1px] border-slate-300 rounded-[10px] w-full py-[7px] px-[9px] mt-[2px] focus:border-[4px] outline-none"
                                value="auto diisi usernamenya"
                            />
                        </div>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-[6px] sm:gap-[70px]">
                            <h5 className="text-[16px] sm:text-[19px] font-semibold">Email:</h5>
                            <input
                                type="email"
                                className=" bg-black bg-opacity-20 border-[1px] border-slate-300 rounded-[10px] w-full py-[7px] px-[9px] mt-[2px] focus:border-[4px] outline-none cursor-not-allowed text-slate-500"
                                value="nando.aacf88@gmail.com"
                                disabled
                            />
                        </div>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-center sm:justify-start gap-[14px] mt-[8px]">
                            <Button text="Reset Password" type="resetpassword" size="sm" className="" />
                            <Button text="Save Changes" type="primary" size="sm" className="" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
