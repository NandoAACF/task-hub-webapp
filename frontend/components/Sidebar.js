import { AuthContext } from "@/utils/context/AuthContext";
import { useContext } from "react";
import Link from "next/link";
import { FaTasks } from "react-icons/fa";
import { CgNotes, CgProfile } from "react-icons/cg";
import { TbLogout2 } from "react-icons/tb";

export default function Sidebar() {
    const { logoutUser } = useContext(AuthContext);

    return (
        <>
            <div className="fixed flex flex-col items-center justify-between w-[70px] sm:w-[110px] h-[100vh] bg-[#2984C9]">
                <div className="flex flex-col items-start justify-start gap-[20px] mt-[30px]">
                    <div className="text-[25px] sm:text-[35px] hover:bg-[#2b587a] active:bg-[#1e3c53] transition-all ease-in-out duration-200 hover:scale-110 rounded-lg p-[8px] sm:p-[15px] cursor-pointer">
                        <Link href="/todos">
                            <FaTasks color="white" />
                        </Link>
                    </div>
                    <div className="text-[25px] sm:text-[35px]  hover:bg-[#2b587a] active:bg-[#1e3c53] transition-all ease-in-out duration-200 hover:scale-110 rounded-lg p-[8px] sm:p-[15px] cursor-pointer">
                        <Link href="/notes">
                            <CgNotes color="white" />
                        </Link>
                    </div>
                    <div className="text-[25px] sm:text-[35px] bg-[#1e3c53] transition-all ease-in-out duration-200 hover:scale-110 rounded-lg p-[8px] sm:p-[15px] cursor-pointer">
                        <Link href="/user-profile">
                            <CgProfile color="white" />
                        </Link>
                    </div>
                </div>
                <div className="text-[25px] sm:text-[35px] hover:bg-[#2b587a] active:bg-[#1e3c53] transition-all ease-in-out duration-300 hover:scale-110 rounded-lg p-[8px] sm:p-[15px] cursor-pointer mb-[30px]">
                    <TbLogout2 color="white" onClick={logoutUser} />
                </div>
            </div>
        </>
    );
}
