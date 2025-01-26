export default function Experience() {

    const list = [
        {
            title: "FSPC",
            year: "2024",
            type: ["hackathon","C++"],
            desc: "Speed programming competition organized by ACM FAST",
        },
        {
            title: "Ciphercraft",
            year: "2024",
            type: ["Hackathon","Nextjs","Supabase"],
            desc: "web-dev hackathon hosted in UET Lahore",
        },
        {
            title: "Devathon",
            year: "2024",
            type: ["Hackathon","React","Tailwind"],
            desc: "participated in web-dev hackathon hosted by devsinc, worked on frontend",
        },
    ]

    const markup = list.map((exp, index) => 
        <div key={index} className="w-full h-fit bg-neutral-950 p-4 rounded-lg shadow-lg flex flex-col gap-2 transition-all hover:scale-105">
            <div className="flex flex-row">
            <h3 className="text-3xl flex-1">{exp.title}</h3>
            <p>{exp.year}</p>
            </div>
            <div className="flex flex-row gap-2">
            {exp.type.map((t, index) => 
                <p key={index} className="border border-neutral-700 p-1 px-2 text-xs rounded-2xl text-neutral-300">
                    {t}
                </p>
            )}
            </div>
            <p className="text-neutral-100">{exp.desc}</p>
        </div>
    )

    return (
        <div className="bg-black min-h-[90vh] p-5 text-white flex flex-col gap-4">
            {markup}
        </div>
    )
}