import Button from "@/components/Button";
import Input from "@/components/Input";
import { AuthContext } from "@/utils/context/AuthContext";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { CgNotes, CgProfile } from "react-icons/cg";
import { TbLogout2 } from "react-icons/tb";
import { FaTasks } from "react-icons/fa";


export default function Home() {

    const {userInfo, logoutUser} = useContext(AuthContext);
    const router = useRouter();

    useEffect(() => {
        if (!userInfo.isLoggedIn) {
            router.replace('/login');
        }
    }, [userInfo.isLoggedIn, router]);

    if (!userInfo.isLoggedIn) {
        return null; 
    }

    return (
        <>
            <div className="flex flex-row items-start justify-start min-h-[100vh] relative overflow-hidden">
                <div className="fixed flex flex-col items-center justify-between w-[110px] h-[100vh] bg-[#2984C9]">
                    <div className="flex flex-col items-start justify-start gap-[20px] mt-[30px]">
                        <div className="text-[35px] hover:bg-[#2b587a] active:bg-[#1e3c53] transition-all ease-in-out duration-200 hover:scale-110 rounded-lg p-[15px] cursor-pointer">
                            <FaTasks color="white" />
                        </div>
                        <div className="text-[35px]  hover:bg-[#2b587a] active:bg-[#1e3c53] transition-all ease-in-out duration-200 hover:scale-110 rounded-lg p-[15px] cursor-pointer">
                            <CgNotes color="white" />
                        </div>
                        <div className="text-[35px] bg-[#1e3c53] transition-all ease-in-out duration-200 hover:scale-110 rounded-lg p-[15px] cursor-pointer">
                            <CgProfile color="white" />
                        </div>
                    </div>
                    <div className="text-[35px] hover:bg-[#2b587a] active:bg-[#1e3c53] transition-all ease-in-out duration-300 hover:scale-110 rounded-lg p-[15px] cursor-pointer mb-[30px]">
                        <TbLogout2 color="white" onClick={logoutUser}/>
                    </div>
                </div>
                <div className="flex flex-col items-start justify-start ml-[160px] mr-[60px]">
                    <h2 className="text-[53px] font-semibold mt-[20px]">
                        <span className="bg-gradient-to-r from-[#2984C9] via-[#3681B8] to-[#0B3654] text-transparent bg-clip-text">
                            Username's
                        </span>{" "}
                        Profile.
                    </h2>
                    <form className="flex flex-col items-start justify-start gap-[19px] mt-[28px]">
                        <div className="flex flex-row items-center justify-start gap-[25px]">
                            <h5 className="text-[19px] font-semibold">Username:</h5>
                            <input
                                type="text"
                                className=" bg-white border-[1px] border-slate-300 rounded-[10px] w-full py-[7px] px-[9px] mt-[2px] focus:border-[4px] outline-none"
                                value="auto diisi usernamenya"
                            />
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[70px]">
                            <h5 className="text-[19px] font-semibold">Email:</h5>
                            <input
                                type="email"
                                className=" bg-black bg-opacity-20 border-[1px] border-slate-300 rounded-[10px] w-full py-[7px] px-[9px] mt-[2px] focus:border-[4px] outline-none cursor-not-allowed text-slate-500"
                                value="nando.aacf88@gmail.com"
                                disabled
                            />
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[14px] mt-[8px]">
                            <Button text="Reset Password" type="resetpassword" size="sm" className="" />
                            <Button text="Save Changes" type="primary" size="sm" className="" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
