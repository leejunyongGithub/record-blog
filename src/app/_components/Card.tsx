"use client";

import React from "react";
import Image from "next/image";
import { Post } from "../@types/post.type";
import Link from "next/link";

export default function Card({ post }: { post: Post }) {
  return (
    <article>
      <Link href={`/blog/${post.slug}`}>
        <div className="flex flex-col gap-2 p-4">
          <div className="relative w-full h-[216px] rounded-xl overflow-hidden">
            {post?.postImg && <Image src={post.postImg} alt={post.title || ""} fill className="object-cover" />}
          </div>
          <h2>{post.title}</h2>
        </div>
      </Link>
    </article>
  );
}
