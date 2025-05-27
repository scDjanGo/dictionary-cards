"use client";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  List,
  ListItem,
  ListItemButton,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FolderIcon from "@mui/icons-material/Folder";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";

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
      <Accordion
        expanded={expanded}
        onChange={() => setExpanded(!expanded)}
        sx={{ borderRadius: "12px", border: "1px solid #1976D2" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#1976D2" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            backgroundColor: "#E3F2FD",
            color: "#1976D2",
            fontWeight: "bold",
            borderRadius: "8px 8px 0 0",
          }}
        >
          <Typography fontWeight={600}>
            <FolderOpenIcon
              sx={{ fontSize: 20, verticalAlign: "middle", mr: 1 }}
            />
            Мои категории
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="bg-white rounded-b-md">
          {categories.length === 0 ? (
            <>
              <p>Категории отсутствуют</p> <br />
              <Link href={`/create-category`} className={`text-blueCl`}>
                Create / Добавить
              </Link>
            </>
          ) : (
            <List disablePadding>
              {categories.map((cat, index) => (
                <div key={cat.id}>
                  <ListItem disablePadding>
                    <Link
                      href={`/my-cards/${cat.id}`}
                      className="w-full no-underline text-[#1976D2]"
                    >
                      <ListItemButton>
                        <FolderIcon sx={{ marginRight: 1, color: "#1976D2" }} />
                        <Typography>
                          {cat.intlName} / {cat.name}
                        </Typography>
                      </ListItemButton>
                    </Link>
                  </ListItem>
                  {index < categories.length - 1 && (
                    <Divider sx={{ marginY: 0.5 }} />
                  )}
                </div>
              ))}
            </List>
          )}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
