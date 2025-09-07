import Layout from "@/components/layout/Layout";
import Loading from "@/components/loader/Loading";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {
  Poppins,
  Space_Grotesk,
  Manrope,
  JetBrains_Mono,
  Inter,
  
} from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";
import { Suspense, useEffect, useState } from "react";

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
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initial page load delay
    const timer = setTimeout(() => setLoading(false), 1900);
  }, [router]);
  return (
    <main
      className={`${spaceGrotesk.variable} ${manrope.variable} ${jetBrains.variable}`}
    >
      <Head>
        <title>Arpit Pandey | Full Stack Developer</title>
        <meta
          name="description"
          content="Hi, I'm Arpit Pandey – a Full Stack Developer skilled in React, Next.js, Laravel, and Node.js. Check out my portfolio!"
        />
        <meta
          name="keywords"
          content="Arpit Pandey, Portfolio, Full Stack Developer, React, Laravel, JavaScript, Next.js"
        />
        <meta name="author" content="Arpit Pandey" />

        {/* Open Graph Meta */}
        <meta
          property="og:title"
          content="Arpit Pandey | Full Stack Developer"
        />
        <meta
          property="og:description"
          content="Check out my portfolio and latest web projects."
        />
        <meta
          property="og:image"
          content="https://yourdomain.com/preview.jpg"
        />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Arpit Pandey | Full Stack Developer"
        />
        <meta
          name="twitter:description"
          content="Check out my portfolio and latest web projects."
        />
        <meta
          name="twitter:image"
          content="https://yourdomain.com/preview.jpg"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {loading ? (
        <Loading />
      ) : (
        <Layout>
          {" "}
          <Component {...pageProps} />{" "}
        </Layout>
      )}
    </main>
  );
}
