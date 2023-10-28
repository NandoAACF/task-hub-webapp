export default function Login() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen overflow-hidden relative">
            <div className="flex flex-col items-center justify-center w-full h-full">
                <h1 className="text-[72px] font-semibold">
                    Login to{" "}
                    <span className="bg-gradient-to-r from-[#2984C9] via-[#3681B8] to-[#0B3654] text-transparent bg-clip-text">
                        Taskify.
                    </span>
                </h1>
            </div>
            <img src="/assets/images/Login/g10.svg" className="" />
        </div>
    );
}
