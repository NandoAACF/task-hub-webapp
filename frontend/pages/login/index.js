import Button from "@/components/Button";
import Input from "@/components/Input";
import { AuthContext } from "@/utils/context/AuthContext";
import useNotifications from "@/utils/hooks/useNotifications";
import { useRouter } from "next/router";
import { useContext, useState } from "react";

export default function Login() {
    const { loginUser } = useContext(AuthContext);
    const router = useRouter();
    const { onError, onSuccess } = useNotifications();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        const passwordFieldError = !(/^.{8,12}$/.test(formData.password));
        if (passwordFieldError) {
            onError("Periksa kembali isian anda");
            return;
        }

        try {
            const response = await loginUser(formData);
            if (response) {
                onSuccess("Login berhasil");
                router.push("/");
            } else {
                onError("Login tidak berhasil, email atau password salah");
            }
        } catch (err) {
            onError(err);
        }
    };
    
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen overflow-hidden relative my-[50px] lg:my-0">
            <div className="flex flex-col items-center justify-center w-full h-full lg:ml-[50px]">
                <h1 className="text-[50px] md:text-[64px] font-semibold text-center mx-[30px] md:mx-0">
                    Login to{" "}
                    <span className="bg-gradient-to-r from-[#2984C9] via-[#3681B8] to-[#0B3654] text-transparent bg-clip-text">
                        Taskify.
                    </span>
                </h1>
                <img src="/assets/images/Login/peoplenew.png" className="scale-75 md:scale-100 -mt-[30px] md:mt-0" />
            </div>
            <div className="flex flex-col items-center justify-center w-full h-full mt-[0px] md:mt-[40px]">
                <form
                    className="flex flex-col items-start justify-center w-full h-full gap-[14px] px-[16%] md:px-[18%] relative"
                    onSubmit={handleLogin}
                >
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
                    <h5 
                        onClick={() => router.push("/forgot-password")}
                        className="text-[14px] underline cursor-pointer hover:text-[#2984C9] hover:scale-110 transition-all ease-in-out duration-300"
                    >
                        Forgot Password?
                    </h5>
                    <Button text="Login" type="primary" size="md" className="w-full mt-[40px]" />
                </form>
                <h3 className="text-[17px] sm:text-[19px] text-center mt-[30px] mx-[20px] sm:mx-0">
                    Don't have an account?{" "}
                    <span 
                        onClick={() => router.push("/register")}
                        className="underline cursor-pointer text-[#2984C9] hover:text-[#2471AB]">
                            Register
                    </span>
                </h3>
            </div>
        </div>
    );
}
