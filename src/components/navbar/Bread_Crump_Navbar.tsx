"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { PAGES_LINKS } from "@/data/pages-links";
import { typeSidebarLink } from "@/lib/types/types";

export default function Bread_Crump_Navbar() {
  const pathname = usePathname();
  const [pages, setPages] = useState<typeSidebarLink[]>([]);

  useEffect(() => {
    const segments = pathname.split("/").filter(Boolean);

    if (!segments.length) return;

    const filteredPages: typeSidebarLink[] = [];

    const root = PAGES_LINKS.find((item) => item.link === `/${segments[0]}`);
    if (!root) return;

    filteredPages.push(root);

    function findChildLinks(parent: typeSidebarLink, depth: number) {
      if (!parent.childItems || !segments[depth]) return;

      const nextLink = `${parent.link}/${segments[depth]}`;
      const child = parent.childItems.find((item) => item.link === nextLink);

      if (!child) return;
      filteredPages.push(child);
      findChildLinks(child, depth + 1);
    }

    findChildLinks(root, 1);

    setPages(filteredPages);
  }, [pathname]);

  if(pages.length < 2) return

  return (
    <nav className="my-2" aria-label="Хлебные крошки">
      <div className="text-sm text-gray-600 dark:text-gray-400">
        <Link href="/" className="hover:text-blueCl transition-colors">
          Главная
        </Link>
        <span className="mx-2">/</span>

        {pages.map((item, index) => (
          <React.Fragment key={index}>
            <Link
              href={item.link}
              className={`hover:text-blueCl transition-colors  ${item.link === pages.at(-1)?.link && `!text-blueCl`}`}
            >
              {index === 0 ? item.name_ru : item.name_en}
            </Link>

            {index + 1 !== pages.length && <span className="mx-2">/</span>}
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
}
