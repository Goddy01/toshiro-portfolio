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
            <a
              href="https://oduduwashrine.up.railway.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-x-1 text-xs text-light-grey hover:text-white"
            >
              <FaEye /> <span>Live</span>
            </a>
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
            <a
              href="https://bloggie.up.railway.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-x-1 text-xs text-light-grey hover:text-white"
            >
              <FaEye /> <span>Live</span>
            </a>
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
