"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
const ThemeToggleButton = dynamic(() => import("./ThemeToggleButton"), {
  ssr: false,
});

const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Resume",
    href: "/resume",
  },
];

export default function Header() {
  const pathname = usePathname();
  const isCurrentPath = (href: string) => (pathname === href ? "text-white" : "text-gray-400");

  const [focused, setFocused] = useState(false);
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <header>
      <nav className="flex justify-between items-center p-4">
        <ul className="flex gap-4">
          {navItems.map((item) => (
            <Link
              className={`${isCurrentPath(item.href)} transition-color duration-300`}
              key={item.href}
              href={item.href}
            >
              <span>{item.name}</span>
            </Link>
          ))}
        </ul>
        <div className="flex h-10 items-center">
          <div className="flex items-center relative">
            <input
              type="text"
              placeholder={focused ? "검색어를 입력해주세요." : ""}
              className={`h-10 rounded-md bg-gray-200 dark:bg-gray-800 ${
                focused ? "pl-12 pr-6" : "pr-10"
              } focus:outline-none mr-2 transition-all duration-300 ${focused ? "w-60" : "w-10"}`}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              value={search}
              onChange={handleSearch}
            />
            <BsSearch
              className={`absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 transition-all duration-300 ${
                focused ? "translate-x-[-200px]" : "translate-x-0"
              }`}
            />
          </div>
          <div className="w-10">
            <ThemeToggleButton />
          </div>
        </div>
      </nav>
    </header>
  );
}
