import Button from "@/components/Button";
import Input from "@/components/Input";
import useAxios from "@/utils/hooks/useAxios";
import useNotifications from "@/utils/hooks/useNotifications";
import { useRouter } from "next/router";
import { useState } from "react";

export default function ChangePassword() {
    const router = useRouter();
    const { onSuccess, onError } = useNotifications();

    const { id } = router.query;

    const [formData, setFormData] = useState({
        current_password: "",
        new_password: "",
        new_password_confirmation: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleResetPassword = async (e) => {
        e.preventDefault();
        const passwordFieldError = !(formData.new_password === formData.new_password_confirmation && /^.{8,12}$/.test(formData.new_password));
        if (passwordFieldError) {
            onError("Periksa kembali isian anda");
            return;
        }
        const response = await useAxios(`/users/change-password/${id}`, "PUT", formData);
        if (response) {
            onSuccess("Password was changed successfully. Please login again");
            router.push("/login");
        }
        else {
            onError("Password change failed. Check the field again!");
        }
    };  


    return (
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen overflow-hidden relative mx-[35px] sm:mx-[40px] lg:mx-0">
            <div className="flex flex-col items-center justify-center w-full h-full lg:ml-[60px]">
                <h1 className="text-[42px] sm:text-[52px] md:text-[60px] font-semibold text-center -mt-[20px]">
                    Change Password{" "}
                </h1>
                <form onSubmit={handleResetPassword}
                      className="flex flex-col items-start justify-center w-full h-full gap-[14px] md:pl-[15%] md:pr-[15%] pl-[10%] pr-[10%] relative mt-[35px]"
                >
                    <Input
                        label="Current Password"
                        type="password"
                        className="w-full"
                        name="current_password"
                        value={formData.current_password}
                        onChange={handleChange}
                        error="passwordError"
                    />
                    <Input
                        label="New Password"
                        type="password"
                        className="w-full"
                        name="new_password"
                        value={formData.new_password}
                        onChange={handleChange}
                        error="passwordError"
                    />
                    <Input
                        label="Confirm New Password"
                        type="password"
                        className="w-full"
                        name="new_password_confirmation"
                        value={formData.new_password_confirmation}
                        onChange={handleChange}
                        error="passwordError"
                    />
                    <Button
                        text="Change Password"
                        type="primary"
                        size="md"
                        className="w-full mt-[40px]"
                    />
                </form>
                <h3 className="text-[17px] sm:text-[19px] text-center mt-[30px] mx-[20px] sm:mx-0">
                    Return to{" "}
                    <span
                        onClick={() => router.push("/")}
                        className="underline cursor-pointer text-[#2984C9] hover:text-[#2471AB]"
                    >
                        Homepage
                    </span>
                </h3>
            </div>
            <div className="lg:hidden order-first flex flex-col items-center justify-center w-full h-full">
                <img
                    src="/assets/images/ResetPassword/hero.svg"
                    className="w-full"
                />
            </div>
            <div className="hidden lg:flex flex-col items-center justify-center w-full h-full">
                <img src="/assets/images/ResetPassword/hero.svg" className="" />
            </div>
        </div>
    );
}
