import React from "react";
import { FaAt, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "gatsby";

const NavBar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <div className="flex items-center justify-between bg-dark-bg p-[5%]">
        <Link to="/" className="z-20 text-3xl font-semibold text-white">
          Toshiro
        </Link>
        <button
          type="button"
          aria-label="toggle navigation menu"
          className="z-20 flex flex-col items-end"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`my-1 h-px bg-white transition-all duration-200 ease-linear ${
              open ? "w-8 rotate-45" : "w-9"
            }`}
          ></span>
          <span
            className={`my-1 h-px bg-white transition-all duration-200 ease-linear ${
              open ? "relative -top-2 w-8 -rotate-45" : "w-6"
            }`}
          ></span>
        </button>
      </div>

      {open && (
        <nav className="fixed top-0 left-0 z-10 flex h-full w-full animate-slide flex-col bg-box-bg px-[5%] pt-[20%] pb-[15%]">
          <ul className="mt-4 flex flex-col items-center justify-between gap-y-6 text-[1.3rem] text-dark-grey">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/work">Work</Link>
            </li>
            {/* <li>
              <Link to="/blogs">Articles</Link>
            </li> */}
            <li>
              <Link to="/resume">Résumé</Link>
            </li>
          </ul>
          <div className="mt-6 flex flex-col items-center">
            <p className="mb-4 text-[1.2rem] font-bold text-white">
              Connect with me
            </p>
            <ul className="mt-4 flex items-center justify-center gap-x-3 text-xl text-dark-grey">
              <li>
                <a
                  href="https://github.com/Goddy01"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Go to github"
                >
                  <FaGithub />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/toshix2ro"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="My profile on Twitter"
                >
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/godwin-adigun-b5a138219"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="My LinkedIn account"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a
                  href="mailto:adigungodwin2@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="My email address"
                >
                  <FaAt />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </>
  );
};

export default NavBar;
