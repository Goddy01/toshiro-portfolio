import React from "react";
import { FaAt, FaGithub, FaTwitter } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center gap-x-9 text-xl">
        <a
          href="https://www.github.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub color="white" />
        </a>
        <a
          href="https://www.twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter color="white" />
        </a>
        <a
          href="https://www.email.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaAt color="white" />
        </a>
      </div>
      <p className="mr-3 pt-5 text-xs text-dark-grey">
        Inspired by{" "}
        <a
          href="https://sarahdayan.dev/"
          target="_blank"
          rel="noreferrer noopener"
          className="text-[#cecece]"
        >
          Sarah Dayan
        </a>
      </p>
    </div>
  );
};

export default Socials;
