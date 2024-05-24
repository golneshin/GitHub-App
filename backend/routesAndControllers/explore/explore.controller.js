// Controller for fetching repos data from GitHub
export const exploreController = async (req, res) => {
  const { language } = req.params
  const api_link = `https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc&per_page=10`

  try {
    const repoExploreRes = await fetch(api_link, {
      headers:{
        authorization: `token ${process.env.GITHUB_API_KEY}`
      }
    })

    const repoExplore = await repoExploreRes.json()
    res.status(200).json({  repos: repoExplore.items })
    
  } catch (error) {
      res.status(500).json({error: error.message}) 
  }
}
