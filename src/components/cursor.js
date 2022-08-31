import React from "react";

const Cursor = ({ top, left }) => (
  <div
    style={{ top: top - 3 + "px", left: left - 2 + "px" }}
    className="absolute z-[100] h-1.5 w-1.5 -translate-y-1/2 -translate-x-1/2 rounded-full bg-light-grey transition-all duration-100"
  ></div>
);

export default Cursor;
