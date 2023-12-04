import Button from "@/components/Button";
import Input from "@/components/Input";
import useAxios from "@/utils/hooks/useAxios";
import useNotifications from "@/utils/hooks/useNotifications";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ResetPassword() {
    const router = useRouter();
    const { token, email } = router.query;
    const { onSuccess, onError } = useNotifications();

    const [formData, setFormData] = useState({
        resetToken: "",
        email: "",
        new_password: "",
        new_password_confirmation: ""
    });

    useEffect(() => {
        if(token && email) {
            setFormData((prevFormData) => ({
                ...prevFormData,
                resetToken: token.toString(),
                email: email.toString()
            }))
        }
    }, [router.query]);

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

        const response = await useAxios("/auth/reset-password", "POST", formData, false);
        if (response) {
            onSuccess("Password was reset successfully");
            router.push("/login");
        }
        else {
            onError("Password reset failed");
        }
    };  


    return (
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen overflow-hidden relative mx-[35px] sm:mx-[40px] lg:mx-0">
            <div className="flex flex-col items-center justify-center w-full h-full lg:ml-[60px]">
                <h1 className="text-[42px] sm:text-[52px] md:text-[60px] font-semibold text-center -mt-[20px]">
                    Reset Password{" "}
                </h1>
                <form onSubmit={handleResetPassword}
                      className="flex flex-col items-start justify-center w-full h-full gap-[14px] md:pl-[15%] md:pr-[15%] pl-[10%] pr-[10%] relative mt-[35px]"
                >
                    <Input
                        label="Password"
                        type="password"
                        className="w-full"
                        name="new_password"
                        value={formData.new_password}
                        onChange={handleChange}
                        error="passwordError"
                    />
                    <Input
                        label="Confirm Password"
                        type="password"
                        className="w-full"
                        name="new_password_confirmation"
                        value={formData.new_password_confirmation}
                        onChange={handleChange}
                        error="passwordError"
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
