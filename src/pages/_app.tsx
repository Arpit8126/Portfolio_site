import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {
  Poppins,
  Space_Grotesk,
  Manrope,
  JetBrains_Mono,
} from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-space",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-manrope",
});

const jetBrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-code",
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${spaceGrotesk.variable} ${manrope.variable} ${jetBrains.variable}`}
    >
      <Component {...pageProps} />
    </main>
  );
}
