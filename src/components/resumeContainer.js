import React from "react";
import { Link } from "gatsby";
import { FaDownload, FaLinkedin } from "react-icons/fa";

const DesktopResumeContainer = () => {
  return (
    <section className="bg-box-bg p-[5%] text-[0.8rem] text-dark-grey">
      <div className="flex items-baseline justify-between text-white">
        <h2 className="text-[2.1rem] font-semibold">Godwin Adigun</h2>

        <span className="flex items-center justify-between gap-x-3 text-lg md:gap-x-4 md:text-[0.8rem]">
          <a
            href="https://linkedin.com/in/godwin-adigun-b5a138219"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-x-1"
          >
            <FaLinkedin />
            <span className="hidden md:flex">LinkedIn</span>
          </a>
          <a
            href="https://drive.google.com/file/d/18lmuOyBb0ZrZwmHU-_z-4rbioTD0rEYk/view?usp=sharing"
            target="_blank"
            download
            className="flex items-center gap-x-1"
          >
            <FaDownload />
            <span className="hidden md:flex">Download</span>
          </a>
        </span>
      </div>
      <b className="my-[6px] text-cfcfcf">Fullstack Developer</b>
      {/* <p className="mb-4 text-dark-grey md:mt-6">
        I am a dedicated and dynamic backend developer, distinguished by an insatiable thirst for learning and a fervent commitment to delivering excellence. In pursuit of an entry-level position, I bring a unique blend of passion and expertise to a challenging and innovative environment. My journey involves shaping efficient, secure, and scalable web applications, with a specialized focus on crafting robust RESTful APIs. With a knack for seamlessly integrating third-party APIs and a penchant for designing sleek database architectures, I consistently uphold industry best practices. Elevate your expectations—I am not just a developer; I am a catalyst for transformative digital solutions.
      </p> */}
      <h3 className="my-4 flex items-center font-semibold text-e2e2e2">
        <p className="mr-2.5 font-[Andika] capitalize">Frontend Development</p>
        <span className="h-px grow bg-[#77777859]"></span>
      </h3>
      <p>HTML, CSS, Bootstrap, JavaScript, jQuery, Ajax, and React</p>
      <h3 className="my-4 flex items-center font-semibold text-e2e2e2">
        <p className="mr-2.5 font-[Andika] capitalize">Backend Development</p>
        <span className="h-px grow bg-[#77777859]"></span>
      </h3>
      <p>Python, Django, Django Channels, Django Rest Framework, and Websocket</p>
      <h3 className="my-4 flex items-center font-semibold text-e2e2e2">
        <p className="mr-2.5 font-[Andika] capitalize">Devops & Containerization</p>
        <span className="h-px grow bg-[#77777859]"></span>
      </h3>
      <p>
        Docker, Google App Engine, AWS EC2, Amazon S3, and Git
      </p>
      <h3 className="my-4 flex items-center font-semibold text-e2e2e2">
        <p className="mr-2.5 font-[Andika] capitalize">Message Brokers & Queues</p>
        <span className="h-px grow bg-[#77777859]"></span>
      </h3>
      <p className="text-[0.8rem]">Redis, RabbitMQ, and Celery</p>
      <h3 className="my-4 flex items-center font-semibold text-e2e2e2">
        <p className="mr-2.5 font-[Andika] capitalize">Database</p>
        <span className="h-px grow bg-[#77777859]"></span>
      </h3>
      <p className="text-[0.8rem]">PostgreSQL and MySQL</p>
      <h3 className="my-4 flex items-center font-semibold text-e2e2e2">
        <p className="mr-2.5 font-[Andika] capitalize">APIs</p>
        <span className="h-px grow bg-[#77777859]"></span>
      </h3>
      <p className="text-[0.8rem]">Building RESTful APIs</p>
      <p>Proficient in integrating various third-party APIs and packages to enhance functionality
      including payment gateways, authentication services, and content management tools</p>
      <h3 className="my-4 flex items-center font-semibold text-e2e2e2">
        <p className="mr-2.5 font-[Andika] capitalize">Soft Skills</p>
        <span className="h-px grow bg-[#77777859]"></span>
      </h3>
      <p className="text-[0.8rem]">
        Good Communication, Teamwork, Critical Thinking, Adaptability, Research,
        Management
      </p>

      {/* ***************** WORK STARTS HERE *********** */}

      {/* <h3 className="my-4 flex items-center font-semibold text-e2e2e2">
        <p className="mr-2.5 font-[Andika] capitalize">Work Experience</p>
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
      </ul> */}
      <h3 className="my-4 flex items-center text-[0.8rem] font-semibold text-e2e2e2">
        <p className="mr-3 basis-1/12 font-[Andika] capitalize">Projects</p>
        <span className="h-px basis-10/12 bg-[#77777859]"></span>
      </h3>
      <p className="text-[0.8rem]">
        Links to my works can be found on{" "}
        <Link to="/work" className="text-white">
          /work
        </Link>{" "}
        and more details can be provided upon request.
      </p>
    </section>
  );
};

export default DesktopResumeContainer;
