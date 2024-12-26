import React from "react";
import Title from "@/app/_components/Title";
import Description from "@/app/_components/Description";

export default function page() {
  return (
    <div className="flex flex-col gap-4">
      <Title title="Resume" />
      <Description description="Resume Description" />
    </div>
  );
}

