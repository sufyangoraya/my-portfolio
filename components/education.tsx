// components/Education.tsx
import React from 'react';
import Link from 'next/link';
import { Button } from './ui/button';

export default function Education() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 via-blue-400 to-pink-500 p-8">
      <h1 className="text-5xl font-extrabold text-gray-800 mb-8 hover:underline transition duration-300">Education</h1>
      
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl transform hover:scale-105 transition duration-300 ease-in-out">
        <ul className="space-y-6">
          
        <li className="border-b pb-4">
            <h3 className="text-2xl font-semibold text-gray-700">CAE(Certified Agentic And Robotics AI Engineer)</h3>
            <p className="text-gray-500">PIAIC , 2025 - to be continue--</p>
            <p className="text-gray-800 mt-2">Focused on mathematics and physics, with active participation in science fairs.</p>
          </li>
          
          <li className="border-b pb-4">
            <h3 className="text-2xl font-semibold text-gray-700">Artifical intelligence , web-3 , Metaverse</h3>
            <p className="text-gray-500">GIAIC , 2024 - to be continue--</p>
            <p className="text-gray-800 mt-2">Focused on mathematics and physics, with active participation in science fairs.</p>
          </li>
        <li className="border-b pb-4">
            <h3 className="text-2xl font-semibold text-gray-700">Intermediate in Pre-Engineering</h3>
            <p className="text-gray-500">GOVT New Ali Garh Degree college , 2022 - 2023</p>
            <p className="text-gray-800 mt-2">Focused on mathematics and physics, with active participation in science fairs.</p>
          </li>


          <li className="border-b pb-4">
            <h3 className="text-2xl font-semibold text-gray-700">Matric in Science Group</h3>
            <p className="text-gray-500 hover:scale-100">Ever Green High School (Tando Adam)</p>
            <p className="text-gray-800 mt-2">Achieved high marks almost in all subject but specially in methametics and english.</p>
          </li>

         
        </ul>
        <br />
        <center>
          <div>
            <Button asChild>
              <Link href="#skills" className="bg-gradient-to-r from-blue-600 to-purple-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-600">
                skills
              </Link>
            </Button>
          </div>
        </center>
       
      </div>
    </div>
  );
}
