import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="mt-8 pt-6 border-t border-gray-100">
        <p className="text-center text-gray-600 text-xs sm:text-sm">
          © {new Date().getFullYear()} Task Hive. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
