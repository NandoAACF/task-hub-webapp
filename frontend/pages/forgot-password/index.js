import Button from "@/components/Button";
import Input from "@/components/Input";
import { AuthContext } from "@/utils/context/AuthContext";
import useAxios from "@/utils/hooks/useAxios";
import useNotifications from "@/utils/hooks/useNotifications";
import { useRouter } from "next/router";
import { useState } from "react";

export default function ForgotPassword() {

    const router = useRouter();
    const { onError, onSuccess } = useNotifications();

    const [formData, setFormData] = useState({
        email: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };


    const handleForgotPassword = async (e) => {
        e.preventDefault();
        const response = await useAxios("/auth/forgot-password", "POST", formData, false);
        if (response) {
            onSuccess("Email has been sent successfully");
        } else {
            onError("Your email hasn't been registered");
        }
    };

    return (
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen overflow-hidden relative mx-[35px] sm:mx-[40px] lg:mx-0">
            <div className="flex flex-col items-center justify-center w-full h-full lg:ml-[60px]">
                <h1 className="text-[40px] md:text-[50px] font-semibold text-center -mt-[20px]">
                    Forgot Your Password?
                </h1>
                <h1 className="text-[18px] md:text-[20px] font-medium text-center mt-[14px]">
                    Enter Your Email To Reset Your Password
                </h1>
                <form className="flex flex-col items-start justify-center w-full h-full gap-[14px] md:pl-[15%] md:pr-[15%] pl-[10%] pr-[10%] relative mt-[35px]"
                      onSubmit={handleForgotPassword}>
                    <Input
                        label="Email"
                        type="email"
                        className="w-full"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        error="emailError"
                    />
                    <Button text="Submit" type="primary" size="md" className="w-full mt-[40px]" />
                </form>
                <h3 className="text-[17px] sm:text-[19px] text-center mt-[30px] ">
                    {/* Return to{" "} */}
                    <span onClick={() => router.push("/login")} className="underline cursor-pointer text-[#2984C9] hover:text-[#2471AB]" >Sign In</span>
                    {" | "}
                    <span onClick={() => router.push("/register")} className="underline cursor-pointer text-[#2984C9] hover:text-[#2471AB]">Register</span>
                </h3>
            </div>
            <div className="hidden lg:flex flex-col items-center justify-center w-full h-full">
                <img src="/assets/images/ForgotPassword/hero.svg" className="" />
            </div>
        </div>
    );
}
