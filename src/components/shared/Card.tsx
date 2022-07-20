import React from "react";

interface CardProps {
  children: React.ReactNode;
}

export default function Card(props: CardProps) {
  return (
    <div className="shadow-lg rounded-lg overflow-hidden m-10">
      <div>{props.children}</div>
    </div>
  );
}
