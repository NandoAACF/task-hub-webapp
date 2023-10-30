import clsx from "clsx";

export default function TagTodo({ type = "Category", value = "Low" }) {
    const tagType = (type, value) => {
        if (type === "Category") return "bg-green-400";
        if (type === "Priority" && value === "Low") return "bg-yellow-400";
        if (type === "Priority" && value === "Medium") return "bg-orange-400";
        if (type === "Priority" && value === "High") return "bg-red-400";
    };

    return (
        <div
            className={clsx(
                "flex flex-col items-center justify-center rounded-2xl px-[13px] py-[3px] font-medium",
                tagType(type, value)
            )}
        >
            <h5 className="text-[13px]">{value}</h5>
        </div>
    );
}
