import React from "react";

export default function Description({ description }: { description: string }) {
  return (
    <p className="text-lg text-gray-400 whitespace-pre-line opacity-0 animate-fadeIn">
      {description}
    </p>
  );
}
