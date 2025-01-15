export default function AboutMe() {

    const intro = "2nd year cs student from fast lahore. currently learning web and app development. outside of studies, i enjoy games, shows and chess"

    return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8">
      <h2 className="font-ebgaramond text-zinc-50 text-3xl sm:text-4xl font-bold self-start">about me</h2>
      <div className="flex flex-col-reverse sm:flex-row items-center px-12 sm:justify-around">
        <p className="text-zinc-50 text-sm sm:text-xl w-screen mt-5 sm:w-1/2 text-center">{intro}</p>
        <img src="/bw_bonc.webp" alt="abdullah" className="w-36 sm:w-40 rounded"/>
      </div>

    </div>
    )
}