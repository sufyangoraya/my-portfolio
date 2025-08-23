// import React from 'react';
// import Link from 'next/link';
// import { Button } from './ui/button';

// export default function Projects() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 via-blue-400 to-pink-500 p-8">
//       <h1 className="text-5xl font-extrabold text-gray-800 mb-8 uppercase hover:underline transition duration-300">
//         Projects
//       </h1>
      
//       <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl transform hover:scale-105 transition duration-300 ease-in-out">
//         <ul className="space-y-6">
//           <li className="hover:bg-gray-200 border-b pb-4 rounded-lg transition duration-300">
//             <h3 className="text-2xl font-semibold text-gray-700">
//               giaic student card
//             </h3>
//             <p className="text-gray-800 mt-2">
//               A web-based student card application that allows users to view and manage student profiles. This project demonstrates skills in UI design and data handling with React and TailwindCSS.
//             </p>
//                   </li>
                  
          
//           <li className="hover:bg-gray-200 border-b pb-4 rounded-lg transition duration-300">
//             <h3 className="text-2xl font-semibold text-gray-700">
               
//                dynamic resume builder
             
//             </h3>
//             <p className="text-gray-800 mt-2">
//              a typescript hachathone which includes a static resume builder and also a dynamic resume builder
//             </p>
//           </li>
          
//           <li className="hover:bg-gray-200 border-b pb-4 rounded-lg transition duration-300">
//             <h3 className="text-2xl font-semibold text-gray-700">
               
//                cli number guessing game
             
//             </h3>
//             <p className="text-gray-800 mt-2">
//              a simple CLI based number guessing game.
//             </p>
//           </li>

//           <li className="hover:bg-gray-200 border-b pb-4 rounded-lg transition duration-300">
//             <h3 className="text-2xl font-semibold text-gray-700">
//              CLI todo list
//             </h3>
//             <p className="text-gray-800 mt-2">
//               a simple but very useful cli based todo list.
//             </p>
//           </li>

//           <li className="hover:bg-gray-200 border-b pb-4 rounded-lg transition duration-300">
//             <h3 className="text-2xl font-semibold text-gray-700">
//               currency converter
//             </h3>
//             <p className="text-gray-800 mt-2">
//                       this is a cli based currency converter which allow user to convert any amount of any currency to another currency.
//                       </p>
//                   </li>

//                    <li className="hover:bg-gray-200 border-b pb-4 rounded-lg transition duration-300">
//             <h3 className="text-2xl font-semibold text-gray-700">
//               CLI based ATM machene
//             </h3>
//             <p className="text-gray-800 mt-2">
//                this is a cli based atm machene
//                       </p>
//                   </li>
                  
//                    <li className="hover:bg-gray-200 border-b pb-4 rounded-lg transition duration-300">
//             <h3 className="text-2xl font-semibold text-gray-700">
//               CLi based simple calculator
//             </h3>
//             <p className="text-gray-800 mt-2">
//                 this is a cli based calculator that
//                       </p>
//                   </li>
                  
//                    <li className="hover:bg-gray-200 border-b pb-4 rounded-lg transition duration-300">
//             <h3 className="text-2xl font-semibold text-gray-700">
//               CLi based word counter
//             </h3>
//             <p className="text-gray-800 mt-2">
//                 this is a cli based word counter that help user to count the words in a peragraph or in a page.
//                       </p>
//                   </li>
                  
                  
//         </ul>
//         <br />
//         <center>
//           <div>
            
//           </div>
//         </center>
//       </div>
//     </div>
//   );
// }











// components/Projects.tsx
import React from 'react';
import Link from 'next/link';
import { Button } from './ui/button';

export default function Projects() {
  return (
    
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 via-blue-400 to-pink-500 p-8">
      <h1 className="text-5xl font-extrabold text-gray-800 mb-8 uppercase hover:underline  transition duration-300">
        Projects
      </h1>
      
      <div className=" shadow-lg rounded-lg p-6 w-full max-w-4xl from-purple-600 via-blue-400 to-pink-500 p-8 transform hover:scale-105 transition duration-300 ease-in-out">
        <ul className="space-y-6">
          <li className="hover:bg-gradient-to-br border-b pb-4 rounded-lg text-gray-800 transition duration-300">
            <h3 className="text-2xl font-semibold text-gray-800">
              <a href="https://sufyan-resume-builder.netlify.app" target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-800">
                Dynamic Resume Builder
              </a>
            </h3>
            <p className="text-gray-800 mt-2">
              A web-based resume builder which allows users to make their resumes .
            </p>
          </li>
          
          <li className="hover:bg-gradient-to-br border-b pb-4 rounded-lg transition duration-300">
            <h3 className="text-2xl font-semibold text-gray-700">
              <a href="https://sufyan-giaic-page.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-800">
                GIAIC Web Page
              </a>
            </h3>
            <p className="text-gray-800 mt-2">
              A simple yet  giaic portal web page 
            </p>
          </li>

          <li className="hover:bg-gradient-to-br border-b pb-4 rounded-lg transition duration-300">
            <h3 className="text-2xl font-semibold text-gray-700">
              <a href="https://github.com/sufyangoraya/atm_machine" target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-800">
                CLI Atm Machene
              </a>
            </h3>
            <p className="text-gray-800 mt-2">
            a cli based atm machene  
            </p>
          </li>

          <li className="hover:bg-gradient-to-br border-b pb-4 rounded-lg transition duration-300">
            <h3 className="text-2xl font-semibold text-gray-700">
              <a href="https://github.com/sufyangoraya/word_counter" target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-800">
                CLI Word Conter
              </a>
            </h3>
            <p className="text-gray-800 mt-2">
              A cli based word counter app which helps user to count the words of any pagr or paragraph
            </p>
          </li>
          <li className="hover:bg-gradient-to-br border-b pb-4 rounded-lg transition duration-300">
            <h3 className="text-2xl font-semibold text-gray-700">
              <a href="https://github.com/sufyangoraya/cli_number_cassing_game" target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-800">
                CLI Number Guessing Game
              </a>
            </h3>
            <p className="text-gray-800 mt-2">
              A cli based number guessing game which is joyfull to play
            </p>
          </li>
          <li className="hover:bg-gradient-to-br border-b pb-4 rounded-lg transition duration-300">
            <h3 className="text-2xl font-semibold text-gray-700">
              <a href="https://github.com/sufyangoraya/simple_calculculator" target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-800">
                Simple Calculator
              </a>
            </h3>
            <p className="text-gray-800 mt-2">
              A cli based word counter app which helps user to count the words of any pagr or paragraph
            </p>
          </li>
          <li className="hover:bg-gradient-to-br border-b pb-4 rounded-lg transition duration-300">
            <h3 className="text-2xl font-semibold text-gray-700">
              <a href="https://github.com/sufyangoraya/currency_converter" target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-800">
                Currency Converter
              </a>
            </h3>
            <p className="text-gray-800 mt-2">
              A cli based currency converter app  which converts your currency valves into other currencies. 
            </p>
          </li>
          <li className="hover:bg-gradient-to-br text-white border-b pb-4 rounded-lg transition duration-300">
            <h3 className="text-2xl font-semibold text-gray-700">
              <a href="https://github.com/sufyangoraya/todo-list" target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-800">
                Todo List App
              </a>
            </h3>
            <p className="text-gray-800 mt-2">
              A cli based todo list app
            </p>
          </li>
        </ul>
        <br />
        <center>
          <div>
            <Button asChild>
              <Link href="#contactMe" className="bg-gradient-to-r from-blue-600 to-purple-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-600">
              Contact Me
              </Link>
            </Button>
          </div>
        </center>
      </div>
    </div>
  );
}