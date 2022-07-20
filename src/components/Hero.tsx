import React from "react";
import Background from "./shared/Background";
export default function Hero() {
  return (
    <Background>
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-center text-3xl font-bold text-white">
          Pending Polygon Transactions
        </h1>
      </div>
    </Background>
  );
}
