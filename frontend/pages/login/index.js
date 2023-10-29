import Button from "@/components/Button";
import Input from "@/components/Input";
import { AuthContext } from "@/utils/context/AuthContext";
import useNotifications from "@/utils/hooks/useNotifications";
import { useRouter } from "next/router";
import { useContext, useState } from "react";

export default function Login() {
    const {loginUser} = useContext(AuthContext);
    const router = useRouter();
    const { onError, onSuccess} = useNotifications();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await loginUser(formData);
            if(response) {
                onSuccess("Login berhasil");
                router.push("/");
            }
            else {
                onError("Login tidak berhasil, email atau password salah")
            }
        }
        catch(err) {
            onError(err);
        }
    }
    return (
        <div className="flex flex-row items-center justify-center min-h-screen overflow-hidden relative">
            <div className="flex flex-col items-center justify-center w-full h-full">
                <h1 className="text-[64px] font-semibold text-center">
                    Login to{" "}
                    <span className="bg-gradient-to-r from-[#2984C9] via-[#3681B8] to-[#0B3654] text-transparent bg-clip-text">
                        Taskify.
                    </span>
                </h1>
                <img src="/assets/images/Login/people.png" className="" />
            </div>
            <div className="flex flex-col items-center justify-center w-full h-full mt-[40px]">
                <form className="flex flex-col items-start justify-center w-full h-full gap-[14px] px-[18%] relative" onSubmit={handleLogin}>
                    <Input label="Email" type="email" className="w-full" name="email" value={formData.email} onChange={handleChange}/>
                    <Input label="Password" type="password" className="w-full" name="password" value={formData.password} onChange={handleChange}/>
                    <h5 className="text-[14px] underline cursor-pointer hover:text-[#2984C9] hover:scale-110 transition-all ease-in-out duration-300">
                        Forgot Password?
                    </h5>
                    <Button text="Login" type="primary" size="md" className="w-full mt-[40px]" />
                    {/* <div className="flex flex-col relative w-[421px]">
                        <input
                            type="email"
                            className="block rounded-[20px] px-[20px] pb-2.5 pt-5 w-full text-sm text-gray-900 bg-[#F2F6FC] dark:bg-gray-700  appearance-none dark:text-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        />
                        <label className="absolute text-[15px] text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-0 scale-100 top-[14px] z-10 origin-[0] left-[20px] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 ">
                            Email
                        </label>
                    </div> */}
                </form>
                <h3 className="text-[19px] text-center mt-[30px] ">
                    Don't have an account?{" "}
                    <span className="underline cursor-pointer text-[#2984C9] hover:text-[#2471AB]">Register</span>
                </h3>
            </div>
        </div>
    );
}
