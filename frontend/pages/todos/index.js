import { FaTasks } from "react-icons/fa";
import { RiAddCircleFill } from "react-icons/ri";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdFavorite } from "react-icons/md";
import { MdDateRange } from "react-icons/md";

import { useState, useEffect, useContext } from "react";

import TagTodo from "@/components/TagTodo";
import StatusTodo from "@/components/StatusTodo";
import CardTodo from "@/components/CardTodo";
import Button from "@/components/Button";
import Sidebar from "@/components/Sidebar";
import FormTodo from "@/components/FormTodo";

import useNotifications from "@/utils/hooks/useNotifications";
import useAxios from "@/utils/hooks/useAxios";
import { AuthContext } from "@/utils/context/AuthContext";
import { useRouter } from "next/router";

export default function Todos() {
    const [create, setCreate] = useState(false);
    const [update, setUpdate] = useState(false);
    const [remove, setRemove] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const { onSuccess } = useNotifications();
    const { userInfo } = useContext(AuthContext);
    const [todosData, setTodosData] = useState(null);
    const [todoId, setTodoId] = useState(null);
    const [activeIcon, setActiveIcon] = useState("todos");

    const router = useRouter();

    useEffect(() => {
        if (!userInfo.isLoggedIn) {
            router.replace("/login");
        }
    }, [userInfo.isLoggedIn, router]);

    const [categoryOptions, setCategoryOptions] = useState([
        { value: "", label: "All" }
    ]);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(false);
            const params = {
                sortBy: router.query.sortBy,
                category: router.query.category,
                deadline: router.query.deadline,
                status: router.query.status,
                priority: router.query.priority,
            };

            const data = await useAxios(`/todos/list/${userInfo?.userInfo?.id}`, "GET", null, true, params);
            setTodosData(data);
        };

        if (router.isReady || isLoading) {
            fetchData();
        }
    }, [router.isReady, router.query, isLoading]);

    useEffect(() => {
        const fetchCategoryData = async () => {
            const fetchedCategoryData = await useAxios(`/todos/findUniqueCategories/${userInfo?.userInfo?.id}`, "GET", null, true);

            const newCategoryOptions = fetchedCategoryData?.map(newCategory => ({
                value: newCategory,
                label: newCategory,
            }));

            setCategoryOptions(prevOptions => [
                { value: "", label: "All" },
                ...newCategoryOptions,
            ]);
        };

        if (router.isReady || isLoading) {
            fetchCategoryData();
        }

    }, [router.isReady,  categoryOptions]);
    
    const handleEditClick = (id) => {
        setTodoId(id);
        setUpdate(true);
    };

    const handleDeleteClick = (id) => {
        setTodoId(id);
        setRemove(true);
    };

    const handleRemove = async () => {
        await useAxios(`/todos/${todoId}`, "DELETE");
        onSuccess("Todos removed succesfully");
        setRemove(false);
        router.replace("/todos");
    };

    const handleExit = () => {
        setCreate(false);
        setUpdate(false);
        setRemove(false);
        setIsLoading(true);
    };

    const handleFilter = () => {
        let sortValue = document.getElementById("sort").value;
        let priorityValue = document.getElementById("priority").value;
        let statusValue = document.getElementById("status").value;
        let categoryValue = document.getElementById("category").value;

        let sortByValue = sortValue === "latest" || sortValue === "oldest" ? sortValue : "";
        let deadlineValue = sortValue === "asc" || sortValue === "desc" ? sortValue : "";

        router.push({
            pathname: router.pathname,
            query: {
                sortBy: sortByValue,
                deadline: deadlineValue,
                priority: priorityValue,
                status: statusValue,
                category: categoryValue,
            },
        });
    };

    const handleResetFilter = () => {
        document.getElementById("sort").value = "asc";
        document.getElementById("priority").value = "";
        document.getElementById("category").value = "";
        document.getElementById("status").value = "";
        
        router.push({
            pathname: router.pathname,
            query: {},
        });
    };

    return (
        <>
            <div className="flex flex-row items-start justify-start min-h-[100vh] relative overflow-hidden">
                <Sidebar activeIcon={activeIcon} />
                <div className="flex flex-col items-start justify-start ml-[100px] sm:ml-[160px] mr-[30px] sm:mr-[70px] relative w-full">
                    <h2 className="text-[23px] sm:text-[48px] md:text-[53px] font-semibold mt-[20px]">
                        <span className="bg-gradient-to-r from-[#2984C9] via-[#3681B8] to-[#0B3654] text-transparent bg-clip-text">
                            {userInfo.userInfo?.username}'s
                        </span>{" "}
                        Todos.
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[20px] gap-y-[20px] mt-[20px] md:mt-[28px]">
                        <div className="flex flex-row items-center justify-between gap-[10px]">
                            <h3 className="text-[15px] sm:text-[18px]">Sort By:</h3>
                            <select
                                id="sort"
                                className="bg-white border-[1px] border-slate-300 rounded-[10px] w-[105px] sm:w-[150px] py-[5px] px-[7px] mt-[2px] hover:bg-white cursor-pointer outline-none transition-all ease-in-out duration-200"
                            >
                                <option value="asc">Deadline Asc</option>
                                <option value="desc">Deadline Desc</option>
                                <option value="latest">Latest</option>
                                <option value="oldest">Oldest</option>
                            </select>
                        </div>
                        <div className="flex flex-row items-center justify-between gap-[10px]">
                            <h3 className="text-[15px] sm:text-[18px]">Filter Priority:</h3>
                            <select
                                id="priority"
                                className="bg-white border-[1px] border-slate-300 rounded-[10px] w-[100px] sm:w-[150px] py-[5px] px-[7px] mt-[2px] hover:bg-white cursor-pointer outline-none transition-all ease-in-out duration-200"
                            >
                                <option value="">All</option>
                                <option value="high">High</option>
                                <option value="medium">Medium</option>
                                <option value="low">Low</option>
                            </select>
                        </div>
                        <div className="flex flex-row items-center justify-between gap-[10px]">
                            <h3 className="text-[15px] sm:text-[18px]">Filter Category:</h3>
                            <select
                                id="category"
                                className="bg-white border-[1px] border-slate-300 rounded-[10px] w-[100px] sm:w-[150px] py-[5px] px-[7px] mt-[2px] hover:bg-white cursor-pointer outline-none transition-all ease-in-out duration-200"
                            >
                                {categoryOptions.map((category) => (
                                    <option key={category.value} value={category.value}>
                                        {category.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="flex flex-row items-center justify-between gap-[10px]">
                            <h3 className="text-[15px] sm:text-[18px]">Filter Status:</h3>
                            <select
                                id="status"
                                className="bg-white border-[1px] border-slate-300 rounded-[10px] w-[100px] sm:w-[150px] py-[5px] px-[7px] mt-[2px] hover:bg-white cursor-pointer outline-none transition-all ease-in-out duration-200"
                            >
                                <option value="">All</option>
                                <option value="Hold">Hold</option>
                                <option value="InProgress">In Progress</option>
                                <option value="Done">Done</option>
                            </select>
                        </div>
                        <div className="flex justify-center gap-5">
                            <Button text="Apply Filters" type="primary" size="xsm" onClick={handleFilter} />
                            <Button text="Reset Filters" type="resetfilter" size="xsm" onClick={handleResetFilter} />
                        </div>
                    </div>
                    <div className="flex flex-col flex-wrap items-start justify-start mt-[30px] mb-[110px] w-full relative gap-[20px]">
                        {todosData &&
                            todosData.map((todo, index) => (
                                <CardTodo
                                    onClick={() => {
                                        router.push(`/todos/${todo.id}`);
                                    }}
                                    key={index}
                                    id={todo.id}
                                    status={todo.status}
                                    title={todo.title}
                                    description={todo.desc}
                                    deadline={todo.deadline}
                                    valuePriority={todo.priority}
                                    valueCat={todo.category}
                                    updatedAt={todo.updatedAt}
                                    handleEditClick={handleEditClick}
                                    handleDeleteClick={handleDeleteClick}
                                />
                            ))}
                        {/* <CardTodo
                            status="Hold"
                            title="My Todo Title"
                            description="My todo description."
                            deadline="2 December 2023"
                            valuePriority="High"
                            valueCat="Category A"
                            handleEditClick={handleEditClick}
                            handleDeleteClick={handleDeleteClick}
                        />
                        <CardTodo
                            status="Done"
                            title="My Todo 3 Title"
                            description="My todo 3 description.My todo 3 description.My todo 3 description.My todo 3 description.My todo 3 description.My todo 3 description.My todo 3 description.My todo 3 description.My todo 3 description.My todo 3 description."
                            deadline="25 December 2023"
                            valuePriority="Low"
                            valueCat="Category B"
                            handleEditClick={handleEditClick}
                            handleDeleteClick={handleDeleteClick}
                        /> */}
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
            {/* Modal create todo */}
            {create ? <FormTodo handleExit={handleExit} setCategories={setCategoryOptions} /> : ""}
            {/* Modal update todo */}
            {update ? <FormTodo id={todoId} isUpdate={true} handleExit={handleExit} setCategories={setCategoryOptions} /> : ""}
            {/* Modal remove todo */}
            {remove ? (
                <div className="flex flex-col items-center justify-center bg-opacity-50 bg-black w-full min-h-[100vh] overflow-hidden top-0 left-0 z-50 fixed">
                    <div className="flex flex-col items-start justify-start bg-white rounded-2xl p-[30px] overflow-hidden relative max-h-[95vh]">
                        <h4 className="text-[25px] font-bold -mt-[3px]">Are you sure want to remove this todo?</h4>
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
