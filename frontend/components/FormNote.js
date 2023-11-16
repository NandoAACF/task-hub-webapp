import Button from "@/components/Button";
import { AuthContext } from "@/utils/context/AuthContext";
import useAxios from "@/utils/hooks/useAxios";
import useNotifications from "@/utils/hooks/useNotifications";
import { useContext, useEffect, useState } from "react";

export default function FormNote({ id, isUpdate = false, handleExit, setTopics }) {
    const { onSuccess, onError } = useNotifications();
    const { userInfo } = useContext(AuthContext);
    const [initialPayload, setInitialPayload] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await useAxios(`/notes/${id}`, "GET");
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
        const noteData = preparePayload(e);
        const response = await useAxios("/notes", "POST", noteData);

        if (response) {
            onSuccess("Notes added succesfully");
            handleExit();
        }
    };

    const handleUpdate = async (e) => {
        const noteData = preparePayload(e);
        const response = await useAxios(`/notes/${id}`, "PUT", noteData);

        if (response) {
            handleExit();
            onSuccess("Notes edited succesfully");
        }
    };

    const handleSubmit = (e) => {
        if (isUpdate) handleUpdate(e);
        else handleCreate(e);
    };

    const handleCreateTopic = (newTopic) => {
        setTopics((prevTopics) => [
            ...prevTopics,
            { value: newTopic, label: newTopic},
        ]);
    };

    return (
        <>
            <div className="flex flex-col items-center justify-center bg-opacity-50 bg-black w-full min-h-[100vh] overflow-hidden top-0 left-0 z-50 fixed">
                <div className="flex flex-col items-start justify-start bg-white rounded-2xl p-[30px] overflow-hidden relative max-h-[95vh]">
                    <h4 className="text-[25px] font-bold -mt-[3px]">{isUpdate ? "Update" : "Create"} Note</h4>
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col items-start justify-start gap-[13px] mt-[14px] mb-[1px]"
                    >
                        <div className="flex flex-col relative w-[200px] sm:w-[400px] md:w-[600px]">
                            <input
                                type="text"
                                className=" bg-white border-[1px] border-slate-300 rounded-[10px] w-full py-[5px] px-[10px] mt-[2px] focus:border-[4px] outline-none text-[22px] font-semibold"
                                placeholder="Add Title"
                                name="title"
                                defaultValue={initialPayload?.title}
                            />
                        </div>
                        <div className="flex flex-col relative w-[200px] sm:w-[400px] md:w-[600px]">
                            <input
                                type="text"
                                className=" bg-white border-[1px] border-slate-300 rounded-[10px] w-full py-[5px] px-[10px] mt-[2px] focus:border-[4px] outline-none text-[18px] font-medium"
                                placeholder="Add Topic"
                                name="topic"
                                defaultValue={initialPayload?.topic}
                                onBlur={(e) =>  handleCreateTopic(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col relative w-[200px] sm:w-[400px] md:w-[600px]">
                            <textarea
                                className=" bg-white border-[1px] border-slate-300 rounded-[10px] w-full py-[5px] px-[10px] mt-[2px] focus:border-[4px] outline-none min-h-[100px] max-h-[300px]"
                                placeholder="Add your note here"
                                name="description"
                                defaultValue={initialPayload?.desc}
                            />
                        </div>
                        <div className="flex flex-col sm:flex-row items-center justify-end gap-[18px] sm:gap-[20px] w-full mt-[15px] sm:mt-[20px]">
                            <Button
                                text="Cancel"
                                type="secondary"
                                size="sm"
                                onClick={handleExit}
                                className="order-2 sm:order-1"
                            />
                            <Button
                                text={isUpdate ? "Update Note" : "Add Note"}
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
