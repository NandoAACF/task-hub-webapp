import Button from "@/components/Button";
import Input from "@/components/Input";
import { AuthContext } from "@/utils/context/AuthContext";
import useAxios from "@/utils/hooks/useAxios";
import useNotifications from "@/utils/hooks/useNotifications";
import { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";

export default function UserProfile() {
    const { userInfo, setUserInfo } = useContext(AuthContext);
    const [activeIcon, setActiveIcon] = useState("user-profile");
    const router = useRouter();
    const { onError, onSuccess } = useNotifications();

    const [formData, setFormData] = useState({
        username: userInfo.userInfo?.username,
        email: userInfo.userInfo?.email,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const response = await useAxios(`/users/${userInfo.userInfo.id}`, "PUT", formData);
            if (response) {
                onSuccess("Username berhasil diganti. Silakan login ulang");
                setUserInfo((prevUserInfo) => ({
                    ...prevUserInfo,
                    userInfo: {
                      ...prevUserInfo.userInfo,
                      username: formData?.username,
                    },
                  }));
            } else {
                onError("Username tidak berhasil diganti");
            }
        } catch (err) {
            onError(err);
        }
    };

    useEffect(() => {
        if (!userInfo.isLoggedIn) {
            router.replace("/login");
        }
    }, [userInfo.isLoggedIn, router]);

    if (!userInfo.isLoggedIn) {
        return null;
    }

    return (
        <>
            <div className="flex flex-row items-start justify-start min-h-[100vh] relative overflow-hidden">
                <Sidebar activeIcon={activeIcon} />
                <div className="flex flex-col items-start justify-start ml-[100px] sm:ml-[160px] mr-[30px] sm:mr-[70px]">
                    <h2 className="text-[23px] sm:text-[48px] md:text-[53px] font-semibold mt-[20px]">
                        <span className="bg-gradient-to-r from-[#2984C9] via-[#3681B8] to-[#0B3654] text-transparent bg-clip-text">
                            {userInfo.userInfo?.username}'s
                        </span>{" "}
                        Profile.
                    </h2>
                    <form className="flex flex-col items-start justify-start gap-[19px] mt-[28px]">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-[6px] sm:gap-[25px]">
                            <h5 className="text-[16px] sm:text-[19px] font-semibold">
                                Username:
                            </h5>
                            <input
                                type="text"
                                className=" bg-white border-[1px] border-slate-300 rounded-[10px] w-full py-[7px] px-[9px] mt-[2px] focus:border-[4px] outline-none"
                                name="username"
                                defaultValue={formData.username}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-[6px] sm:gap-[70px]">
                            <h5 className="text-[16px] sm:text-[19px] font-semibold">
                                Email:
                            </h5>
                            <input
                                type="email"
                                className=" bg-black bg-opacity-20 border-[1px] border-slate-300 rounded-[10px] w-full py-[7px] px-[9px] mt-[2px] focus:border-[4px] outline-none cursor-not-allowed text-slate-500"
                                name="email"
                                value={formData.email}
                                disabled
                            />
                        </div>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-center sm:justify-start gap-[14px] mt-[15px] sm:mt-[8px]">
                            <Link href={`/change-password/${userInfo.userInfo.id}`} passHref>
                                <Button 
                                    text="Change Password" 
                                    type="resetpassword" 
                                    size="sm" 
                                    className="" 
                                />
                            </Link>
                            <Button
                                text="Save Changes"
                                type="primary"
                                size="sm"
                                className=""
                                onClick={handleUpdate}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
