"use client";

import { useDropdown } from "@/features/hooks/useDropdown";
import { useSidebarsStore } from "@/lib/zustand";
import Arrow_Nav_SVG from "@/UI/svgs/Arrow_Nav_SVG";
import Link from "next/link";
import { typeSidebarLink } from "@/lib/types/types";
import { usePathname } from "next/navigation";

export default function Sidebar_Nav_Button({
  navItem,
}: {
  navItem: typeSidebarLink;
}) {
  const pathname = usePathname();
  const { dropdownRef, toggle, isOpen } = useDropdown();
  const offSidebarStore = useSidebarsStore((state) => state.offSidebarStore);

  const handleToggle = () => {
    toggle();
  };

  
  const closeSidebar = () => {
    offSidebarStore();
  }


  const handleCloseSidebar = () => {
    handleToggle();
    closeSidebar();
  };







  return (
    <div ref={dropdownRef} className="my-transform">
      {navItem.childItems.length ? (
        <button
          onClick={handleToggle}
          className="hover:underline flex items-center justify-between gap-[8px] cursor-pointer w-full"
        >
          <span className="text-white">{navItem.name}</span>
          <Arrow_Nav_SVG
            className={`${
              isOpen ? "rotate-180" : "rotate-0"
            } transition-transform duration-300`}
          />
        </button>
      ) : (
        <Link
          href={navItem.link}
          onClick={closeSidebar}
          className="hover:underline flex items-center justify-between gap-[8px] cursor-pointer"
        >
          <span className="text-white">{navItem.name}</span>
          {/* <Arrow_Nav_SVG
            className={`${
              isOpen ? "rotate-180" : "rotate-0"
            } transition-transform duration-300`}
          /> */}
        </Link>
      )}

      {!!navItem.childItems.length && <div
        style={{ scrollbarWidth: "none" }}
        className={`my-transform flex flex-col gap-[12px] pl-[6px] transition-all duration-500 ease-in-out overflow-hidden
          ${
            isOpen ? "max-h-[350px] mt-[12px] !overflow-y-auto" : "max-h-0 mt-0"
          }
        `}
      >
        {[navItem, ...navItem.childItems]?.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            onClick={handleCloseSidebar}
            className={`text-[500] flex items-center justify-between gap-[6px] `}
          >
            <span
              className={` ${
                pathname === item.link ? "border-b-[1px] border-bgLight" : ""
              }`}
            >
              {item.name}
            </span>
            <Arrow_Nav_SVG className="rotate-270" />
          </Link>
        ))}
      </div>}
    </div>
  );
}
