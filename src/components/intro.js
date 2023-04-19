import React from "react";
import { BsFillCaretRightFill } from "react-icons/bs";
import { Link } from "gatsby";
import avi from "../images/toshiro-avi.jpeg";
const Intro = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col items-center">
        <div
          style={{ backgroundImage: `url(${avi})` }}
          className="h-28 w-28 rounded-full bg-contain bg-top"
        ></div>
        <h1 className="px-4 pt-4 text-2xl font-semibold">
          Hello, I&apos;m Godwin Adigun.
        </h1>
      </div>
      <p className="pr-[20%] text-sm leading-loose text-dark-grey">
          I am a{" "}
          <span className="animate-flash text-white opacity-90">
          backend developer
          </span>{" "}
          <span className="animate-flashTwo text-white opacity-90">
          driven 
          </span>{" "}
          by a{" "}
          <span className="animate-flash text-white opacity-90">
            passion{" "}
          </span>
          for{" "}
          <span className="animate-flashTwo text-white opacity-90">
            learning and gaining commercial experience,
          </span>{" "}
          seeking an{" "}
          <span className="animate-flash text-white opacity-90">
            entry-level position
          </span>{" "}
           in a{" "}
            <span className="animate-flashTwo text-white opacity-90"> 
          challenging environment 
          </span>{" "}
          where I can {" "}
          <span className="animate-flash text-white opacity-90">
          grow both professionally and personally. 
          </span>{" "}
          I have experience {" "}
          <span className="animate-flashTwo text-white opacity-90">
          developing complex web applications,
          </span>{" "}
          {" "}
          <span className="animate-flash text-white opacity-90">
          building RESTful APIs,
          </span>{" "}
          {" "}
          <span className="animate-flashTwo text-white opacity-90">
          integrating third-party APIs,
          </span>{" "}
          and {" "}
          <span className="animate-flash text-white opacity-90">
          designing efficient database architectures 
          </span>{" "}
          while {" "}
          <span className="animate-flashTwo text-white opacity-90">
          adhering to best practices.
          </span>{" "}
        </p>
      <div className="m-1 my-5 flex items-center justify-center">
        <Link
          to="/work"
          className="flex items-center gap-x-2 bg-box-bg px-8 py-[0.6rem] text-xs text-white"
        >
          <span>Explore</span>
          <BsFillCaretRightFill />
        </Link>
      </div>
    </div>
  );
};

export default Intro;
