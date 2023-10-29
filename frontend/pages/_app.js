import "@/styles/globals.css";
import { Inter } from "@next/font/google";
import { ToastContainer } from "react-toastify";
import { AuthContextProvider } from "@/utils/context/AuthContext";

const inter = Inter({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export default function App({ Component, pageProps }) {
    return (
        <main className={inter.className}>
            <AuthContextProvider>
                <ToastContainer />
                <Component {...pageProps} />
            </AuthContextProvider>
        </main>
    );
}
