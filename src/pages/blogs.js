import React from "react";
import BlogsContainer from "../components/blogsContainer";
import DesktopIntro from "../components/desktopIntro";
import NavBar from "../components/navBar";
import NavBtn from "../components/navBtn";
import Socials from "../components/socials";

const Blogs = () => {
  return (
    <>
      <main className="bg-dark-bg p-[5%] md:hidden">
        <NavBar />
        <div className="my-8">
          <BlogsContainer />
        </div>
        <div className="my-8 flex justify-center gap-x-3">
          <NavBtn to="work" text="Work" />
          <NavBtn to="resume" text="Resume" />
        </div>
        <Socials />
      </main>
      <main className="fixed hidden h-screen grid-cols-2 bg-dark-bg text-white md:grid">
        {/* <MovingCursor config={cursorConfig} /> */}
        <DesktopIntro active="blogs" />

        <div className="h-full overflow-y-scroll py-[10%] pr-[8%] pl-[5%]">
          <BlogsContainer />
        </div>
      </main>
    </>
  );
};

export default Blogs;
export const Head = () => <title>Toshiro | Blogs </title>;
