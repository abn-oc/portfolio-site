import { Octokit } from "octokit"

export default async function Land() {

  //getting leetcode profile stats
  const lcURL = "https://alfa-leetcode-api.onrender.com/userProfile/abnoc"
  const lcDetails = await (await fetch(lcURL)).json()
  console.log(lcDetails)
  //getting leetcode language stats
  const langURL = "https://alfa-leetcode-api.onrender.com/languageStats?username=abnoc"
  const langDetails = await (await fetch(langURL)).json()
  console.log(langDetails)
  //getting github commits
  const octokit = new Octokit({
    auth: process.env.GH_AUTH
  })
  const ghDetails = await octokit.request('GET /users/{username}/events', {
    username: "abn-oc"
  })
  console.log(ghDetails)

  return (
    <div className="p-12">
    <h1 className="text-3xl">leet API</h1>
    <p>hi</p>
    </div>
  )
}