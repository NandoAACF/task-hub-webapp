import Button from "@/components/Button";
import Input from "@/components/Input";
import { AuthContext } from "@/utils/context/AuthContext";
import { useContext, useState } from "react";

export default function ResetPassword() {
    return (
        <div className="flex flex-row items-center justify-center min-h-screen overflow-hidden relative">
            <div className="flex flex-col items-center justify-center w-full h-full ml-[60px]">
                <h1 className="text-[60px] font-semibold text-center -mt-[20px]">Reset Password </h1>
                <form className="flex flex-col items-start justify-center w-full h-full gap-[14px] pl-[15%] pr-[15%] relative mt-[35px]">
                    <Input label="Password" type="password" className="w-full" name="password" />
                    <Input label="Confirm Password" type="password" className="w-full" name="passwordConfirmation" />
                    <Button text="Reset Password" type="primary" size="md" className="w-full mt-[40px]" />
                </form>
            </div>
            <div className="flex flex-col items-center justify-center w-full h-full">
                <img src="/assets/images/ResetPassword/hero.svg" className="" />
            </div>
        </div>
    );
}
