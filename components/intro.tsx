// components/Intro.tsx
import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Intro() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 via-blue-400 to-pink-500 p-8">
      <h1 className="text-5xl font-extrabold text-gray-800 mb-4 uppercase hover:underline">
        Portfolio
      </h1>

      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition duration-300 ease-in-out">
        <div className="flex flex-col gap-6 w-full lg:w-3/5">
          <h1 className="text-5xl font-extrabold text-blue-700 mb-2 hover:underline transition-all duration-300 ease-in-out transform hover:text-blue-500 hover:scale-105">
            Hi,👋 I&apos;m sufyan
          </h1>

          <p className="text-base font-semibold text-gray-900 leading-relaxed p-4 bg-gray-200 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
            frontend developer and ui designer <br />I Am A Student of GIAIC,
            Pursung A Cource In Agentic Artificial Intelligence, Web3.0 And
            mMtaverse. Passioniate About Technology And Constantly Learning New
            Skills To Stay Up-To-Date With The Letest Innovations. My Name Is
            SUFYAN , And I Am 19 Years Old. A Am A Frontend Developer, And Ui
            Designer And I Have 1 Year Of Experiance In Coding. Thanks You ❤️
          </p>

          <div>
            <Button asChild>
              <Link
                href="#education"
                className="bg-gradient-to-r from-blue-600 to-purple-700 text-white font-bold py-2 px-6 mb-[-30] text-center rounded-lg shadow-md transition duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-600"
              >
                Education Section
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-8 lg:mt-0 lg:w-2/5 flex justify-end">
          <Image
            src="/my-inage.jpg" // Use the correct image URL
            alt="Sufyan "
            width={200}
            height={200}
            className="rounded-full shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105"
          />
            <div>
            <Button asChild>
              <Link
                href="#education"
                className="bg-gradient-to-r from-blue-600 to-purple-700 text-white font-bold py-2 px-6 mb-[-30] text-center rounded-lg shadow-md transition duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-600"
              >
                Education Section
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
