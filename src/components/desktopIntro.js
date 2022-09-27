import React from "react";
import { Link } from "gatsby";
import { FaGithub, FaAt, FaTwitter } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";
import avi from "../images/toshiro-avi.jpeg";
const routes = [
  {
    to: "",
    text: "work",
  },
  {
    to: "resume",
    text: "resume",
  },
  // {
  //   to: "blogs",
  //   text: "articles",
  // },
];

const DesktopIntro = ({ active }) => {
  return (
    <div className="flex h-full flex-col justify-between py-[10%] pl-[8%] pr-[5%]">
      <div>
        <h1 className="mb-2.5 text-4xl font-bold">
          Hello, I&apos;m <br />
          Adigun Godwin.
        </h1>
        <p className="pr-[20%] text-sm leading-loose text-dark-grey">
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
      </div>

      <ol className="mt-[0.9rem] inline-flex flex-col items-start gap-y-5 uppercase">
        {routes.map(({ to, text }, i) => (
          <li key={i} className="group flex items-center text-[0.7rem]">
            <span
              className={`cursor-pointer transition-all duration-300 ease-linear group-hover:text-white ${
                to === active ? "text-white" : "text-dark-grey"
              }`}
            >
              0{i}
            </span>
            <Link
              to={"/" + to}
              className={`flex items-center group-hover:text-white ${
                to === active ? "text-white" : "text-dark-grey"
              }
    `}
            >
              <span
                className={`mx-4 h-px transition-all duration-300 ease-linear group-hover:w-16 group-hover:bg-white ${
                  to === active ? "w-16 bg-white" : "w-10 bg-dark-grey "
                }`}
              ></span>
              <span className="tracking-widest">{text}</span>
            </Link>
          </li>
        ))}
      </ol>

      <footer>
        <div className="flex items-center">
          <div
            style={{ backgroundImage: `url(${avi})` }}
            className="mr-6 h-12 w-12 rounded-full bg-top"
          ></div>
          {/* <img src={avi} className="mr-6 h-11 w-12 rounded-full" alt="avatar" /> */}
          <div className="flex items-center gap-x-4 text-xs">
            <a
              href="https://github.com/Goddy01"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-x-2"
            >
              <FaGithub color="grey" />
              <span>Github</span>
              <BsArrowUpRight className="text-sm opacity-70" />
            </a>
            <a
              href="https://twitter.com/toshix2ro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-x-2"
            >
              <FaTwitter color="grey" />
              <span>Twitter</span>
              <BsArrowUpRight className="text-sm opacity-70" />
            </a>
            <a
              href="https://www.email.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-x-2"
            >
              <FaAt color="grey" />
              <span>Email</span>
              <BsArrowUpRight className="text-sm opacity-70" />
            </a>
          </div>
        </div>
        <p className="mr-3 pt-5 text-[11px] text-dark-grey">
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
      </footer>
    </div>
  );
};

export default DesktopIntro;
