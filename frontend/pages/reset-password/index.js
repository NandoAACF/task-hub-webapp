import Button from "@/components/Button";
import Input from "@/components/Input";
import { AuthContext } from "@/utils/context/AuthContext";
import { useContext, useState } from "react";

export default function ResetPassword() {
    const { registerUser } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        passwordConfirmation: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await registerUser(formData);
            if (response) {
                onSuccess("Registrasi berhasil");
            } else {
                onError("Registrasi tidak berhasil, email mungkin sudah terdaftar");
            }
        } catch (err) {
            onError(err);
        }
    };

    return (
        <div className="flex flex-row items-center justify-center min-h-screen overflow-hidden relative">
            <div className="flex flex-col items-center justify-center w-full h-full ml-[60px]">
                <h1 className="text-[60px] font-semibold text-center -mt-[20px]">Reset Password </h1>
                <form
                    className="flex flex-col items-start justify-center w-full h-full gap-[14px] pl-[15%] pr-[15%] relative mt-[35px]"
                    onSubmit={handleRegister}
                >
                    <Input
                        label="Password"
                        type="password"
                        className="w-full"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <Input
                        label="Confirm Password"
                        type="password"
                        className="w-full"
                        name="passwordConfirmation"
                        value={formData.passwordConfirmation}
                        onChange={handleChange}
                    />
                    <Button text="Reset Password" type="primary" size="md" className="w-full mt-[40px]" />
                </form>
            </div>
            <div className="flex flex-col items-center justify-center w-full h-full">
                <img src="/assets/images/ResetPassword/hero.svg" className="" />
            </div>
        </div>
    );
}
