"use client";
import Header from "@/components/Header";
import Head from "next/head";
import LoginPage from "./login_page";

export default function Home() {
  return (
    <>
      <Head>
        <title>JammIT</title>
        <meta
          name="description"
          content="music maker platform for all music enthusiast"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col justify-center items-center">
        <p className="text-6xl">HIT THE IMAGE HARD!!</p>
        {/* <Header /> */}
        <div className="flex justify-center items-center bg-pink-300 bg-opacity-50 h-full w-full mb-10">
          <LoginPage />
        </div>
      </div>
    </>
  );
}
