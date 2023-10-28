import "@/styles/globals.css";
import { Inter } from "@next/font/google";

const inter = Inter({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export default function App({ Component, pageProps }) {
    return (
        <main className={inter.className}>
            <Component {...pageProps} />
        </main>
    );
}
