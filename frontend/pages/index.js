export default function Login() {
    return (
        <div className="flex flex-row items-center justify-center min-h-screen overflow-hidden relative">
            <div className="flex flex-col items-center justify-center w-full h-full">
                <h1 className="text-[64px] font-semibold">
                    Login to{" "}
                    <span className="bg-gradient-to-r from-[#2984C9] via-[#3681B8] to-[#0B3654] text-transparent bg-clip-text">
                        Taskify.
                    </span>
                </h1>
                <img src="/assets/images/Login/people.png" className="" />
            </div>
            <div className="flex flex-col items-center justify-center w-full h-full ">
                <form className="flex flex-col items-center justify-center w-full h-full gap-[27px]">
                    <div className="flex flex-col relative">
                        <label className="text-[20px]">Email</label>
                        <input
                            type="email"
                            className=" bg-white border-[1px] border-slate-300 rounded-[10px] w-[421px] py-[5px] px-[7px] mt-[2px]"
                        />
                    </div>
                    <div className="flex flex-col relative w-[421px]">
                        <input
                            type="email"
                            className="block rounded-[20px] px-[20px] pb-2.5 pt-5 w-full text-sm text-gray-900 bg-[#F2F6FC] dark:bg-gray-700  appearance-none dark:text-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        />
                        <label className="absolute text-[15px] text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-0 scale-100 top-[14px] z-10 origin-[0] left-[20px] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 ">
                            Email
                        </label>
                    </div>
                </form>
            </div>
        </div>
    );
}
