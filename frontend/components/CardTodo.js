import { MdDateRange } from "react-icons/md";
import TagTodo from "@/components/TagTodo";
import StatusTodo from "@/components/StatusTodo";
import moment from "moment";


export default function CardTodo({
    status = "Hold",
    title = "My Todo Title",
    description = "My todo description.",
    deadline = "2 December 2023",
    tagType1 = "Priority",
    valuePriority = "High",
    tagType2 = "Category",
    valueCat = "Category A",
}) {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start rounded-xl bg-slate-200 w-full h-[230px] sm:h-[117px] py-[10px] px-0 sm:px-[20px] relative hover:bg-slate-300 transition-all ease-in-out duration-200 cursor-pointer">
            <StatusTodo status={status} />
            <div className="flex flex-col items-center justify-center sm:items-start sm:justify-start sm:ml-[15px] mt-[10px] sm:mt-0">
                <h3 className="text-[20px] font-semibold line-clamp-1">
                    {title} <span className="hidden sm:inline font-normal">- {description}</span>
                </h3>
                <div className="flex flex-row items-center justify-start gap-[6px] text-[18px]">
                    <MdDateRange />
                    <h4 className="text-[15px] mt-[3px]">{moment(deadline).format("DD MMM YYYY HH:mm")}</h4>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-[9px] mt-[10px] sm:mt-[5px]">
                    <TagTodo type={tagType1} value={valuePriority.charAt(0).toUpperCase() + valuePriority.slice(1)} />
                    <TagTodo type={tagType2} value={valueCat} />
                </div>
            </div>
        </div>
    );
}
