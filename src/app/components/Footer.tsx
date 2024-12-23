"use client";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="h-[100px] flex flex-col gap-2 items-center justify-center p-4">
      <Link href="https://github.com/leejunyongGithub" target="_blank">
        <BsGithub size={24} />
      </Link>
      <span className="text-gray-400">Copyright © 2024, All right reserved.</span>
    </footer>
  );
}
