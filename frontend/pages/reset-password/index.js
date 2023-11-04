import Button from "@/components/Button";
import Input from "@/components/Input";
import { AuthContext } from "@/utils/context/AuthContext";
import { useContext, useState } from "react";

export default function ResetPassword() {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen overflow-hidden relative mx-[35px] sm:mx-[40px] lg:mx-0">
            <div className="flex flex-col items-center justify-center w-full h-full lg:ml-[60px]">
                <h1 className="text-[42px] sm:text-[52px] md:text-[60px] font-semibold text-center -mt-[20px]">
                    Reset Password{" "}
                </h1>
                <form className="flex flex-col items-start justify-center w-full h-full gap-[14px] md:pl-[15%] md:pr-[15%] pl-[10%] pr-[10%] relative mt-[35px]">
                    <Input label="Password" type="password" className="w-full" name="password" />
                    <Input label="Confirm Password" type="password" className="w-full" name="passwordConfirmation" />
                    <Button text="Reset Password" type="primary" size="md" className="w-full mt-[40px]" />
                </form>
            </div>
            <div className="hidden lg:flex flex-col items-center justify-center w-full h-full">
                <img src="/assets/images/ResetPassword/hero.svg" className="" />
            </div>
        </div>
    );
}
