import "@/styles/globals.css";
import { Inter } from "@next/font/google";
import { ToastContainer } from "react-toastify";
import { AuthContextProvider } from "@/utils/context/AuthContext";
import Head from "next/head";

const inter = Inter({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export default function App({ Component, pageProps }) {
    return (
        <main className={inter.className}>
            <Head>
                <title>Taskify</title>
            </Head>
            <AuthContextProvider>
                <ToastContainer />
                <Component {...pageProps} />
            </AuthContextProvider>
        </main>
    );
}
