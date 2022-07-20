import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Background({ children }: LayoutProps) {
  return (
    <div className="bg-[url('https://polygonscan.com/images/svg/components/abstract-shapes-20.svg?v=3')] bg-[#140035]">
      {children}
    </div>
  );
}
