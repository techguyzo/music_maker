import "@/styles/globals.css";
import "@/styles/slider.css";
import { Fredoka_One } from "next/font/google";
import type { AppProps } from "next/app";

const FO = Fredoka_One({ subsets: ["latin"], weight: "400" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={FO.className}>
      <Component {...pageProps} />
    </main>
  );
}
