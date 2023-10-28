import Button from "@/components/Button";
import Input from "@/components/Input";

export default function Register() {
    return (
        <div className="flex flex-row items-center justify-center min-h-screen overflow-hidden relative">
            <div className="flex flex-col items-center justify-center w-full h-full gap-[30px]">
                <h1 className="text-[60px] font-semibold text-center">
                    Register to{" "}
                    <span className="bg-gradient-to-r from-[#2984C9] via-[#3681B8] to-[#0B3654] text-transparent bg-clip-text">
                        Taskify.
                    </span>
                </h1>
                <img src="/assets/images/Register/teaching.png" className="scale-95" />
            </div>
            <div className="flex flex-col items-center justify-center w-full h-full mt-[20px]">
                <form className="flex flex-col items-start justify-center w-full h-full gap-[14px] pl-[15%] pr-[18%] relative">
                    <Input label="Username" type="text" className="w-full" />
                    <Input label="Email" type="email" className="w-full" />
                    <Input label="Password" type="password" className="w-full" />
                    <Input label="Confirm Password" type="password" className="w-full" />
                    <h5 className="text-[14px] underline cursor-pointer hover:text-[#2984C9] hover:scale-110 transition-all ease-in-out duration-300">
                        Forgot Password?
                    </h5>
                    <Button text="Register" type="primary" size="md" className="w-full mt-[40px]" />
                </form>
                <h3 className="text-[19px] text-center mt-[30px] ">
                    Already have an account?{" "}
                    <span className="underline cursor-pointer text-[#2984C9] hover:text-[#2471AB]">Login</span>
                </h3>
            </div>
        </div>
    );
}
