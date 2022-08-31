import React from "react";
import { BsClock } from "react-icons/bs";

const BlogsContainer = () => {
  return (
    <div className="darken mb-12 grid w-full gap-2.5 md:grid-cols-2">
      <section className="flex min-h-[350px] flex-col justify-between bg-box-bg p-10 transition-all duration-300 md:hover:scale-110">
        <div>
          <h3 className="font-[Harmattan] text-xs font-semibold uppercase tracking-widest text-light-grey">
            Year in review, personal
          </h3>
          <p className="text-xs font-medium text-dark-grey">January 01, 2022</p>
        </div>
        <div className="">
          <p className="mb-4 mr-4 text-[1.2rem] font-semibold text-white">
            2022 - Happier than Ever
          </p>
          <div className="flex items-center gap-x-1 text-[0.7rem] text-dark-grey">
            <BsClock />
            <span>10 mins read</span>
          </div>
        </div>
      </section>

      <section className="flex min-h-[350px] flex-col justify-between bg-box-bg p-10 transition-all duration-300 md:translate-y-6 md:hover:scale-110">
        <div>
          <h3 className="font-[Harmattan] text-xs font-semibold uppercase tracking-widest text-light-grey">
            Django, REST
          </h3>
          <p className="text-xs font-medium text-dark-grey">January 01, 2022</p>
        </div>
        <div className="">
          <p className="mb-4 mr-4 text-[1.2rem] font-semibold text-white">
            User Authentication using Django REST framework
          </p>
          <div className="flex items-center gap-x-1 text-[0.7rem] text-dark-grey">
            <BsClock />
            <span>19 mins read</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogsContainer;
