import type { ServicesProps } from "@scenes/Services";
import type { GetServerSideProps } from "next";

import Head from "next/head";

import Services, { getServerData } from "@scenes/Services";

import { getServices } from "../services/offered-services";

export default function Home(props: ServicesProps) {
  return (
    <>
      <Head>
        <title>Bitovi Services</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://bitovi.com/favicon.ico" />
      </Head>
      <Services {...props} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps<ServicesProps> = async (
  ctx
) => {
  return getServerData(ctx);
};
