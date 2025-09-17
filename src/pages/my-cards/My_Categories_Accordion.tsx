// "use client";

// import {
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
//   Typography,
//   List,
//   ListItem,
//   ListItemButton,
//   Divider,
// } from "@mui/material";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import FolderIcon from "@mui/icons-material/Folder";
// import Link from "next/link";
// import { useEffect, useRef, useState } from "react";
// import FolderOpenIcon from "@mui/icons-material/FolderOpen";

// interface Category {
//   id: number;
//   name: string;
//   intlName: string;
// }

// export default function CategoryAccordion() {
//   const [categories, setCategories] = useState<Category[]>([]);
//   const [expanded, setExpanded] = useState(false);
//   const accordionRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const stored = localStorage.getItem("my-categories");
//     if (stored) {
//       setCategories(JSON.parse(stored));
//     }
//   }, []);

//   // Автоматическое закрытие при клике вне
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         accordionRef.current &&
//         !accordionRef.current.contains(event.target as Node)
//       ) {
//         setExpanded(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <div className="max-w-full mx-auto mt-1" ref={accordionRef}>
//       <Accordion
//         expanded={expanded}
//         onChange={() => setExpanded(!expanded)}
//         sx={{ borderRadius: "12px", border: "1px solid #1976D2" }}
//       >
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon sx={{ color: "#1976D2" }} />}
//           aria-controls="panel1a-content"
//           id="panel1a-header"
//           sx={{
//             backgroundColor: "#E3F2FD",
//             color: "#1976D2",
//             fontWeight: "bold",
//             borderRadius: "8px 8px 0 0",
//           }}
//         >
//           <Typography fontWeight={600}>
//             <FolderOpenIcon
//               sx={{ fontSize: 20, verticalAlign: "middle", mr: 1 }}
//             />
//             Мои категории
//           </Typography>
//         </AccordionSummary>
//         <AccordionDetails className="bg-white rounded-b-md">
//           {categories.length === 0 ? (
//             <>
//               <p>Категории отсутствуют</p> <br />
//               <Link href={`/create-category`} className={`text-blueCl`}>
//                 Create / Добавить
//               </Link>
//             </>
//           ) : (
//             <List disablePadding>
//               {categories.map((cat, index) => (
//                 <div key={cat.id}>
//                   <ListItem disablePadding>
//                     <Link
//                       href={`/my-cards/${cat.id}`}
//                       className="w-full no-underline text-[#1976D2]"
//                     >
//                       <ListItemButton>
//                         <FolderIcon sx={{ marginRight: 1, color: "#1976D2" }} />
//                         <Typography>
//                           {cat.intlName} / {cat.name}
//                         </Typography>
//                       </ListItemButton>
//                     </Link>
//                   </ListItem>
//                   {index < categories.length - 1 && (
//                     <Divider sx={{ marginY: 0.5 }} />
//                   )}
//                 </div>
//               ))}
//             </List>
//           )}
//         </AccordionDetails>
//       </Accordion>
//     </div>
//   );
// }



"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

interface Category {
  id: number;
  name: string;
  intlName: string;
}

export default function CategoryAccordion() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [expanded, setExpanded] = useState(false);
  const accordionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stored = localStorage.getItem("my-categories");
    if (stored) {
      setCategories(JSON.parse(stored));
    }
  }, []);

  // Автоматическое закрытие при клике вне
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        accordionRef.current &&
        !accordionRef.current.contains(event.target as Node)
      ) {
        setExpanded(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="max-w-full mx-auto mt-1" ref={accordionRef}>
      <div
        className="border border-blue-600 rounded-lg overflow-hidden"
        style={{ borderRadius: "8px" }}
      >
        {/* Header */}
        <button
          className="flex items-center justify-between w-full px-4 py-2 bg-blue-100 text-blue-600 font-semibold focus:outline-none"
          onClick={() => setExpanded(!expanded)}
        >
          <div className="flex items-center">
            {/* Folder Open Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M3 4a1 1 0 011-1h7l2 2h8a1 1 0 011 1v2H3V4z" />
              <path
                fillRule="evenodd"
                d="M3 8h18v10a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm5 2a1 1 0 000 2h8a1 1 0 100-2H8z"
                clipRule="evenodd"
              />
            </svg>
            Мои категории
          </div>
          {/* Expand Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 transition-transform duration-200 ${
              expanded ? "rotate-180" : "rotate-0"
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Details */}
        <div
          className={`transition-all duration-300 overflow-hidden ${
            expanded ? "max-h-96 p-4" : "max-h-0 p-0"
          } bg-white`}
        >
          {categories.length === 0 ? (
            <div className="text-gray-600">
              <p>Категории отсутствуют</p>
              <br />
              <Link href={`/create-category`} className="text-blue-600 underline">
                Create / Добавить
              </Link>
            </div>
          ) : (
            <ul className="divide-y divide-gray-200">
              {categories.map((cat, index) => (
                <li key={cat.id}>
                  <Link
                    href={`/my-cards/${cat.id}`}
                    className="flex items-center px-2 py-2 text-blue-600 no-underline hover:bg-blue-50 rounded"
                  >
                    {/* Folder Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 4a1 1 0 011-1h7l2 2h8a1 1 0 011 1v2H3V4z" />
                      <path
                        fillRule="evenodd"
                        d="M3 8h18v10a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm5 2a1 1 0 000 2h8a1 1 0 100-2H8z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      {cat.intlName} / {cat.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
