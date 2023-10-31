import { useMemo } from "react";
import Text from "../components/Text";
import clsx from "clsx";

// Contoh Penggunaan
// <Button
//     text="Kembalii"
//     color="blue"
//     size="sm"
//     type="primary"
// >
// </Button>

export default function Button({
    StartIcon,
    text = "Button",
    EndIcon,
    color = "blue",
    size = "sm",
    type = "primary",
    isSubmit = "",
    onClick = () => {},
    className,
    disabled,
}) {
    // hover:shadow-[0_4px_8px_rgba(249, 156, 16, 0.21)]
    const btnColor = useMemo(() => {
        if (type === "primary")
            return `text-white bg-[#2984C9] hover:bg-[#2471AB] active:bg-[#1A5481] hover:shadow-lg hover:shadow-[#2471AB]/[29%] hover:-translate-y-[6px]`;
        if (type === "secondary")
            return `text-black bg-transparant hover:text-white hover:bg-[#2471AB] active:bg-[#1A5481] hover:shadow-lg hover:shadow-[#2471AB]/[29%] hover:-translate-y-[6px]`;
        if (type == "disabled")
            return `bg-gradient-to-b from-[#6F6B3C] to-[#695435] cursor-not-allowed text-[#3F3C48] pointer-events-none`;
        if (type == "disabledsecondary")
            return `bg-transparant ring-[2px] ring-white ring-inset text-white ring-opacity-60 text-[#747680] cursor-not-allowed pointer-events-none`;
        if (type == "dashboard")
            return `bg-[#E6E6E6] text-[#606060] hover:to-[#73C2FB] active:from-[#0047A7] active:to-[#0047A7] hover:text-white hover:bg-gradient-to-l hover:from-[#045DD4] focus:bg-gradient-to-l focus:from-[#045DD4] focus:to-[#73C2FB] focus:text-white`;
        if (type == "logout") return `bg-[#878888] text-white hover:bg-black`;
    }, [color, type]);

    const fontSize = useMemo(() => {
        return {
            xsm: `text-sm px-5 py-1.5 gap-2.5`,
            sm: `text-[15px] px-[24px] py-[10px] gap-2.5`,
            md: `text-[18px] px-[24px] py-[15px] gap-3.5`,
            lg: `text-[18px] px-[24px] py-[19px] gap-4`,
        }[size];
    }, [size]);

    return (
        <button
            type={isSubmit}
            onClick={onClick}
            className={clsx(
                "transition-all rounded-[8px] font-bold ease-in-out duration-200 flex justify-center items-center ",
                size === "sm" && type === "secondary" ? "font-bold" : "",
                btnColor,
                fontSize,
                className
            )}
            disabled={disabled}
        >
            <Text
                StartIcon={StartIcon}
                value={text}
                EndIcon={EndIcon}
                startClassName={clsx(
                    "-mr-[4.1px]",
                    size === "sm" ? "w-7 h-7" : size === "md" ? "w-8 h-8" : size === "lg" ? "w-9 h-9" : ""
                )}
                endClassName={clsx(
                    "-ml-[2.1px]",
                    size === "sm" ? "w-7 h-7" : size === "md" ? "w-8 h-8" : size === "lg" ? "w-9 h-9" : ""
                )}
            />
        </button>
    );
}
