"use client"
import { ReactElement, useState } from "react";
import AboutMe from "./_components/landing";
import Nav from "./_components/nav";
import NoSelected from "./_components/noselected";
import Selector from "./_components/selector"
import Projects from "./_components/projects";
import Experience from "./_components/experience";

export default function Main() {

  const screens: ReactElement[] = [
    <NoSelected key="no-selected" />,
    <AboutMe key="about-me" />,
    <Projects key="projects" />,
    <Experience key="experience" />
  ]
  const [screen, setScreen] = useState<ReactElement>(screens[0])

  function changeScreen(n: number) {
    for (let i = 1; i <= 3; i++) {
        const element = document.getElementById(i.toString());
        if (element) {
            element.classList.remove("text-black", "bg-white");
            if (i === n) {
                element.classList.add("text-black", "bg-white");
            }
        }
    }
    setScreen(screens[n])
  }

  return (
    <div className="bg-black px-0 sm:px-48 overflow-x-hidden flex flex-col">
    <Nav/>
    <p className="text-2xl mt-5 font-bold text-white mx-auto">Welcome to my site</p>
    <Selector>
      <button id="1" onClick={() => changeScreen(1)} className="p-3 m-1 px-8 rounded-md btn">About Me</button>
      <button id="2" onClick={() => changeScreen(2)} className="p-3 m-1 px-8 rounded-md btn">Projects</button>
      <button id="3" onClick={() => changeScreen(3)} className="p-3 m-1 px-8 rounded-md btn">Experience</button>
    </Selector>
    {screen}
    </div>
  )
}