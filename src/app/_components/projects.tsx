import ProjectCard from "./pj_card"

export default function Projects() {

    return (
    <div className="bg-black min-h-[90vh] p-5 text-white flex flex-row gap-4 flex-wrap justify-center">
        <ProjectCard name="Watchlist app" pic="/wlss.webp" tech={["React"]} githubLink="https://github.com/abn-oc/watchlist-app" siteLink="https://wlistapp.netlify.app/"/>
        <ProjectCard name="12 Beads" pic="/12beads_ss.webp" tech={["C++","Raylib"]} githubLink="https://github.com/abn-oc/12-Beads"/>
        <ProjectCard name="Talktalkk" pic="/talktalkk_ss.webp" tech={["React","Firebase","Typescript","Tailwind"]} githubLink="https://github.com/abn-oc/talktalk" siteLink="https://talktalkk.netlify.app/"/>
        <ProjectCard name="Assembly Bird" pic="/flappy_ss.webp" tech={["Assembly"]} githubLink="https://github.com/abn-oc/assembly-bird"/>
    </div>
    )
}