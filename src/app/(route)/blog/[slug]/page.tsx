import React from "react";
//import { Metadata } from "next";

// type Props = {
//   params: { slug: string };
// };

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const post = await getPost(params.slug)

//   return {
//     title: post.title,
//     description: post.description,
//     openGraph: {
//       title: post.title,
//       description: post.description,
//       images: [post.image],
//     },
//   }
// }

export default function page() {
  return <div>Post Detail</div>;
}
