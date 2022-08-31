import React from "react";
import { Link } from "gatsby";

const NavBtn = ({ to, text }) => {
  return (
    <Link
      to={"/" + to}
      className="bg-box-bg w-[40%] py-3 text-center text-xs capitalize text-white"
    >
      {text}
    </Link>
  );
};

export default NavBtn;
