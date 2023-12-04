import { MdDateRange } from "react-icons/md";
import TagTodo from "@/components/TagTodo";
import StatusTodo from "@/components/StatusTodo";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import moment from "moment-timezone";

export default function CardTodo({
    id,
    status = "Hold",
    title = "My Todo Title",
    description = "My todo description.",
    deadline = "Todo deadline",
    tagType1 = "Priority",
    valuePriority = "High",
    tagType2 = "Category",
    valueCat = "Category A",
    handleEditClick,
    handleDeleteClick,
}) {
    const handleToogleEdit = () => {
        console.log("handle toogle edit");
        handleEditClick(id);
    };

    const handleToogleDelete = () => {
        handleDeleteClick(id);
    };

    return (
        <div className="flex flex-row items-start justify-start w-full h-[230px] sm:h-[117px] rounded-xl shadow-lg shadow-[999999]/[29%] relative cursor-pointer hover:bg-slate-300 transition-all ease-in-out duration-200 bg-slate-200">
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start rounded-xl bg-slate-200 w-full h-[230px] sm:h-[117px] py-[10px] px-0 sm:px-[20px] relative hover:bg-slate-300 transition-all ease-in-out duration-200 cursor-pointer">
                <StatusTodo status={status === "InProgress" ? "In Progress" : status} />
                <div className="flex flex-col items-center justify-center sm:items-start sm:justify-start sm:ml-[15px] mt-[10px] sm:mt-0">
                    <h3 className="text-[20px] font-semibold line-clamp-1">
                        {title} <span className="hidden sm:inline font-normal">- {description}</span>
                    </h3>
                    <div className="flex flex-row items-center justify-start gap-[6px] text-[16px] sm:text-[18px]">
                        <MdDateRange />
                        <h4 className="text-[14px] sm:text-[15px] mt-[3px]">
                            {moment(deadline).tz("Asia/Jakarta").format("DD MMM YYYY HH:mm A")}
                        </h4>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-[9px] mt-[15px] sm:mt-[5px]">
                        <TagTodo
                            type={tagType1}
                            value={valuePriority.charAt(0).toUpperCase() + valuePriority.slice(1)}
                        />
                        <TagTodo type={tagType2} value={valueCat} />
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-start min-w-[50px] sm:min-w-[60px] h-full bg-[#2984C9] rounded-r-[20px] shadow-lg shadow-[999999]/[29%]">
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
            </div>
        </div>
    );
}
