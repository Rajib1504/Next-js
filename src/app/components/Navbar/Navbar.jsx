import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="pt-4 flex items-center justify-between px-4">
        <h1 className="text-2xl">Nextjs</h1>
        <ul className="  flex justify-end gap-5 items-center">
          <Link href="/">
            <li>Home</li>
          </Link>

          <Link href="/Services">
            <li>Services</li>
          </Link>
          <Link href="/blog">
            <li>Blog</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
