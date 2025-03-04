import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => {
    setIsOpen(false); // Close menu on selection
  };

  return (
    <nav className="bg-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-between">
            <div className="flex-shrink-0 text-white font-bold text-xl">
              Amaljith K
            </div>
            <div className="hidden sm:block">
              <div className="ml-auto flex space-x-4">
                {["home", "about", "skills", "projects", "contact"].map((section) => (
                  <a
                    key={section}
                    href={`#${section}`}
                    onClick={handleNavClick}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${isOpen ? "block" : "hidden"} sm:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {["home", "about", "skills", "projects", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={handleNavClick}
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


// import React, { useState } from 'react';

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleNavClick = () => {
//     setIsOpen(false); // Close sidebar on selection
//   };

//   return (
//     <div>
//       {/* Sidebar toggle button - visible only on small screens */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="sm:hidden fixed top-4 right-4 p-2 rounded-md bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
//       >
//         <span className="sr-only">Open sidebar</span>
//         <svg
//           className="h-6 w-6"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           aria-hidden="true"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//           />
//         </svg>
//       </button>

//       {/* Sidebar menu for larger screens */}
//       <div className="hidden sm:block fixed top-0 right-0 h-full w-64 bg-gray-900 bg-opacity-75 p-6">
//         <h2 className="text-white text-2xl font-bold mb-6">Amaljith K</h2>
//         <ul className="space-y-4">
//           <li>
//             <a
//               href="#home"
//               className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium block"
//             >
//               Home
//             </a>
//           </li>
//           <li>
//             <a
//               href="#about"
//               className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium block"
//             >
//               About
//             </a>
//           </li>
//           <li>
//             <a
//               href="#skills"
//               className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium block"
//             >
//               Skills
//             </a>
//           </li>
//           <li>
//             <a
//               href="#projects"
//               className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium block"
//             >
//               Projects
//             </a>
//           </li>
//           <li>
//             <a
//               href="#contact"
//               className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium block"
//             >
//               Contact
//             </a>
//           </li>
//         </ul>
//       </div>

//       {/* Sidebar menu for mobile screens */}
//       <div
//         className={`fixed top-0 right-0 h-full w-64 bg-gray-900 bg-opacity-75 transform ${
//           isOpen ? 'translate-x-0' : 'translate-x-full'
//         } transition-transform duration-300 ease-in-out sm:hidden`}
//       >
//         <div className="h-full flex flex-col items-start justify-start pt-16 space-y-6 pl-6">
//           <h2 className="text-white text-2xl font-bold">Amaljith K</h2>
//           <ul className="space-y-4">
//             <li>
//               <a
//                 href="#home"
//                 onClick={handleNavClick}
//                 className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium block"
//               >
//                 Home
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#about"
//                 onClick={handleNavClick}
//                 className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium block"
//               >
//                 About
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#skills"
//                 onClick={handleNavClick}
//                 className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium block"
//               >
//                 Skills
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#projects"
//                 onClick={handleNavClick}
//                 className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium block"
//               >
//                 Projects
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#contact"
//                 onClick={handleNavClick}
//                 className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium block"
//               >
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

