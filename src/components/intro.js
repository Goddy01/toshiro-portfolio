import React from "react";
import { BsFillCaretRightFill } from "react-icons/bs";
import { Link } from "gatsby";
import avi from "../images/kadet.png";
const Intro = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col items-center">
        <img
          src={avi}
          className="mr-4 h-28 w-28 rounded-tl-[140%] rounded-tr-[120%] rounded-br-[140%] rounded-bl-[100%]"
          alt="avatar"
        />
        <h1 className="px-4 pt-4 text-2xl">Hello, I&apos;m Collins Enebeli.</h1>
      </div>
      <p className="text-center text-sm leading-loose text-dark-grey">
        I&apos;m a{" "}
        <span className="animate-flash text-white opacity-90">
          Backend developer
        </span>
        . I create interactive{" "}
        <span className="animate-flashTwo text-white opacity-90">
          experiences
        </span>{" "}
        for amazing people using modern{" "}
        <span className="animate-flash text-white opacity-90">
          web technology
        </span>
        . I am currently
        <span className="animate-flashTwo text-white opacity-90">
          {" "}
          learning
        </span>{" "}
        how to write immersive web{" "}
        <span className="animate-flash text-white opacity-90">
          animations
        </span>{" "}
        and also exploring the{" "}
        <span className="animate-flashTwo text-white opacity-90">
          decentralized
        </span>{" "}
        web.
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
