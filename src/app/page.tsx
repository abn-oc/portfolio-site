import AboutMe from "./_components/about_me";
import Landing from "./_components/landing";

export default function Main() {
  return (
    <div className="bg-zinc-900 px-8 sm:px-12 overflow-x-hidden">
    <Landing/>
    <AboutMe/>
    </div>
  )
}