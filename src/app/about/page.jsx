"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const about = () => {
  const router = useRouter();
  const handleNavigation = () => {
    const isLoading = false;
    if (isLoading) {
      router.push("/about/connectUs");
    } else {
      router.push("/");
    }
  };
  return (
    <div className=" flex flex-col">
      this is about page
      <Link href={"/about/connectUs"}>Connect Us</Link>
      <button
        className="border-2 p-4 rounded-md max-w-32"
        onClick={handleNavigation}
      >
        Connect Us
      </button>
    </div>
  );
};

export default about;
