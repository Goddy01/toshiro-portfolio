import React from "react";
import { BsFillCaretRightFill } from "react-icons/bs";
import { Link } from "gatsby";
import avi from "../images/toshiro-avi.jpeg";
const Intro = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col items-center">
        <img
          src={avi}
          className="mr-4 h-28 w-28 rounded-tl-[140%] rounded-tr-[120%] rounded-br-[140%] rounded-bl-[100%] object-cover"
          alt="avatar"
        />
        <h1 className="px-4 pt-4 text-2xl">Hello, I&apos;m Adigun Godwin.</h1>
      </div>
      <p className="text-center text-sm leading-loose text-dark-grey">
        I am a{" "}
        <span className="animate-flash text-white opacity-90">
          Talented backend developer
        </span>{" "}
        adept at contributing to highly collaborative work environment,{" "}
        <span className="animate-flashTwo text-white opacity-90">
          finding solution
        </span>{" "}
        and determining customer satisfaction. Designed and developed
        <span className="animate-flash text-white opacity-90">
          {" "}
          web applications
        </span>{" "}
        across multiple third-party integrations and databases.{" "}
        <span className="animate-flashTwo text-white opacity-90">
          Passionate and hardworking
        </span>{" "}
        with penchant for developing{" "}
        <span className="animate-flash text-white opacity-90">
          customized interfaces
        </span>{" "}
        that factor in unique demands for accessibility, reachability and
        security.
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
