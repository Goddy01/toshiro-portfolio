import React from "react";
import DesktopHomeRight from "../components/desktopHomeRight";
import DesktopIntro from "../components/desktopIntro";
import NavBar from "../components/navBar";
import NavBtn from "../components/navBtn";
import Socials from "../components/socials";

const Work = () => {
  return (
    <>
      <main className="bg-dark-bg p-[5%] md:hidden">
        <NavBar />
        <div className="mb-20 mt-8 px-2">
          <DesktopHomeRight />
        </div>
        <div className="my-8 flex justify-center gap-x-3">
          <NavBtn to="" text="Home" />
          <NavBtn to="blogs" text="Articles" />
        </div>
        <Socials />
      </main>

      <main className="fixed hidden h-screen grid-cols-2 bg-dark-bg text-white md:grid">
        <DesktopIntro active="" />
        <div className="h-full overflow-y-scroll py-[10%] pr-[8%] pl-[5%]">
          <DesktopHomeRight />
        </div>
      </main>
    </>
  );
};

export default Work;
export const Head = () => <title>Toshiro | Work </title>;
