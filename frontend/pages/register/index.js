import Button from "@/components/Button";
import Input from "@/components/Input";
import { AuthContext } from "@/utils/context/AuthContext";
import useNotifications from "@/utils/hooks/useNotifications";
import { useRouter } from "next/router";
import { useContext, useState } from "react";

export default function Register() {
    const { registerUser } = useContext(AuthContext);
    const router = useRouter();

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        passwordConfirmation: "",
    });
    const { onError, onSuccess } = useNotifications();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        const passwordFieldError = !(formData.password === formData.passwordConfirmation && /^.{8,20}$/.test(formData.password));
        if (passwordFieldError) {
            onError("Periksa kembali isian anda");
            return;
        }
        try {
            const response = await registerUser(formData);
            if (response) {
                onSuccess("Registrasi berhasil");
                router.push("/login");
            } else {
                onError("Registrasi tidak berhasil, email mungkin sudah terdaftar");
            }
        } catch (err) {
            onError(err);
        }
    };

    return (
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen overflow-hidden relative my-[50px] lg:my-0">
            <div className="flex flex-col items-center justify-center w-full h-full gap-[30px] lg:ml-[50px]">
                <h1 className="text-[50px] md:text-[60px] font-semibold text-center mx-[30px] md:mx-0">
                    Register to{" "}
                    <span className="bg-gradient-to-r from-[#2984C9] via-[#3681B8] to-[#0B3654] text-transparent bg-clip-text">
                        Taskify.
                    </span>
                </h1>
                <img src="/assets/images/Register/teaching.png" className="scale-75 md:scale-95 -mt-[30px] md:mt-0" />
            </div>
            <div className="flex flex-col items-center justify-center w-full h-full mt-[20px]">
                <form
                    className="flex flex-col items-start justify-center w-full h-full gap-[14px] pl-[15%] pr-[18%] relative"
                    onSubmit={handleRegister}
                >
                    <Input
                        label="Username"
                        type="text"
                        className="w-full"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                    <Input
                        label="Email"
                        type="email"
                        className="w-full"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        error="emailError"
                    />
                    <Input
                        label="Password"
                        type="password"
                        className="w-full"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        error="passwordError"
                    />
                    <Input
                        label="Confirm Password"
                        type="password"
                        className="w-full"
                        name="passwordConfirmation"
                        value={formData.passwordConfirmation}
                        onChange={handleChange}
                        error="passwordError"
                    />
                    <h5 
                        onClick={() => router.push("/forgot-password")}
                        className="text-[14px] underline cursor-pointer hover:text-[#2984C9] hover:scale-110 transition-all ease-in-out duration-300"
                    >
                        Forgot Password?
                    </h5>
                    <Button text="Register" type="primary" size="md" className="w-full mt-[35px]" />
                </form>
                <h3 className="text-[17px] sm:text-[19px] text-center mt-[20px] mb-[10px]">
                    Already have an account?{" "}
                    <span 
                        onClick={() => router.push("/login")}
                        className="underline cursor-pointer text-[#2984C9] hover:text-[#2471AB]">
                            Login
                    </span>
                </h3>
            </div>
        </div>
    );
}
