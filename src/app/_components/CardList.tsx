import React from "react";
import { Post } from "../@types/post.type";
import Card from "./Card";
import Carousel from "./Carousel";

export default function CardList({ posts }: { posts: Post[] }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-sm text-gray-500">{`${posts.length} posts`}</div>
      <div>
        <div className="flex flex-col gap-2">
          {posts.length > 3 && <Carousel images={posts.map((post) => post.postImg)} />}
        </div>
      </div>
      <section className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 animate-fadeIn duration-500">
        {posts.map((post) => (
          <Card key={post.slug} post={post} />
        ))}
      </section>
    </div>
  );
}
