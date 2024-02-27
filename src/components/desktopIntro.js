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
          Godwin Adigun.
        </h1>
        <p className="text-sm leading-loose text-dark-grey">
          I stand as a{" "}
          <span className="animate-flash text-white opacity-90">dedicated</span>{" "}
          <span className="animate-flashTwo text-white opacity-90">and dynamic</span>{" "}
          <span className="animate-flash text-white opacity-90">backend</span>{" "}
          <span className="animate-flashTwo text-white opacity-90">developer</span>, distinguished by an{" "}
          <span className="animate-flash text-white opacity-90">insatiable thirst</span>{" "}
          for{" "}
          <span className="animate-flashTwo text-white opacity-90">learning</span> and a fervent commitment to delivering{" "}
          <span className="animate-flash text-white opacity-90">excellenct, efficient, secure, and scalable web applications</span>. 
          //   In pursuit of an{" "}
          // <span className="animate-flashTwo text-white opacity-90">entry-level position</span>, I bring a{" "}
          // <span className="animate-flash text-white opacity-90">unique blend</span> of{" "}
          // <span className="animate-flashTwo text-white opacity-90">passion</span> and expertise to a{" "}
          // <span className="animate-flash text-white opacity-90">challenging and innovative environment</span>. My journey involves shaping{" "}
          // <span className="animate-flashTwo text-white opacity-90">efficient, secure, and scalable web applications</span>, with a specialized focus on crafting{" "}
          // <span className="animate-flash text-white opacity-90">robust RESTful APIs</span>. With a{" "}
          // <span className="animate-flashTwo text-white opacity-90">knack for seamlessly integrating</span>{" "}
          // <span className="animate-flash text-white opacity-90">third-party APIs</span> and a penchant for{" "}
          // <span className="animate-flashTwo text-white opacity-90">designing sleek database architectures</span>, I consistently uphold{" "}
          // <span className="animate-flash text-white opacity-90">industry best practices</span>. Elevate your expectations—I am not just a{" "}
          // <span className="animate-flashTwo text-white opacity-90">developer</span>; I am a{" "}
          // <span className="animate-flash text-white opacity-90">catalyst for transformative digital solutions</span>.
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
            className="mr-6 h-12 w-12 rounded-full bg-contain bg-top"
          ></div>
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
              href="mailto:adigungodwin2@gmail.com"
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
            href="https://kadet.dev"
            target="_blank"
            rel="noreferrer noopener"
            className="text-[#cecece]"
          >
            Collins Enebeli
          </a>
        </p>
      </footer>
    </div>
  );
};

export default DesktopIntro;
