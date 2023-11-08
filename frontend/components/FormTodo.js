import Button from "@/components/Button";
import { AuthContext } from "@/utils/context/AuthContext";
import useAxios from "@/utils/hooks/useAxios";
import useNotifications from "@/utils/hooks/useNotifications";
import { useContext, useEffect, useState } from "react";

export default function FormTodo({ id, isUpdate = false, handleExit }) {
    const { onSuccess, onError } = useNotifications();
    const { userInfo } = useContext(AuthContext);
    const [initialPayload, setInitialPayload] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await useAxios(`/todos/${id}`, "GET");
                setInitialPayload(response);
            } catch (error) {
                onError("Error occur while fetching the data");
            }
        };
        if (isUpdate) fetchData();
    }, [isUpdate, id]);

    const preparePayload = (e) => {
        e.preventDefault();
        const userId = userInfo.userInfo.id;
        const title = e.target.title.value;
        const topic = e.target.topic.value;
        const desc = e.target.description.value;
        const payload = {
            userId,
            title,
            topic,
            desc,
            updateDate: new Date().toLocaleDateString(),
        };

        return payload;
    };

    const handleCreate = async (e) => {
        const todoData = preparePayload(e);
        const response = await useAxios("/todos", "POST", todoData);

        if (response) {
            onSuccess("Todo added succesfully");
            handleExit();
        }
    };

    const handleUpdate = async (e) => {
        const todoData = preparePayload(e);
        const response = await useAxios(`/todos/${id}`, "PUT", todoData);

        if (response) {
            handleExit();
            onSuccess("Todo updated succesfully");
        }
    };

    const handleSubmit = (e) => {
        if (isUpdate) handleUpdate(e);
        else handleCreate(e);
    };

    return (
        <>
            <div className="flex flex-col items-center justify-center bg-opacity-50 bg-black w-full min-h-[100vh] overflow-hidden top-0 left-0 z-50 fixed">
                <div className="flex flex-col items-start justify-start bg-white rounded-2xl p-[30px] overflow-hidden relative max-h-[95vh]">
                    <h4 className="text-[25px] font-bold -mt-[3px]">{isUpdate ? "Update" : "Create"} Todo</h4>
                    <form 
                        onSubmit={handleSubmit}
                        className="flex flex-col items-start justify-start gap-[13px] mt-[14px] mb-[1px]"
                    >
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
                            <select className="bg-white border-[1px] border-slate-300 rounded-[10px] w-[100px] sm:w-[150px] py-[5px] px-[7px] mt-[2px] hover:bg-white cursor-pointer outline-none transition-all ease-in-out duration-200">
                                <option value="hold">Hold</option>
                                <option value="inprogress">In Progress</option>
                                <option value="done">Done</option>
                            </select>
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[10px]">
                            <h3 className="text-[18px]">Priority:</h3>
                            <select className="bg-white border-[1px] border-slate-300 rounded-[10px] w-[100px] sm:w-[150px] py-[5px] px-[7px] mt-[2px] hover:bg-white cursor-pointer outline-none transition-all ease-in-out duration-200">
                                <option value="high">High</option>
                                <option value="medium">Medium</option>
                                <option value="low">Low</option>
                            </select>
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[10px]">
                            <h3 className="text-[18px]">Deadline:</h3>
                            <input
                                type="date"
                                className="bg-white border-[1px] border-slate-300 rounded-[10px] w-[100px] sm:w-[150px] py-[5px] px-[7px] mt-[2px] hover:bg-white cursor-pointer outline-none transition-all ease-in-out duration-200"
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
                                onClick={handleExit}
                                className="order-2 sm:order-1"
                            />
                            <Button
                                text={isUpdate ? "Update Todo" : "Add Todo"}
                                type="primary"
                                size="sm"
                                className="order-1 sm:order-2"
                            />                        
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
