export default function Input({
    type = "text",
    label = "Label",
    className = "",
    name,
    value,
    onChange,
    error,
}) {
    const getPasswordError = () => {
        const passwordRegex = /^.{8,20}$/;
        if (error === "passwordError" && value.trim() !== "" && !passwordRegex.test(value)) {
            return "Password should be between 8 and 20 characters";
        }
        return "";
    };

    const getEmailError = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (error === "emailError" && value.trim() !== "" && !emailRegex.test(value)) {
            return "Invalid email format";
        }
        return "";
    };

    return (
        <>
            <div className={`flex flex-col relative ${className}`}>
                <label className="text-[20px]">{label}</label>
                {error && (
                    <p className="text-red-500 text-sm mt-1">
                        {error === "passwordError"
                            ? getPasswordError()
                            : error === "emailError"
                            ? getEmailError()
                            : ""}
                    </p>
                )}
                <input
                    type={type}
                    className="bg-white border-[1px] border-slate-300 rounded-[10px] w-full py-[7px] px-[7px] mt-[2px] focus:border-[4px] outline-none transition-all ease-in-out duration-100"
                    name={name}
                    value={value}
                    onChange={onChange}
                />
            </div>
        </>
    );
}