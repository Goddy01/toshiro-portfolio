import React from "react";
import { FaAt, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center gap-x-9 text-xl">
        <a
          href="https://github.com/Goddy01"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub color="white" />
        </a>
        <a
          href="https://x.com/toshirothe3rd"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter color="white" />
        </a>
        <a
          href="https://linkedin.com/in/godwin-adigun-b5a138219"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin color="white" />
        </a>
        <a
          href="mailto:adigungodwin2@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaAt color="white" />
        </a>
      </div>
      <p className="mr-3 pt-5 text-xs text-dark-grey">
        Inspired by{" "}
        <a
          href="https://kadet.dev"
          target="_blank"
          rel="noreferrer noopener"
          className="text-[#cecece]"
        >
          Collins Enebeli
        </a>
      </p>
    </div>
  );
};

export default Socials;
