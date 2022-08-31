import React from "react";
import { FaEye, FaCodeBranch, FaCube } from "react-icons/fa";

const DesktopHomeRight = () => {
  return (
    <>
      <h2 className="text-dark-grey my-4 text-xs font-bold uppercase">
        featured
      </h2>
      <div className="flex flex-col gap-y-8 md:gap-y-3">
        <div className="bg-box-bg flex flex-col p-10 transition-all duration-300 hover:scale-110">
          <h3 className="text-[1.3rem] font-semibold text-white">
            Guild Protocol
          </h3>
          <p className="text-light-grey mb-3 mt-1 text-xs font-semibold leading-3 tracking-wider">
            NEXTJS + TYPESCRIPT + GSAP
          </p>
          <p className="text-dark-grey my-3 text-xs font-semibold tracking-wider">
            Landing Page for a play to earn crypto DAO
          </p>
          <div className="inline-flex">
            <a
              href="http://www.test.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-grey inline-flex items-center justify-start gap-x-1 text-xs hover:text-white"
            >
              <FaEye /> <span>Live</span>
            </a>
          </div>
        </div>

        <div className="bg-box-bg flex flex-col p-10 transition-all duration-300 hover:scale-110">
          <h3 className="text-[1.3rem] font-semibold text-white">Caketools</h3>
          <p className="text-light-grey mb-3 mt-1 text-xs font-semibold leading-3 tracking-wider">
            NEXT JS + TYPESCRIPT + WEB3
          </p>
          <p className="text-dark-grey my-3 text-xs font-semibold tracking-wider">
            Decentralised charting hub for the BSC Network.
          </p>
          <div className="inline-flex">
            <a
              href="http://www.test.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-grey flex items-center gap-x-1 text-xs hover:text-white"
            >
              <FaEye /> <span>Live</span>
            </a>
          </div>
        </div>
      </div>

      <section>
        <h2 className="text-dark-grey mb-6 mt-16 text-[0.7rem] font-semibold uppercase">
          Others
        </h2>
        <div className="mb-12 grid w-full items-end gap-y-8 md:grid-cols-2 md:gap-2.5">
          <div className="bg-box-bg flex flex-col justify-between p-10 transition-all duration-300 md:hover:scale-110">
            <section>
              <h3 className="text-[1.3rem] font-semibold text-white">
                Klic.gg
              </h3>
              <p className="text-light-grey mb-3 mt-1 text-[0.65rem] font-semibold uppercase leading-3 tracking-wider">
                NEXTJS + TYPESCRIPT + AWS
              </p>
              <p className="text-dark-grey h-20 text-xs font-semibold">
                Esports/VOD livestreaming platform with multiview experience
              </p>
            </section>
            <div className="inline-flex">
              <a
                href="https://www.test.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-grey flex items-center gap-x-1 text-xs hover:text-white"
              >
                <FaEye /> <span>Live</span>
              </a>
            </div>
          </div>

          <div className="bg-box-bg relative flex flex-col justify-between p-10 transition-all duration-300 md:translate-y-6 md:hover:scale-110">
            <section>
              <h3 className="text-[1.3rem] font-semibold text-white">
                Birdbox
              </h3>
              <p className="text-light-grey mb-3 mt-1 text-[0.65rem] font-semibold uppercase leading-3 tracking-wider">
                VUE + SOCKET.IO + EXPRESS
              </p>
              <p className="text-dark-grey h-20 text-xs font-semibold">
                Social application with real time Messaging
              </p>
            </section>

            <div className="flex items-center gap-x-4">
              <a
                href="https://www.test.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-grey flex items-center gap-x-1 text-xs hover:text-white"
              >
                <FaEye /> <span>Live</span>
              </a>

              <a
                href="https://www.test.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-grey flex items-center gap-x-1 text-xs hover:text-white"
              >
                <FaCodeBranch /> <span>Code</span>
              </a>
            </div>
          </div>

          <div className="bg-box-bg flex flex-col justify-between p-10 transition-all duration-300 md:hover:scale-110">
            <section>
              <h3 className="text-[1.3rem] font-semibold text-white">
                React Insect
              </h3>
              <p className="text-light-grey mb-3 mt-1 text-[0.65rem] font-semibold uppercase leading-3 tracking-wider">
                REACT + TYPESCRIPT
              </p>
              <p className="text-dark-grey h-20 text-xs font-semibold">
                Highly customisable input &amp; select dropdown component for
                react
              </p>
            </section>

            <div className="inline-flex">
              <a
                href="https://www.test.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-grey flex items-center gap-x-1 text-xs hover:text-white"
              >
                <FaCube /> <span>Pkg Repo</span>
              </a>
            </div>
          </div>

          <div className="bg-box-bg relative flex flex-col justify-between p-10 transition-all duration-300 md:translate-y-6 md:hover:scale-110">
            <section>
              <h3 className="text-[1.3rem] font-semibold text-white">
                Haute Couture
              </h3>
              <p className="text-light-grey mb-3 mt-1 text-[0.65rem] font-semibold uppercase leading-3 tracking-wider">
                REACT + TYPESCRIPT
              </p>
              <p className="text-dark-grey h-20 text-xs font-semibold">
                Fashion landing page
              </p>
            </section>
            <div className="flex items-center gap-x-4">
              <a
                href="https://www.test.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-grey flex items-center gap-x-1 text-xs hover:text-white"
              >
                <FaEye /> <span>Live</span>
              </a>

              <a
                href="https://www.test.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-grey flex items-center gap-x-1 text-xs hover:text-white"
              >
                <FaCodeBranch /> <span>Code</span>
              </a>
            </div>
          </div>

          <div className="bg-box-bg flex flex-col justify-between p-10 transition-all duration-300 md:hover:scale-110">
            <section>
              <h3 className="text-[1.3rem] font-semibold text-white">
                BevelPlexus
              </h3>
              <p className="text-light-grey mb-3 mt-1 text-[0.65rem] font-semibold uppercase leading-3 tracking-wider">
                REACT + CONTEXT API
              </p>
              <p className="text-dark-grey h-20 text-xs font-semibold">
                UI for a fintech application
              </p>
            </section>
            <div className="inline-flex">
              <a
                href="https://www.test.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-grey flex items-center gap-x-1 text-xs hover:text-white"
              >
                <FaEye /> <span>Live</span>
              </a>
            </div>
          </div>

          <div className="bg-box-bg relative flex flex-col justify-between p-10 transition-all duration-300 md:translate-y-6 md:hover:translate-y-4 md:hover:scale-110">
            <section>
              <h3 className="text-[1.3rem] font-semibold text-white">Jobbox</h3>
              <p className="text-light-grey mb-3 mt-1 text-[0.65rem] font-semibold uppercase leading-3 tracking-wider">
                NEXT JS + TYPESCRIPT + GSAP
              </p>
              <p className="text-dark-grey h-20 text-xs font-semibold">
                Landing page for Job board application
              </p>
            </section>
            <div className="flex items-center gap-x-4">
              <a
                href="https://www.test.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-grey flex items-center gap-x-1 text-xs hover:text-white"
              >
                <FaEye /> <span>Live</span>
              </a>

              <a
                href="https://www.test.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-grey flex items-center gap-x-1 text-xs hover:text-white"
              >
                <FaCodeBranch /> <span>Code</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DesktopHomeRight;
