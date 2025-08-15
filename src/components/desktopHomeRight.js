import React from "react";
import {FaEye, FaCodeBranch, FaCube} from "react-icons/fa";

const DesktopHomeRight = () => {
  return (
    <>
      <h2 className="my-4 text-xs font-bold uppercase text-dark-grey">
        Projects
      </h2>
      <div className="darken flex flex-col gap-y-8 md:gap-y-3">
        <div className="flex flex-col bg-box-bg p-10 transition-all duration-300 md:hover:scale-110">
          <h3 className="text-[1.3rem] font-semibold text-white">Nestmate</h3>
          <p className="mb-3 mt-1 text-xs font-semibold leading-5 tracking-wider text-light-grey">
            NODEJS + TYPESCRIPT + REACT + NESTJS + PRISMA + POSTGRESQL + GIT + PAYSTACK PAYMENT GATEWAY API + GOOGLE OAUTH
          </p>
          <p className="my-3 min-h-[5rem] text-xs font-semibold tracking-wider text-dark-grey md:h-16">
          Built and maintained backend modules for tenants, agents, and admins using Node.js, TypeScript, and NestJS.
          <br />
          Designed RESTful APIs for authentication, property listings, bookings, and agent-user communication.
          <br />
          Integrated Prisma ORM with PostgreSQL for optimized data modeling and queries.
          <br />
          Implemented role-based access control (RBAC) to securely isolate tenant, agent, and admin operations.
          <br />
          Enhanced performance via logic refactoring and redundant query reduction, ensuring scalability.
          <br />
          Wrote unit and integration tests to maintain reliability and prevent regressions.
          <br />
          Deployed the application using Docker and Kubernetes for scalable and efficient hosting.
          </p>
          <div className="flex items-center gap-x-4 my-8">
            <a
              href="https://www.f1meme.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-x-1 text-xs text-light-grey hover:text-white"
            >
              <FaEye /> <span>Website</span>
            </a>
          </div>
        </div>
        <div className="flex flex-col bg-box-bg p-10 transition-all duration-300 md:hover:scale-110">
          <h3 className="text-[1.3rem] font-semibold text-white">F1 Meme</h3>
          <p className="mb-3 mt-1 text-xs font-semibold leading-5 tracking-wider text-light-grey">
            NODEJS + TYPESCRIPT + REACT + WEB3.JS
          </p>
          <p className="my-3 min-h-[5rem] text-xs font-semibold tracking-wider text-dark-grey md:h-16">
          Designed and developed a fully functional meme-based web platform (f1meme.com) from scratch for a client, 
          delivering responsive UI, dynamic content management, and optimized performance while handling all frontend, 
          backend, and deployment tasks independently.
          </p>
          <div className="flex items-center gap-x-4 my-8">
            <a
              href="https://www.f1meme.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-x-1 text-xs text-light-grey hover:text-white"
            >
              <FaEye /> <span>Website</span>
            </a>
          </div>
        </div>
        <div className="flex flex-col bg-box-bg p-10 transition-all duration-300 md:hover:scale-110">
          <h3 className="text-[1.3rem] font-semibold text-white">F1 Meme Membership-Based Token Vesting</h3>
          <p className="mb-3 mt-1 text-xs font-semibold leading-5 tracking-wider text-light-grey">
            RUST + ANCHOR + NODEJS + TYPESCRIPT + SOLANA + SPL TOKEN + METAPLEX + IPFS
          </p>
          <p className="my-3 min-h-[5rem] text-xs font-semibold tracking-wider text-dark-grey md:h-16">
          Designed and implemented a Rust-based Solana smart contract and a website for the F1 Meme (BOXBOX)
          SPL token, enabling secure token locking and controlled distribution for Formula 1 fan
          memberships.
          </p>
          <div className="flex items-center gap-x-4 my-8">
            <a
              href="https://www.f1meme.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-x-1 text-xs text-light-grey hover:text-white"
            >
              <FaEye /> <span>Website</span>
            </a>
            <a
              href="https://f1meme-frontend.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-x-1 text-xs text-light-grey hover:text-white"
            >
              <FaEye /> <span>Token Vesting Website</span>
            </a>
          </div>
        </div>
        <div className="flex flex-col bg-box-bg p-10 transition-all duration-300 md:hover:scale-110">
          <h3 className="text-[1.3rem] font-semibold text-white">Medit (AI-powered Medical Editor )</h3>
          <p className="mb-3 mt-1 text-xs font-semibold leading-5 tracking-wider text-light-grey">
            REACT + MODEJS + TYPESCRIPT + POSTGRESQL + GPT-4 + GRAMMARLY + MED-PALM + BIOGPT
          </p>
          <p className="my-3 min-h-[5rem] text-xs font-semibold tracking-wider text-dark-grey md:h-16">
          AI-powered editing and analysis for medical articles and research papers
          </p>
          <div className="flex items-center gap-x-4 my-8">
            <a
              href="https://meditai.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-x-1 text-xs text-light-grey hover:text-white"
            >
              <FaEye /> <span>Website</span>
            </a>
          </div>
        </div>
        <div className="flex flex-col bg-box-bg p-10 transition-all duration-300 md:hover:scale-110">
          <h3 className="text-[1.3rem] font-semibold text-white">Swap Program</h3>
          <p className="mb-3 mt-1 text-xs font-semibold leading-5 tracking-wider text-light-grey">
            RUST + ANCHOR + TYPESCRIPT + SOLANA
          </p>
          <p className="my-3 min-h-[5rem] text-xs font-semibold tracking-wider text-dark-grey md:h-16">
          Developed a token swap platform with smart contract logic for peer-to-peer cryptocurrency exchanges, ensuring secure validation and execution of token transactions. Engineered a blockchain vault system with robust security protocols to manage token offers and prevent unauthorized transfers.
          </p>
          <div className="flex items-center gap-x-4 my-8">
            <a
              
              href="https://github.com/Goddy01/swap-app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-start gap-x-1 text-xs text-light-grey hover:text-white"
            >
              <FaCodeBranch /> <span>Source Code</span>
            </a>
            <a
              href="https://explorer.solana.com/address/35B6fNAgPfqeW9d9qANsQrECSYFDxoobTo3CTrZJxAvJ?cluster=devnet"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-x-1 text-xs text-light-grey hover:text-white"
            >
              <FaEye /> <span>View on Solana Explorer</span>
            </a>
          </div>
        </div>
        <div className="flex flex-col bg-box-bg p-10 transition-all duration-300 md:hover:scale-110">
          <h3 className="text-[1.3rem] font-semibold text-white">SPL(Solana Program Library) Token</h3>
          <p className="mb-3 mt-1 text-xs font-semibold leading-5 tracking-wider text-light-grey">
            RUST + ANCHOR + TYPESCRIPT + SOLANA + METAPLEX + IPFS FILE MANAGEMENT SYSTEM
          </p>
          <p className="my-3 min-h-[5rem] text-xs font-semibold tracking-wider text-dark-grey md:h-16">
          Developed an SPL token with metadata on the Solana blockchain, facilitating seamless transactions for over 65,000 users and enabling an ATA transfer feature for enhanced functionality.
          </p>
          <div className="flex items-center gap-x-4 my-8">
            <a
              
              href="https://github.com/Goddy01/LockdafuckIn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-start gap-x-1 text-xs text-light-grey hover:text-white"
            >
              <FaCodeBranch /> <span>Source Code</span>
            </a>
            <a
              href="https://explorer.solana.com/address/Hx8eZQjrXiC6gpSR6h1ESttAsp5hkNQ5fwtyyeVEUn6k/metadata?cluster=devnet"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-x-1 text-xs text-light-grey hover:text-white"
            >
              <FaEye /> <span>View Token on Solana Explorer</span>
            </a>
          </div>
        </div>
        <div className="flex flex-col bg-box-bg p-10 transition-all duration-300 md:hover:scale-110">
          <h3 className="text-[1.3rem] font-semibold text-white">NFT Collection:</h3>
          <p className="mb-3 mt-1 text-xs font-semibold leading-5 tracking-wider text-light-grey">
          TYPESCRIPT + SOLANA + METAPLEX + IPFS FILE MANAGEMENT SYSTEM
          </p>
          <p className="my-3 min-h-[5rem] text-xs font-semibold tracking-wider text-dark-grey md:h-16">
          Developed and managed a Solana-based NFT collection using TypeScript and Metaplex. Programmatically minted NFTs with metadata, added them to the collection, and verified their authenticity and association.
          </p>
          <div className="flex items-center gap-x-4 my-8">
            <a
              
              href="https://github.com/Goddy01/solana-nft"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-start gap-x-1 text-xs text-light-grey hover:text-white"
            >
              <FaCodeBranch /> <span>Source Code</span>
            </a>
            <a
              href="https://explorer.solana.com/address/CXbWAgFihjtxLHgRPwV7142f7wg6bzFaqkPCB3rTcM7t?cluster=devnet"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-x-1 text-xs text-light-grey hover:text-white"
            >
              <FaEye /> <span>View NFT Collection on Solana Explorer</span>
            </a>
            <a
              href="https://explorer.solana.com/address/EhVJLzqXnyypn95ZFL8QKVFSntRehk85JAQhcgAG9fwS/metadata?cluster=devnet"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-x-1 text-xs text-light-grey hover:text-white"
            >
              <FaEye /> <span>View NFT Asset on Solana Explorer</span>
            </a>
          </div>
        </div>
        <div className="flex flex-col bg-box-bg p-10 transition-all duration-300 md:hover:scale-110">
          <h3 className="text-[1.3rem] font-semibold text-white">Decentralized Voting App</h3>
          <p className="mb-3 mt-1 text-xs font-semibold leading-5 tracking-wider text-light-grey">
            RUST + TYPESCRIPT + ANCHOR + SOLANA + SOLANA BLINKS + SOLANA ACTIONS + DIALECT BLINKS
          </p>
          <p className="my-3 min-h-[5rem] text-xs font-semibold tracking-wider text-dark-grey md:h-16">
          Developed secure smart contracts in Rust using Anchor to manage voting logic and ensure data integrity.
          </p>
          {/* <div className="flex items-center gap-x-4 my-8">
            <a
              
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-start gap-x-1 text-xs text-light-grey hover:text-white"
            >
              <FaEye /> <span>Source Code</span>
            </a>
            <a
              href="https://github.com/Goddy01/Refnet"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-x-1 text-xs text-light-grey hover:text-white"
            >
              <FaCodeBranch /> <span>Frontend</span>
            </a>
            <a
              href="https://github.com/Goddy01/Gorah-Backend"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-x-1 text-xs text-light-grey hover:text-white"
            >
              <FaCodeBranch /> <span>Backend</span>
            </a>
          </div> */}
        </div>
        <div className="flex flex-col bg-box-bg p-10 transition-all duration-300 md:hover:scale-110">
          <h3 className="text-[1.3rem] font-semibold text-white">Refnet</h3>
          <p className="mb-3 mt-1 text-xs font-semibold leading-5 tracking-wider text-light-grey">
            REACT +  DJANGO + DJANGO CHANNELS + WEBSOCKET + REDIS + RABBITMQ + CELERY + GIT + POSTGRESQL + OAUTH + REST API
          </p>
          <p className="my-3 min-h-[5rem] text-xs font-semibold tracking-wider text-dark-grey md:h-16">
          Developed an innovative job referral platform designed to bridge the gap between professionals and job seekers, significantly enhancing employment opportunities in the process
          </p>
          <div className="flex items-center gap-x-4 my-8">
            <a
              
              href="https://refnet.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-start gap-x-1 text-xs text-light-grey hover:text-white"
            >
              <FaEye /> <span>Live</span>
            </a>
            <a
              href="https://github.com/Goddy01/Refnet"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-x-1 text-xs text-light-grey hover:text-white"
            >
              <FaCodeBranch /> <span>Frontend</span>
            </a>
            <a
              href="https://github.com/Goddy01/Gorah-Backend"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-x-1 text-xs text-light-grey hover:text-white"
            >
              <FaCodeBranch /> <span>Backend</span>
            </a>
          </div>
        </div>
        <div className="flex flex-col bg-box-bg p-10 transition-all duration-300 md:hover:scale-110">
          <h3 className="text-[1.3rem] font-semibold text-white">TheDropFather</h3>
          <p className="mb-3 mt-1 text-xs font-semibold leading-5 tracking-wider text-light-grey">
            REACT +  DJANGO + REDIS + RABBITMQ + CELERY + GIT + POSTGRESQL + OAUTH + REST API
          </p>
          <p className="my-3 min-h-[5rem] text-xs font-semibold tracking-wider text-dark-grey md:h-16">
          Developed a platform to automate airdrop activation effortlessly and boost crypto rewards. The platform simplifies the process of managing and activating Telegram airdrop mini-apps, helping users stay ahead in the dynamic world of airdrops.
          </p>
          <div className="flex items-center gap-x-4 my-8">
            <a
              
              href="https://thedropfather.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-start gap-x-1 text-xs text-light-grey hover:text-white"
            >
              <FaEye /> <span>Live</span>
            </a>
            <a
              href="https://github.com/Goddy01/airdrop-miner-frontend"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-x-1 text-xs text-light-grey hover:text-white"
            >
              <FaCodeBranch /> <span>Frontend</span>
            </a>
            <a
              href="https://github.com/Goddy01/Gorah-Backend"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-x-1 text-xs text-light-grey hover:text-white"
            >
              <FaCodeBranch /> <span>Backend</span>
            </a>
          </div>
        </div>
        <div className="flex flex-col bg-box-bg p-10 transition-all duration-300 md:hover:scale-110">
          <h3 className="text-[1.3rem] font-semibold text-white">CrowdSourceIt</h3>
          <p className="mb-3 mt-1 text-xs font-semibold leading-5 tracking-wider text-light-grey">
            HTML + CSS + BOOTSTRAP + JAVASCRIPT + jQuery + AJAX +  DJANGO + DJANGO CHANNELS + WEBSOCKET + REDIS + RABBITMQ + CELERY + DOCKER + GIT + POSTGRESQL + PAYSTACK PAYMENT GATEWAY API + GOOGLE OAUTH
          </p>
          <p className="my-3 min-h-[5rem] text-xs font-semibold tracking-wider text-dark-grey md:h-16">
          Transforming crowdsourcing and crowdfunding, this platform accommodates diverse user roles with features like a dedicated moderator function, robust chat systems, automatic group chat inclusion, and a user-friendly search feature. Users can collaborate, vote on contributions, and highlight impactful ones. Real-time updates and streamlined fund management elevate the overall user experience
          </p>
          <div className="flex items-center gap-x-4 my-8">
            <a
              
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-start gap-x-1 text-xs text-light-grey hover:text-white"
            >
              <FaEye /> <span>Deployment In Progress </span>
            </a>
            <a
              href="https://github.com/Goddy01/crowdsourcing-platform"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-x-1 text-xs text-light-grey hover:text-white"
            >
              <FaCodeBranch /> <span>Code</span>
            </a>
          </div>
        </div>
        <div className="flex flex-col bg-box-bg p-10 transition-all duration-300 md:hover:scale-110">
          <h3 className="text-[1.3rem] font-semibold text-white">NASA APOD</h3>
          <p className="mb-3 mt-1 text-xs font-semibold leading-5 tracking-wider text-light-grey">
            REACT + NASA APOD API Integration
          </p>
          <p className="my-3 min-h-[5rem] text-xs font-semibold tracking-wider text-dark-grey md:h-16">
          A web platform that showcases NASA's Astronomy Picture of the Day (APOD). The site features stunning daily images and insights from space, accompanied by detailed descriptions provided by NASA.
          </p>
          <div className="flex items-center gap-x-4 my-8">
            <a
              
              href="https://best-nasa-apod.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-start gap-x-1 text-xs text-light-grey hover:text-white"
            >
              <FaEye /> <span>Live</span>
            </a>
            <a
              href="https://github.com/Goddy01/React-NASA-APOD"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-x-1 text-xs text-light-grey hover:text-white"
            >
              <FaCodeBranch /> <span>Code</span>
            </a>
          </div>
        </div>
        <div className="flex flex-col bg-box-bg p-10 transition-all duration-300 md:hover:scale-110">
          <h3 className="text-[1.3rem] font-semibold text-white">Bulk Mode</h3>
          <p className="mb-3 mt-1 text-xs font-semibold leading-5 tracking-wider text-light-grey">
            REACT
          </p>
          <p className="my-3 min-h-[5rem] text-xs font-semibold tracking-wider text-dark-grey md:h-16">
          A website for efficiently setting up and tracking workout reps, designed to enhance user experience and simplify fitness routines
          </p>
          <div className="flex items-center gap-x-4 my-8">
            <a
              
              href="https://bulkmode.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-start gap-x-1 text-xs text-light-grey hover:text-white"
            >
              <FaEye /> <span>Live</span>
            </a>
            <a
              href="https://github.com/Goddy01/Bulk-Mode"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-x-1 text-xs text-light-grey hover:text-white"
            >
              <FaCodeBranch /> <span>Code</span>
            </a>
          </div>
        </div>
        <div className="flex flex-col bg-box-bg p-10 transition-all duration-300 md:hover:scale-110">
          <h3 className="text-[1.3rem] font-semibold text-white">FlixGo</h3>
          <p className="mb-3 mt-1 text-xs font-semibold leading-5 tracking-wider text-light-grey">
            HTML + CSS + JAVASCRIPT + DJANGO + POSTGRESQL + TMDB API + AWS S3 +
            RAILWAY
          </p>
          <p className="my-3 min-h-[5rem] text-xs font-semibold tracking-wider text-dark-grey md:h-16">
            This web application utilizes TMDB (The Movie Database) API to
            retrieve movies and tv shows information. This web application
            features Watchlist, User Registration and Login, Account Signup
            Confirmation, User Authentication, Password Reset and more...
          </p>
          <div className="flex items-center gap-x-4">
            <a
              href="https://flixgo.up.railway.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-start gap-x-1 text-xs text-light-grey hover:text-white"
            >
              <FaEye /> <span>Live</span>
            </a>
            <a
              href="https://github.com/Goddy01/Movie-App"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-x-1 text-xs text-light-grey hover:text-white"
            >
              <FaCodeBranch /> <span>Code</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col bg-box-bg p-10 transition-all duration-300 md:hover:scale-110">
          <h3 className="text-[1.3rem] font-semibold text-white">
            Summit E-Shop
          </h3>
          <p className="mb-3 mt-1 text-xs font-semibold leading-5 tracking-wider text-light-grey">
            HTML + CSS + JAVASCRIPT + AJAX + DJANGO + PAYSTACK PAYMENT GATEWAY +
            POSTGRESQL + AWS S3 + RAILWAY
          </p>
          <p className="my-3 min-h-[5rem] text-xs font-semibold tracking-wider text-dark-grey md:h-10">
            This e-commerce application features Customers and Vendors
            Registration/Login, User Authorization and Authentication, Add to
            Cart Functionality for Registered Users and Guest Users, Wishlist,
            Multi-Customers/Multi-Vendor System, and more....
          </p>
          <div className="flex items-center gap-x-4">
            <a
              href="https://summit.up.railway.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-start gap-x-1 text-xs text-light-grey hover:text-white"
            >
              <FaEye /> <span>Live</span>
            </a>
            <a
              href="https://github.com/Goddy01/E-commerce"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-x-1 text-xs text-light-grey hover:text-white"
            >
              <FaCodeBranch /> <span>Code</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col bg-box-bg p-10 transition-all duration-300 md:hover:scale-110">
          <h3 className="text-[1.3rem] font-semibold text-white">
            Oduduwa Shrine
          </h3>
          <p className="mb-3 mt-1 text-xs font-semibold leading-5 tracking-wider text-light-grey">
            HTML + CSS + JAVASCRIPT + DJANGO + CKEDITOR + PAYSTACK PAYMENT
            GATEWAY + POSTGRESQL + AWS S3 + RAILWAY
          </p>
          <p className="my-3 min-h-[5rem] text-xs font-semibold tracking-wider text-dark-grey md:h-10">
            This web app allows the shrine to publish her sermons, upcoming
            events and news. It features Users Registration and Login, User
            Authorization and Authentication,Payment Gateway and more...
          </p>
          <div className="flex items-center gap-x-4">
            {/* <a
              href="https://oduduwashrine.up.railway.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-x-1 text-xs text-light-grey hover:text-white"
            >
              <FaEye /> <span>Live</span>
            </a> */}
            <a
              href="https://github.com/Goddy01/Shrine-Web-App"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-x-1 text-xs text-light-grey hover:text-white"
            >
              <FaCodeBranch /> <span>Code</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col bg-box-bg p-10 transition-all duration-300 md:hover:scale-110">
          <h3 className="text-[1.3rem] font-semibold text-white">Bloggie</h3>
          <p className="mb-3 mt-1 text-xs font-semibold leading-5 tracking-wider text-light-grey">
            HTML + CSS + JAVASCRIPT + DJANGO + CKEDITOR + SQLITE3 + AWS S3 +
            RAILWAY
          </p>
          <p className="my-3 min-h-[5rem] text-xs font-semibold tracking-wider text-dark-grey md:h-10">
            Bloggie allows users to write and publish blog posts. It features
            Users Registration and Login, User Authorization and Authentication
            and more...
          </p>
          <div className="flex items-center gap-x-4">
            {/* <a
              href="https://bloggie.up.railway.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-x-1 text-xs text-light-grey hover:text-white"
            >
              <FaEye /> <span>Live</span>
            </a> */}
            <a
              href="https://github.com/Goddy01/Blogging-Site-Latest"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-x-1 text-xs text-light-grey hover:text-white"
            >
              <FaCodeBranch /> <span>Code</span>
            </a>
          </div>
        </div>
      </div>

      {/* <section>
        <h2 className="mb-6 mt-16 text-[0.7rem] font-semibold uppercase text-dark-grey">
          Others
        </h2>
        <div className="darken mb-12 grid w-full items-end gap-y-8 md:grid-cols-2 md:gap-2.5">
          <div className="flex flex-col justify-between bg-box-bg p-10 transition-all duration-300 md:hover:scale-110">
            <section>
              <h3 className="text-[1.3rem] font-semibold text-white">
                Klic.gg
              </h3>
              <p className="mt-1 text-[0.65rem] font-semibold uppercase leading-3 tracking-wider text-light-grey">
                NEXTJS + TYPESCRIPT + AWS
              </p>
              <p className="my-3 h-20 text-xs font-semibold text-dark-grey">
                Esports/VOD livestreaming platform with multiview experience
              </p>
            </section>
            <div className="inline-flex">
              <a
                href="https://www.test.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-x-1 text-xs text-light-grey hover:text-white"
              >
                <FaEye /> <span>Live</span>
              </a>
            </div>
          </div>

          <div className="relative flex flex-col justify-between bg-box-bg p-10 transition-all duration-300 md:translate-y-6 md:hover:scale-110">
            <section>
              <h3 className="text-[1.3rem] font-semibold text-white">
                Birdbox
              </h3>
              <p className="mt-1 text-[0.65rem] font-semibold uppercase leading-3 tracking-wider text-light-grey">
                VUE + SOCKET.IO + EXPRESS
              </p>
              <p className="my-3 h-20 text-xs font-semibold text-dark-grey">
                Social application with real time Messaging
              </p>
            </section>

            <div className="flex items-center gap-x-4">
              <a
                href="https://www.test.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-x-1 text-xs text-light-grey hover:text-white"
              >
                <FaEye /> <span>Live</span>
              </a>

              <a
                href="https://www.test.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-x-1 text-xs text-light-grey hover:text-white"
              >
                <FaCodeBranch /> <span>Code</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-between bg-box-bg p-10 transition-all duration-300 md:hover:scale-110">
            <section>
              <h3 className="text-[1.3rem] font-semibold text-white">
                React Insect
              </h3>
              <p className="mt-1 text-[0.65rem] font-semibold uppercase leading-3 tracking-wider text-light-grey">
                REACT + TYPESCRIPT
              </p>
              <p className="my-3 h-20 text-xs font-semibold text-dark-grey">
                Highly customisable input &amp; select dropdown component for
                react
              </p>
            </section>

            <div className="inline-flex">
              <a
                href="https://www.test.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-x-1 text-xs text-light-grey hover:text-white"
              >
                <FaCube /> <span>Pkg Repo</span>
              </a>
            </div>
          </div>

          <div className="relative flex flex-col justify-between bg-box-bg p-10 transition-all duration-300 md:translate-y-6 md:hover:scale-110">
            <section>
              <h3 className="text-[1.3rem] font-semibold text-white">
                Haute Couture
              </h3>
              <p className="mt-1 text-[0.65rem] font-semibold uppercase leading-3 tracking-wider text-light-grey">
                REACT + TYPESCRIPT
              </p>
              <p className="my-3 h-20 text-xs font-semibold text-dark-grey">
                Fashion landing page
              </p>
            </section>
            <div className="flex items-center gap-x-4">
              <a
                href="https://www.test.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-x-1 text-xs text-light-grey hover:text-white"
              >
                <FaEye /> <span>Live</span>
              </a>

              <a
                href="https://www.test.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-x-1 text-xs text-light-grey hover:text-white"
              >
                <FaCodeBranch /> <span>Code</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-between bg-box-bg p-10 transition-all duration-300 md:hover:scale-110">
            <section>
              <h3 className="text-[1.3rem] font-semibold text-white">
                BevelPlexus
              </h3>
              <p className="mt-1 text-[0.65rem] font-semibold uppercase leading-3 tracking-wider text-light-grey">
                REACT + CONTEXT API
              </p>
              <p className="my-3 h-20 text-xs font-semibold text-dark-grey">
                UI for a fintech application
              </p>
            </section>
            <div className="inline-flex">
              <a
                href="https://www.test.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-x-1 text-xs text-light-grey hover:text-white"
              >
                <FaEye /> <span>Live</span>
              </a>
            </div>
          </div>

          <div className="relative flex flex-col justify-between bg-box-bg p-10 transition-all duration-300 md:translate-y-6 md:hover:translate-y-4 md:hover:scale-110">
            <section>
              <h3 className="text-[1.3rem] font-semibold text-white">Jobbox</h3>
              <p className="mt-1 text-[0.65rem] font-semibold uppercase leading-3 tracking-wider text-light-grey">
                NEXT JS + TYPESCRIPT + GSAP
              </p>
              <p className="my-3 h-20 text-xs font-semibold text-dark-grey">
                Landing page for Job board application
              </p>
            </section>
            <div className="flex items-center gap-x-4">
              <a
                href="https://www.test.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-x-1 text-xs text-light-grey hover:text-white"
              >
                <FaEye /> <span>Live</span>
              </a>

              <a
                href="https://www.test.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-x-1 text-xs text-light-grey hover:text-white"
              >
                <FaCodeBranch /> <span>Code</span>
              </a>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default DesktopHomeRight;
