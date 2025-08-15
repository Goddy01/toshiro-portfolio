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
            href="https://drive.google.com/file/d/1DMU8fhb2PJkece5gR0bWvGAoMMr7Zyst/view?usp=drive_link"
            target="_blank"
            download
            className="flex items-center gap-x-1"
          >
            <FaDownload />
            <span className="hidden md:flex">Download Web2 Resume</span>
          </a>
          <a
            href="https://drive.google.com/file/d/1FrmMHmiI-SUNF2rzPieXzg4OE9w4Hwn4/view?usp=drive_link"
            target="_blank"
            download
            className="flex items-center gap-x-1"
          >
            <FaDownload />
            <span className="hidden md:flex">Download Web3 Resume</span>
          </a>
        </span>
      </div>
      <b className="my-[6px] text-cfcfcf">Fullstack Developer & Web3 Security Researcher</b>
      
      <h3 className="my-4 flex items-center font-semibold text-e2e2e2">
        <p className="mr-2.5 font-[Andika] capitalize">Summary</p>
        <span className="h-px grow bg-[#77777859]"></span>
      </h3>
      <p className="text-[0.8rem] mb-4">
        Innovative Solana Blockchain, Web3 Security Research, Smart Contract Auditor & Fullstack Developer with expertise in Rust, PHP, and Python. Specializes in high-performance dApp development, secure smart contract architecture, and scalable Web3 solutions using Solana, Anchor, Web3.js, TypeScript, Node, React, and blockchain technologies. Proven ability to design and deploy secure, efficient applications while prioritizing quality and user experience.
      </p>
      
      <h3 className="my-4 flex items-center font-semibold text-e2e2e2">
        <p className="mr-2.5 font-[Andika] capitalize">Frontend Development</p>
        <span className="h-px grow bg-[#77777859]"></span>
      </h3>
      <p>HTML, CSS, Bootstrap, JavaScript, jQuery, Ajax, and React</p>
      <h3 className="my-4 flex items-center font-semibold text-e2e2e2">
        <p className="mr-2.5 font-[Andika] capitalize">Backend Development</p>
        <span className="h-px grow bg-[#77777859]"></span>
      </h3>
      <p>PHP, Python, Typescript, Rust, Anchor, Django, Django Channels, Django Rest Framework, and Websocket</p>
      <h3 className="my-4 flex items-center font-semibold text-e2e2e2">
      <p className="mr-2.5 font-[Andika] capitalize">Software Quality Testing Tools</p>
        <span className="h-px grow bg-[#77777859]"></span>
      </h3>
      <p>SonaQube, SonarCloud, Pytest, and Coverage.py</p>
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
        <p className="mr-2.5 font-[Andika] capitalize">Work Experience</p>
        <span className="h-px grow bg-[#77777859]"></span>
      </h3>
      <p className="text-base text-white">
        <strong>Backend Developer</strong> - <i>AKI Infotech Solutions</i>
      </p>
      <p className="my-3 ml-[5px] text-xs">FEB 2024 - JAN 2025</p>
      <ul className="list-box my-3 space-y-2 text-[0.8rem]">
        <li>Enhanced code quality and performance by conducting rigorous testing with Pytest, Coverage.py, Unittest, and SonarQube, resolving 300+ critical issues in Python/Django, React, and database codebases while improving code coverage by 30%.</li>
        <li>Revitalized legacy systems in Python, Django, React, and PHP, reducing errors by 15% and boosting efficiency by 25%.</li>
        <li>Developed a robust POS module for 2,000+ businesses, enabling real-time inventory tracking and efficient transactions across industries.</li>
        <li>Boosted user adoption by 20% with an innovative inventory management system for 1,500+ businesses, streamlining operations using JavaScript and PHP.</li>
      </ul>
      
      <h3 className="my-4 flex items-center font-semibold text-e2e2e2">
        <p className="mr-2.5 font-[Andika] capitalize">Education</p>
        <span className="h-px grow bg-[#77777859]"></span>
      </h3>
      <p className="text-base text-white">
        <strong>Bachelor of Science in Information and Communication Science</strong>
      </p>
      <p className="my-3 ml-[5px] text-xs">SEPT 2018 - OCT 2023</p>
      <p className="text-[0.8rem] mb-4">
        University of Ilorin, Nigeria
      </p>
      <p className="text-[0.8rem] mb-4">
        Relevant coursework in Network Security, Data Structure and Algorithm, Operating System, Database Development and Mgt, Distributed Systems, Decision Support System, OOP and Client-Side Web Development & Server-Side Web Programming
      </p>
      
      <h3 className="my-4 flex items-center font-semibold text-e2e2e2">
        <p className="mr-2.5 font-[Andika] capitalize">Key Projects</p>
        <span className="h-px grow bg-[#77777859]"></span>
      </h3>
      
      <p className="text-base text-white mb-2">
        <strong>Tencoin - White-Label Crypto Wallet Platform</strong>
      </p>
      <ul className="list-box my-3 space-y-2 text-[0.8rem]">
        <li>Developed secure, scalable backend architecture using Node.js/NestJS and PostgreSQL, enabling customizable white-label crypto wallets with multi-currency support (BTC, ETH, USDT, BUSD, NGN).</li>
        <li>Built a comprehensive KYC system with integration to national ID databases and tiered verification, ensuring compliance with AML/CFT standards for partner institutions.</li>
        <li>Engineered buy/sell, deposit, and withdrawal services, including real-time pricing from TenCoin liquidity pools and multiple fiat channels (bank, card, USSD, vouchers) with configurable partner fees.</li>
        <li>Integrated blockchain networks (Bitcoin, Ethereum, Binance Smart Chain, Tron) for reliable on-chain transactions, enhancing platform versatility.</li>
        <li>Implemented advanced security features such as 2FA, device fingerprinting, encrypted data storage, and detailed audit logs, strengthening platform protection.</li>
        <li>Deployed backend on AWS/Azure using Docker, Kubernetes, and GitHub Actions CI/CD, improving release cycles and ensuring high availability for global B2B partners.</li>
      </ul>
      
      <p className="text-base text-white mb-2">
        <strong>Nestmate - Real Estate Rental & Booking Platform</strong>
      </p>
      <ul className="list-box my-3 space-y-2 text-[0.8rem]">
        <li>Developed and maintained robust backend logic for user (tenant), agent, and admin modules using Node.js, Typescript, and NestJS.</li>
        <li>Designed and implemented RESTful APIs to support authentication, property listings, bookings, and agent-user interactions.</li>
        <li>Integrated Prisma ORM with PostgreSQL for efficient data modeling, query optimization, and seamless database access.</li>
        <li>Implemented role-based access control (RBAC) to ensure secure and isolated access for tenants, agents, and admins.</li>
        <li>Optimized backend performance by refactoring logic, reducing redundant queries, and ensuring scalable request handling.</li>
        <li>Wrote comprehensive unit and integration tests to maintain code quality and prevent regressions.</li>
        <li>Collaborated with frontend developers and stakeholders to ensure API contracts were well-documented and user flows were seamless.</li>
      </ul>
      
      <p className="text-base text-white mb-2">
        <strong>F1 Meme Token Vesting Smart Contract</strong>
      </p>
      <ul className="list-box my-3 space-y-2 text-[0.8rem]">
        <li>Designed and implemented a Rust-based Solana smart contract for the F1 Meme (BOXBOX) SPL token, enabling secure token locking and controlled distribution for Formula 1 fan memberships.</li>
        <li>Developed a tiered membership system where users stake BOXBOX tokens to gain exclusive access to community benefits, premium content, and race-related events.</li>
        <li>Implemented a custom vesting schedule with time-locked token releases, ensuring long-term engagement and reward distribution for token holders.</li>
        <li>Built an escrow mechanism that securely locks user tokens until predefined milestones are met, preventing premature withdrawals.</li>
        <li>Optimized transaction costs and on-chain storage by leveraging Program Derived Addresses (PDAs), cross-program invocations (CPI), and efficient account resizing.</li>
        <li>Developed a migration strategy supporting up to 99 active locked positions per user, enhancing contract scalability and flexibility.</li>
        <li>Conducted comprehensive smart contract security audit to identify and mitigate potential vulnerabilities, ensuring robust security for user funds and token operations.</li>
      </ul>
      
      <p className="text-base text-white mb-2">
        <strong>Discord Bot - Real-time Solana Token Tracker</strong>
      </p>
      <ul className="list-box my-3 space-y-2 text-[0.8rem]">
        <li>Developed a Discord bot that monitors new coin deployments via believe.app in real-time.</li>
        <li>Implemented ultra-fast webhook delivery system that fires Discord notifications under 2 seconds of token creation.</li>
        <li>Tracks and reports comprehensive token data including Contract Address (CA), Token ticker, Token name, Description, and Creator's X username & ID.</li>
        <li>Built with Solana blockchain integration for seamless real-time monitoring and alerting capabilities.</li>
      </ul>
      
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
