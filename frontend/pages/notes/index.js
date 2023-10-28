import { GrTask } from "react-icons/gr";
import { CgNotes, CgProfile } from "react-icons/cg";
import { TbLogout2 } from "react-icons/tb";
import { FaTasks } from "react-icons/fa";

export default function Notes() {
    return (
        <>
            <div className="fixed flex flex-col items-center justify-between w-[110px] h-[100vh] bg-[#2984C9]">
                <div className="flex flex-col items-start justify-start gap-[20px] mt-[30px]">
                    <div className="text-[35px] hover:bg-[#2b587a] active:bg-[#1e3c53] transition-all ease-in-out duration-200 hover:scale-110 rounded-lg p-[15px] cursor-pointer">
                        <FaTasks color="white" />
                    </div>
                    <div className="text-[35px]  hover:bg-[#2b587a] active:bg-[#1e3c53] transition-all ease-in-out duration-200 hover:scale-110 rounded-lg p-[15px] cursor-pointer">
                        <CgNotes color="white" />
                    </div>
                    <div className="text-[35px]  hover:bg-[#2b587a] active:bg-[#1e3c53] transition-all ease-in-out duration-200 hover:scale-110 rounded-lg p-[15px] cursor-pointer">
                        <CgProfile color="white" />
                    </div>
                </div>
                <div className="text-[35px] hover:bg-[#2b587a] active:bg-[#1e3c53] transition-all ease-in-out duration-300 hover:scale-110 rounded-lg p-[15px] cursor-pointer mb-[30px]">
                    <TbLogout2 color="white" />
                </div>
            </div>
        </>
    );
}
