export default function Landing() {

    const intro = "2nd year cs student from fast lahore. currently learning web and app development. outside of studies, i enjoy games, shows and chess"

    return (
    <div className="min-h-screen flex flex-col mt-12 sm:mt-0">
      <h2 className="font-ebgaramond text-zinc-50 text-3xl sm:text-6xl">welcome to my site.</h2>
      <h1 className="font-semibold text-zinc-50 text-2xl sm:text-3xl mt-2">abdullah ihtasham</h1>
      <div className="flex flex-col-reverse sm:flex-row items-center px-12 justify-end sm:justify-around sm:flex-1 mb-5 mt-24 sm:mt-0">
        <p className="text-zinc-50 text-md sm:text-xl mt-5 w-screen sm:w-1/2 text-left sm:text-center ml-16 sm:ml-0">{intro}</p>
        <img src="/bw_bonc.webp" alt="abdullah" className="w-36 sm:w-40 rounded"/>
      </div>
    </div>
    )
}