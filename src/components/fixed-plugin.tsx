"use client";
import Image from "next/image";
import { Button } from "@material-tailwind/react";

export function FixedPlugin() {
  return (
    <a
    href="/cv.pdf" // Path to the CV file
    download // Enables file download
  >
      <Button
        color="white"
        size="sm"
        className="!fixed bottom-4 right-4 flex gap-1 pl-2 items-center border border-blue-gray-50"
        placeholder="" // Optional prop
        onPointerEnterCapture={() => {}} // Optional prop
        onPointerLeaveCapture={() => {}} // Optional prop
      >
        <Image
          width={256}
          height={256}
          className="w-5 h-5"
          alt="CV download"
          src="https://www.material-tailwind.com/favicon.png"
          unoptimized
        />
        {"Download CV"}
      </Button>
    </a>
  );
}

export default FixedPlugin;
