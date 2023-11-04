import clsx from "clsx";

export default function StatusTodo({ status = "Hold" }) {
    const statusType = (status) => {
        if (status === "Hold") return "bg-violet-700 text-white";
        if (status === "In Progress") return "bg-yellow-400 text-black";
        if (status === "Done") return "bg-teal-400";
    };

    return (
        <div
            className={clsx(
                "flex flex-col items-center justify-center rounded-xl sm:min-w-[90px] sm:max-w-[90px] w-[130px] h-[38px] sm:h-[90px] font-semibold",
                statusType(status)
            )}
        >
            <h4 className="text-[15px] text-center mx-[10px]">{status}</h4>
        </div>
    );
}
