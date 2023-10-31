import Button from "@/components/Button";
import Input from "@/components/Input";
import { AuthContext } from "@/utils/context/AuthContext";
import { useContext, useState } from "react";

export default function ForgotPassword() {
    return (
        <div className="flex flex-row items-center justify-center min-h-screen overflow-hidden relative">
            <div className="flex flex-col items-center justify-center w-full h-full ml-[60px]">
                <h1 className="text-[50px] font-semibold text-center -mt-[20px]">Forgot Your Password?</h1>
                <h1 className="text-[20px] font-medium text-center mt-[14px]">
                    Enter Your Email To Reset Your Password
                </h1>
                <form className="flex flex-col items-start justify-center w-full h-full gap-[14px] pl-[15%] pr-[15%] relative mt-[35px]">
                    <Input label="Email" type="email" className="w-full" name="email" />
                    <Button text="Submit" type="primary" size="md" className="w-full mt-[40px]" />
                </form>
                <h3 className="text-[19px] text-center mt-[30px] ">
                    Return to{" "}
                    <span className="underline cursor-pointer text-[#2984C9] hover:text-[#2471AB]">Sign In</span>
                </h3>
            </div>
            <div className="flex flex-col items-center justify-center w-full h-full">
                <img src="/assets/images/ForgotPassword/hero.svg" className="" />
            </div>
        </div>
    );
}
