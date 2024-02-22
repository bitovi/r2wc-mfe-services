import Head from "next/head";
import { Inter } from "next/font/google";
import Services from "@scenes/Services";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Bitovi Services</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://bitovi.com/favicon.ico" />
      </Head>
      <Services />
    </>
  );
}
