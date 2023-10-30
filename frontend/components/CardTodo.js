import { MdDateRange } from "react-icons/md";
import TagTodo from "@/components/TagTodo";
import StatusTodo from "@/components/StatusTodo";

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
        <div className="flex flex-row items-center justify-start rounded-xl bg-slate-200 w-full h-[117px] py-[10px] px-[20px] relative hover:bg-slate-300 transition-all ease-in-out duration-200 cursor-pointer">
            <StatusTodo status={status} />
            <div className="flex flex-col items-start justify-start ml-[15px]">
                <h3 className="text-[20px] font-semibold line-clamp-1">
                    {title} <span className="font-normal">- {description}</span>
                </h3>
                <div className="flex flex-row items-center justify-start gap-[6px] text-[18px]">
                    <MdDateRange />
                    <h4 className="text-[15px] mt-[3px]">{deadline}</h4>
                </div>
                <div className="flex flex-row items-center justify-start gap-[9px] mt-[5px]">
                    <TagTodo type={tagType1} value={valuePriority} />
                    <TagTodo type={tagType2} value={valueCat} />
                </div>
            </div>
        </div>
    );
}
