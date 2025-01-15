import { Octokit } from "octokit"

export default async function Stats() {

    //getting leetcode profile stats
    const lcURL = "https://alfa-leetcode-api.onrender.com/userProfile/abnoc"
    const lcDetails = await (await fetch(lcURL)).json()

    //getting leetcode language stats
    const langURL = "https://alfa-leetcode-api.onrender.com/languageStats?username=abnoc"
    const langDetails = await (await fetch(langURL)).json()

    //getting github commits
    const octokit = new Octokit({
        auth: process.env.GH_AUTH
    })
    const ghDetails = await octokit.request('GET /users/{username}/events', {
        username: "abn-oc"
    })

    console.log(lcDetails)
    console.log(langDetails)
    console.log(ghDetails)

    return (
        <div>
            <p>this component will be stats</p>
        </div>
    )
}