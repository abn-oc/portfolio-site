export default function Landing() {

    const intro = "2nd year cs student from fast lahore. currently learning web and app development. outside of studies, i enjoy games, shows and chess"

    return (
    <div className="bg-black min-h-[90vh] p-5 text-white flex flex-col gap-4">
      <p className="text-xl font-bold">About Me</p>
      <div className="flex flex-col sm:flex-row gap-8 p-6 justify-center items-center">
      <img src="/bw_bonc.webp" alt="abdullah" className="w-36 rounded"/>
      <p className="max-w-md">{intro}</p>
      </div>
    </div>
    )
}