import React from "react";
import DesktopHomeRight from "../components/desktopHomeRight";
// import MovingCursor from "movingcursor";
// import CustomCursor from "custom-cursor-react";
// import "custom-cursor-react/dist/index.css";

// import { CursorProvider } from "react-cursor";

import DesktopIntro from "../components/desktopIntro";
import Intro from "../components/intro";
import NavBar from "../components/navBar";
import Socials from "../components/socials";
const Home = () => {
  // const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  // useEffect(() => {
  //   const locX = window.
  // // console.log()
  //   return () => {

  //   }
  // }, [{...cursorPos}])

  // const cursorConfig = {
  //   color: "#bebebe",
  //   size: "3px",
  //   borderSize: "3px",
  //   delay: "0.1s",
  // };
  return (
    <>
      <main className="flex min-h-screen flex-col justify-between bg-dark-bg p-[5%] text-white md:hidden">
        <NavBar />
        <Intro />
        <Socials />
      </main>
      <main className="fixed hidden h-screen grid-cols-2 bg-dark-bg text-white md:grid">
        {/* <MovingCursor config={cursorConfig} /> */}
        <DesktopIntro active="" />
        <div className="h-full overflow-y-scroll py-[10%] pr-[8%] pl-[5%]">
          <DesktopHomeRight />
        </div>
      </main>
    </>
  );
};

export default Home;
export const Head = () => <title>Toshiro | Adigun Godwin </title>;
