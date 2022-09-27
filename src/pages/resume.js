import React from "react";
import DesktopIntro from "../components/desktopIntro";
import ResumeContainer from "../components/resumeContainer";
import NavBar from "../components/navBar";
import Socials from "../components/socials";
import NavBtn from "../components/navBtn";
import cursorPos from "../hooks/useGetCursor";
import Cursor from "../components/cursor";

const Resume = () => {
  const [posX, posY] = cursorPos();
  return (
    <>
      <main className="bg-dark-bg p-[5%] md:hidden">
        <NavBar />
        <div className="my-8">
          <ResumeContainer />
        </div>
        <div className="my-8 flex justify-center gap-x-3">
          <NavBtn to="work" text="Work" />
          <NavBtn to="" text="Home" />
        </div>
        <Socials />
      </main>

      <main className="fixed hidden h-screen grid-cols-2 bg-dark-bg text-white md:grid">
        <Cursor top={posY} left={posX} />
        <DesktopIntro active="resume" />
        <div className="h-full overflow-y-scroll py-[10%] pr-[8%] pl-[5%]">
          <ResumeContainer />
        </div>
      </main>
    </>
  );
};

export default Resume;
export const Head = () => <title>Resume | Toshiro </title>;
