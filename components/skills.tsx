// // components/Skills.tsx
// import React from 'react';
// import Link from 'next/link';
// import { Button } from './ui/button';
// import { FaHtml5,FaCss3,FaJs, } from 'react-icons/fa6';

// export default function Skills() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 via-blue-400 to-pink-500 p-8">
//       <h1 className="text-5xl font-extrabold text-gray-800 mb-8 uppercase hover:underline transition duration-300">
//         Skills
//       </h1>
      
//       <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl transform hover:scale-105 transition duration-300 ease-in-out">
//         <ul className="space-y-6">
//           <li className="border-b pb-4 hover:bg-gray-100 transition duration-300 rounded-lg">
//             <h3 className="text-2xl font-semibold text-gray-700 hover:text-blue-500 transition duration-300">
//               HTML
//                         </h3>
            
//           </li>
          
//           <li className="border-b pb-4 hover:bg-gray-200 transition duration-300 rounded-lg">
//             <h3 className="text-2xl font-semibold text-gray-700 hover:text-blue-500 transition duration-300">
//               CSS
//             </h3>
           
//           </li>

//           <li className="hover:bg-gray-300 transition duration-300 rounded-lg">
//             <h3 className="text-2xl font-semibold text-gray-700 hover:text-blue-500 transition duration-300">
//               TYPESCRIPT
//             </h3>
           
//                   </li>
                  
//                    <li className="hover:bg-gray-300 transition duration-300 rounded-lg">
//             <h3 className="text-2xl font-semibold text-gray-700 hover:text-blue-500 transition duration-300">
//               NEXT.JS
//             </h3>
           
//                   </li>
                 
//         </ul>
//         <br />
//         <center>
//           <div>
//             <Button asChild>
//               <Link href="#projects" className="bg-gradient-to-r from-blue-600 to-purple-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-600">
//                 Projects
//               </Link>
//             </Button>
//           </div>
//         </center>
//       </div>
//     </div>
//   );
// }

import { FaHtml5, FaCss3Alt, FaJs, FaReact ,FaFigma} from 'react-icons/fa';
export default function Skills() {
  return (
    <div className="flex flex-row items-center space-x-10 justify-center min-h-screen bg-gradient-to-br from-purple-600 via-blue-400 to-pink-500 p-8">
      <div className="transition transform hover:scale-150 hover:bg-gradient-to-br from-purple-500 via-blue-400 to-pink-500 duration-300 shadow-md rounded-lg p-4">
        <FaHtml5 className="text-6xl text-stone-700" /> 
        <p className="mt-2 text-stone-700 text-xl font-semibold">HTML</p>
      </div>
      <div className="transition transform hover:scale-150 hover:bg-gradient-to-br from-purple-500 via-blue-400 to-pink-500 duration-300 shadow-md rounded-lg p-4">
        <FaFigma className="text-6xl text-stone-700" /> 
        <p className="mt-2 text-stone-700 text-xl font-semibold">figma</p>
      </div>
      <div className="transition transform hover:scale-150 hover:bg-gradient-to-br from-purple-500 via-blue-400 to-pink-500 duration-300 shadow-md rounded-lg p-4">
        <FaCss3Alt className="text-6xl text-stone-700" /> 
        <p className="mt-2 text-stone-700 text-xl font-semibold">CSS</p>
      </div>
      <div className="transition transform hover:scale-150 hover:bg-gradient-to-br from-purple-500 via-blue-400 to-pink-500 duration-300 shadow-md rounded-lg p-4">
        <FaJs className="text-6xl text-stone-700" /> 
        <p className="mt-2 text-stone-700 text-xl font-semibold">TypeScript</p>
      </div>
      <div className="transition transform hover:scale-150 hover:bg-gradient-to-br from-purple-500 via-blue-400 to-pink-500 duration-300 shadow-md rounded-lg p-4">
        <FaReact className="text-6xl text-stone-700" /> 
        <p className="mt-2 text-stone-700 text-xl font-semibold">Next.js</p>
     
      </div>
      
    </div>
    
  );
}


// className="transition transform hover:scale-105 bg-white shadow-md rounded-lg p-4"
// className="transition transform hover:scale-105 bg-white shadow-md rounded-lg p-4"
// className="transition transform hover:scale-105 bg-white shadow-md rounded-lg p-4"
// className="transition transform hover:scale-105 bg-white shadow-md rounded-lg p-4"