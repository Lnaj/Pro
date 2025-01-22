"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@material-tailwind/react";

export const FixedPlugin: React.FC = () => {
  const openPDF = () => {
    // Open the PDF in a new tab
    window.open("/cv.pdf", "_blank");
  };

  return (
    <Button
      color="white"
      size="sm"
      className="!fixed bottom-4 right-4 flex gap-1 pl-2 items-center border border-blue-gray-50"
      onClick={openPDF}
      placeholder="" // Optional prop
      onPointerEnterCapture={() => {}} // Optional prop
      onPointerLeaveCapture={() => {}} // Optional prop
    >
      <Image
        width={256}
        height={256}
        className="w-5 h-5"
        alt="CV"
        src="https://www.material-tailwind.com/favicon.png"
        unoptimized
      />
      {"View my CV"}
    </Button>
  );
};

export default FixedPlugin;
