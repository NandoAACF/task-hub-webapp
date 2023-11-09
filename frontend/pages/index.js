import Button from "@/components/Button";
import Input from "@/components/Input";
import { AuthContext } from "@/utils/context/AuthContext";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import Sidebar from "@/components/Sidebar";

export default function Home() {
    const { userInfo } = useContext(AuthContext);
    const router = useRouter();

    useEffect(() => {
        if (!userInfo.isLoggedIn) {
            router.replace("/login");
        }
    }, [userInfo.isLoggedIn, router]);

    if (!userInfo.isLoggedIn) {
        return null;
    }

    return (
        <>
            <div className="flex flex-row items-start justify-start min-h-[100vh] relative overflow-hidden">
                <Sidebar />
                <div className="flex flex-col items-start justify-start ml-[100px] sm:ml-[160px] mr-[30px] sm:mr-[70px]">
                    Home Page
                </div>
            </div>
        </>
    );
}

export async function getServerSideProps() {
    return {
        redirect: {
            destination: "/todos",
            permanent: false
        }
    };
}
