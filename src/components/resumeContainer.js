import React from "react";
import { FaDownload, FaLinkedin } from "react-icons/fa";

const DesktopResumeContainer = () => {
  return (
    <section className="bg-box-bg text-dark-grey p-[5%] text-[0.8rem]">
      <div className="flex items-baseline justify-between text-white">
        <h2 className="text-[2.1rem] font-semibold">Adigun Godwin</h2>

        <span className="flex items-center justify-between gap-x-3 text-lg md:gap-x-4 md:text-[0.8rem]">
          <a
            href="www.test.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-x-1"
          >
            <FaLinkedin />
            <span className="hidden md:flex">LinkedIn</span>
          </a>
          <a
            href="www.test.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-x-1"
          >
            <FaDownload />
            <span className="hidden md:flex">Download</span>
          </a>
        </span>
      </div>
      <p className="text-cfcfcf my-[6px]">Backend developer</p>
      <p className="text-dark-grey mb-4 md:mt-6">
        I’m a backend software developer, passionate about solving problems with
        code and transforming ideas from pixels to scalable products. I create
        usable applications with user experience as a top priority using various
        web tools, languages and technology.
      </p>
      <h3 className="text-e2e2e2 my-4 flex items-center font-semibold">
        <p className="mr-2.5 capitalize">Core technologies</p>
        <span className="h-px grow bg-[#77777859]"></span>
      </h3>
      <p>
        HTML/CSS/SASS, Javascript [ES6+], React JS, Gatsby JS, Next JS, Vue JS,
        CSS-in-JS, Typescript, GraphQL, Redux, Firebase.
      </p>
      <h3 className="text-e2e2e2 my-4 flex items-center font-semibold">
        <p className="mr-2.5 capitalize">Familiar with</p>
        <span className="h-px grow bg-[#77777859]"></span>
      </h3>
      <p className="text-[0.8rem]">
        Node JS, Express, Nuxt JS, Unit Testing, Web Sockets, PWAs, Wordpress,
        SEO.
      </p>
      <h3 className="text-e2e2e2 my-4 flex items-center font-semibold">
        <p className="mr-2.5 capitalize">On the job</p>
        <span className="h-px grow bg-[#77777859]"></span>
      </h3>
      <p className="text-[0.8rem]">
        Agile/Scrum, Version Control, Best Practices, CI/CD
      </p>
      <h3 className="text-e2e2e2 my-4 flex items-center font-semibold">
        <p className="mr-2.5 capitalize">Work Experience</p>
        <span className="h-px grow bg-[#77777859]"></span>
      </h3>
      <p className="text-base text-white">
        Caketools - <i>Frontend Engineer</i>
      </p>
      <p className="my-3 ml-[5px] text-xs">MAY 2021 - PRESENT</p>
      <p className="text-[0.8rem]">
        I’m currently building smart solutions on the decentralised web with the
        team at Caketools labs
      </p>
      <ul className="list-box my-3 space-y-2">
        <li>
          Crafted a component library from scratch using SCSS Modules to ensure
          consistency.
        </li>
        <li>
          Used Next Js to deliver optimised, pre-rendered pages when necessary.
        </li>
        <li>Engineered state management with Redux and Hooks.</li>
        <li>
          Pulled data from the blockchain in real time to display live
          statistics and token prices.
        </li>
        <li>
          Visualized blockchain data using charting libraries and custom
          paginated tables.
        </li>
        <li>
          Maintained a well structured codebase and used Typescript to improve
          predictability.
        </li>
        <li>
          Integrated seamless blockchain wallet connection with support for
          about six different wallet providers.
        </li>
        <li>
          Implemented api request caching on the server to save resources,
          improve performance and generally reduce load on the backend.
        </li>
      </ul>
      <h3 className="text-e2e2e2 my-4 flex items-center text-[0.8rem] font-semibold">
        <p className="mr-3 basis-1/12 capitalize">Projects</p>
        <span className="h-px basis-10/12 bg-[#77777859]"></span>
      </h3>
      <p className="text-[0.8rem]">
        Links to my works can be found on{" "}
        <span className="text-white">/work</span> and more details can be
        provided upon request.
      </p>
    </section>
  );
};

export default DesktopResumeContainer;
