import { FaTasks } from "react-icons/fa";
import { RiAddCircleFill } from "react-icons/ri";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdFavorite } from "react-icons/md";
import CardNote from "@/components/CardNote";
import { MdDateRange } from "react-icons/md";
import TagTodo from "@/components/TagTodo";
import StatusTodo from "@/components/StatusTodo";
import CardTodo from "@/components/CardTodo";
import Button from "@/components/Button";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";

export default function Todos() {
    const [create, setCreate] = useState(false);

    return (
        <>
            <div className="flex flex-row items-start justify-start min-h-[100vh] relative overflow-hidden">
                <Sidebar />
                <div className="flex flex-col items-start justify-start ml-[100px] sm:ml-[160px] mr-[30px] sm:mr-[70px] relative w-full">
                    <h2 className="text-[23px] sm:text-[48px] md:text-[53px] font-semibold mt-[20px]">
                        <span className="bg-gradient-to-r from-[#2984C9] via-[#3681B8] to-[#0B3654] text-transparent bg-clip-text">
                            Username's
                        </span>{" "}
                        Todos.
                    </h2>
                    <div className="flex flex-row flex-wrap items-start justify-start gap-x-[70px] gap-y-[10px] mt-[20px] md:mt-[28px]">
                        <div className="flex flex-row items-center justify-start gap-[10px]">
                            <h3 className="text-[15px] sm:text-[18px]">Sort By:</h3>
                            <select className="bg-white border-[1px] border-slate-300 rounded-[10px] w-[105px] sm:w-[150px] py-[5px] px-[7px] mt-[2px] hover:bg-white cursor-pointer outline-none transition-all ease-in-out duration-200">
                                <option value="deadlinedesc">Deadline Desc</option>
                                <option value="deadlineasc">Deadline Asc</option>
                                <option value="latest">Latest</option>
                                <option value="oldest">Oldest</option>
                            </select>
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[10px]">
                            <h3 className="text-[15px] sm:text-[18px]">Filter Priority:</h3>
                            <select className="bg-white border-[1px] border-slate-300 rounded-[10px] w-[100px] sm:w-[150px] py-[5px] px-[7px] mt-[2px] hover:bg-white cursor-pointer outline-none transition-all ease-in-out duration-200">
                                <option value="all_priority">All</option>
                                <option value="high">High</option>
                                <option value="medium">Medium</option>
                                <option value="low">Low</option>
                            </select>
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[10px]">
                            <h3 className="text-[15px] sm:text-[18px]">Filter Category:</h3>
                            <select className="bg-white border-[1px] border-slate-300 rounded-[10px] w-[100px] sm:w-[150px] py-[5px] px-[7px] mt-[2px] hover:bg-white cursor-pointer outline-none transition-all ease-in-out duration-200">
                                <option value="all_category">All</option>
                                <option value="category_a">Category A</option>
                                <option value="category_b">Category B</option>
                            </select>
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[10px]">
                            <h3 className="text-[15px] sm:text-[18px]">Filter Status:</h3>
                            <select className="bg-white border-[1px] border-slate-300 rounded-[10px] w-[100px] sm:w-[150px] py-[5px] px-[7px] mt-[2px] hover:bg-white cursor-pointer outline-none transition-all ease-in-out duration-200">
                                <option value="all_status">All</option>
                                <option value="hold">Hold</option>
                                <option value="inprogress">In Progress</option>
                                <option value="done">Done</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-col flex-wrap items-start justify-start mt-[30px] mb-[70px] w-full relative gap-[20px]">
                        <CardTodo
                            status="Hold"
                            title="My Todo Title"
                            description="My todo description."
                            deadline="2 December 2023"
                            valuePriority="High"
                            valueCat="Category A"
                        />
                        <CardTodo
                            status="In Progress"
                            title="My Todo 2 Title"
                            description="My todo 2 description."
                            deadline="22 December 2023"
                            valuePriority="Medium"
                            valueCat="Category B"
                        />
                        <CardTodo
                            status="Done"
                            title="My Todo 3 Title"
                            description="My todo 3 description.My todo 3 description.My todo 3 description.My todo 3 description.My todo 3 description.My todo 3 description.My todo 3 description.My todo 3 description.My todo 3 description.My todo 3 description."
                            deadline="25 December 2023"
                            valuePriority="Low"
                            valueCat="Category B"
                        />
                        <CardTodo
                            status="Done"
                            title="My Todo 3 Title"
                            description="My todo 3 description.My todo 3 description.My todo 3 description.My todo 3 description.My todo 3 description.My todo 3 description.My todo 3 description.My todo 3 description.My todo 3 description.My todo 3 description."
                            deadline="25 December 2023"
                            valuePriority="Low"
                            valueCat="Category B"
                        />
                        <CardTodo
                            status="Done"
                            title="My Todo 3 Title"
                            description="My todo 3 description.My todo 3 description.My todo 3 description.My todo 3 description.My todo 3 description.My todo 3 description.My todo 3 description.My todo 3 description.My todo 3 description.My todo 3 description."
                            deadline="25 December 2023"
                            valuePriority="Low"
                            valueCat="Category B"
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
            {create ? (
                <div className="flex flex-col items-center justify-center bg-opacity-50 bg-black w-full min-h-[100vh] overflow-hidden top-0 left-0 z-50 fixed">
                    <div className="flex flex-col items-start justify-start bg-white rounded-2xl p-[30px] overflow-hidden relative max-h-[95vh]">
                        <h4 className="text-[25px] font-bold -mt-[3px]">Add Todo</h4>
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
                                    placeholder="Category"
                                />
                            </div>
                            <div className="flex flex-row items-center justify-start gap-[10px]">
                                <h3 className="text-[18px]">Status:</h3>
                                <select className="bg-white border-[1px] border-slate-300 rounded-[10px] w-[100px] py-[5px] px-[7px] mt-[2px] hover:bg-white cursor-pointer outline-none transition-all ease-in-out duration-200">
                                    <option value="hold">Hold</option>
                                    <option value="inprogress">In Progress</option>
                                    <option value="done">Done</option>
                                </select>
                            </div>
                            <div className="flex flex-row items-center justify-start gap-[10px]">
                                <h3 className="text-[18px]">Priority:</h3>
                                <select className="bg-white border-[1px] border-slate-300 rounded-[10px] w-[100px] py-[5px] px-[7px] mt-[2px] hover:bg-white cursor-pointer outline-none transition-all ease-in-out duration-200">
                                    <option value="high">High</option>
                                    <option value="medium">Medium</option>
                                    <option value="low">Low</option>
                                </select>
                            </div>
                            <div className="flex flex-row items-center justify-start gap-[10px]">
                                <h3 className="text-[18px]">Deadline:</h3>
                                <input
                                    type="date"
                                    className="bg-white border-[1px] border-slate-300 rounded-[10px] w-[100px] py-[5px] px-[7px] mt-[2px] hover:bg-white cursor-pointer outline-none transition-all ease-in-out duration-200"
                                />
                            </div>
                            <div className="flex flex-col relative w-[200px] sm:w-[400px] md:w-[600px]">
                                <textarea
                                    className=" bg-white border-[1px] border-slate-300 rounded-[10px] w-full py-[5px] px-[9px] mt-[2px] focus:border-[4px] outline-none min-h-[100px] max-h-[300px]"
                                    placeholder="Description"
                                />
                            </div>
                            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-end gap-[20px] w-full mt-[16px] sm:mt-[20px]">
                                <Button
                                    text="Cancel"
                                    type="secondary"
                                    size="sm"
                                    onClick={() => {
                                        setCreate(false);
                                    }}
                                    className="order-2 sm:order-1"
                                />
                                <Button text="Add Todo" type="primary" size="sm" className="order-1 sm:order-2" />
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
