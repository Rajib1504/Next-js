import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="pt-4 flex items-center justify-between px-4">
        <h1 className="text-2xl">Nextjs</h1>
        <ul className="  flex justify-end gap-5 items-center">
          <li>Home</li>
          <li>Blog</li>
          <li>About</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
