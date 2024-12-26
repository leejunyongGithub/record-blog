import { Metadata } from "next";
import Title from "../_components/Title";
import Description from "../_components/Description";

export const metadata: Metadata = {
  title: "Blog",
};

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <Title title="Home" />
      <Description description="Home Description" />
    </div>
  );
}
