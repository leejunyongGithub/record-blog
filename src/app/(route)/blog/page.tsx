import CardList from "@/app/_components/CardList";
import Description from "@/app/_components/Description";
import Title from "@/app/_components/Title";
import { getPosts } from "@/app/lib/posts";
import React from "react";

export default async function page() {
  const postList = await getPosts();

  return (
    <div className="flex flex-col gap-4">
      <Title title="Blog" />
      <Description description="Blog Description" />
      <CardList posts={postList} />
    </div>
  );
}
