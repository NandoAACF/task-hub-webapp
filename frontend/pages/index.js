import Button from "@/components/Button";
import Input from "@/components/Input";
import { AuthContext } from "@/utils/context/AuthContext";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {

    const {userInfo, logoutUser} = useContext(AuthContext);
    const router = useRouter();

    useEffect(() => {
        if (!userInfo.isLoggedIn) {
            router.replace('/login');
        }
    }, [userInfo.isLoggedIn, router]);

    if (!userInfo.isLoggedIn) {
        return null; 
    }

    return (
        <div className="flex flex-row items-center justify-center min-h-screen overflow-hidden relative">
            <Button onClick={logoutUser} text="Sign Out" type="primary" size="md" className="w-50 mt-[40px]" />
        </div>
    );
}
