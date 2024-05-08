import React from "react";
import Theme from "../context/Theme";

const Navbar = () => {
  return (
    <nav className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
      <p className="h2-bold  text-dark-100 dark:text-light-900">
        App <span className="text-primary-500">Logo</span>
      </p>
      <div className="flex-between gap-5">
        <p className="text-dark-100 dark:text-light-900">some</p>
        <p className="text-dark-100 dark:text-light-900">random</p>
        <p className="text-dark-100 dark:text-light-900">headings</p>
        <Theme />
      </div>
    </nav>
  );
};

export default Navbar;
