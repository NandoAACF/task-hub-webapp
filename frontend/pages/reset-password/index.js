import Button from "@/components/Button";
import Input from "@/components/Input";
import { AuthContext } from "@/utils/context/AuthContext";
import { useRouter } from "next/router";
import { useContext, useState } from "react";

export default function ResetPassword() {
    const router = useRouter();

    return (
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen overflow-hidden relative mx-[35px] sm:mx-[40px] lg:mx-0">
            <div className="flex flex-col items-center justify-center w-full h-full lg:ml-[60px]">
                <h1 className="text-[42px] sm:text-[52px] md:text-[60px] font-semibold text-center -mt-[20px]">
                    Reset{" "}
                    <span className="bg-gradient-to-r from-[#2984C9] via-[#3681B8] to-[#0B3654] text-transparent bg-clip-text">
                        Password
                    </span>
                </h1>
                <form className="flex flex-col items-start justify-center w-full h-full gap-[14px] md:pl-[15%] md:pr-[15%] pl-[10%] pr-[10%] relative mt-[35px]">
                    <Input
                        label="Password"
                        type="password"
                        className="w-full"
                        name="password"
                    />
                    <Input
                        label="Confirm Password"
                        type="password"
                        className="w-full"
                        name="passwordConfirmation"
                    />
                    <Button
                        text="Reset Password"
                        type="primary"
                        size="md"
                        className="w-full mt-[40px]"
                    />
                </form>
                <h3 className="text-[17px] sm:text-[19px] text-center mt-[30px] mx-[20px] sm:mx-0">
                    Return to{" "}
                    <span
                        onClick={() => router.push("/login")}
                        className="underline cursor-pointer text-[#2984C9] hover:text-[#2471AB]"
                    >
                        Login
                    </span>
                </h3>
            </div>
            <div className="hidden lg:flex flex-col items-center justify-center w-full h-full">
                <img src="/assets/images/ResetPassword/hero.svg" className="" />
            </div>
        </div>
    );
}
