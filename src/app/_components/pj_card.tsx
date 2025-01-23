import { FaGithub } from "react-icons/fa";
import { IoEnter } from "react-icons/io5";

export default function ProjectCard({
  name, 
  pic, 
  tech,
  githubLink,
  siteLink
}: {
  name: string, 
  pic: string, 
  tech: string[],
  githubLink: string
  siteLink?: string
}) {
    const techMarkup = tech.map((t, index) => 
        <p 
            key={index} 
            className="border border-neutral-700 p-1 px-2 text-xs rounded-2xl text-neutral-300"
        >
            {t}
        </p>
    )

    return (
        <div className="bg-neutral-950 w-96 h-fit rounded-lg overflow-hidden shadow-lg transform transition-all hover:scale-105">
            <div className="h-48 overflow-hidden">
                <img 
                    src={pic} 
                    alt={name} 
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="p-4 flex flex-col h-full">
                <div className="flex flex-row justify-between items-center mb-3">
                    <p className="text-2xl font-bold text-white flex-1">{name}</p>
                    <a 
                        href={githubLink} 
                        target="_blank" 
                        className="text-neutral-400 hover:text-white mx-1"
                    >
                        <FaGithub size={24}/>
                    </a>
                    {siteLink && <a 
                        href={siteLink} 
                        target="_blank" 
                        className="text-neutral-400 hover:text-white mx-1"
                    >
                        <IoEnter size={24}/>
                    </a>}
                </div>
                <div className="flex flex-row gap-2 mt-auto flex-wrap">
                    {techMarkup}
                </div>
            </div>
        </div>
    )
}