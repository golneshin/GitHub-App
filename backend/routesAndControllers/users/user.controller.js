import User from "../../models/users.model.js"

// Controller for fetching user data from GitHub
export const userController = async (req, res) => {
  try {
    const { username } = req.params
    // Fetch user profile
    const userRes = await fetch(`https://api.github.com/users/${username}`, {
      headers:{
        authorization: `token ${process.env.GITHUB_API_KEY}`
      }
    })
    const userProfile = await userRes.json()
    
    // Fetch user repositories
    const reposRes = await fetch(userProfile.repos_url, {
      headers:{
        authorization: `token ${process.env.GITHUB_API_KEY}`
      }
    })
    const repos = await reposRes.json()

    res.status(200).json({ userProfile, repos })
    
  } catch (error) {
      res.status(500).json({error: error.message}) 
  }
}

export const getLikeController = async (req, res) => {
	try {
		// Authenticated user that we want to get it from database.
		const user = await User.findById(req.user._id.toString());
		console.log(user, 'Authenticated User');

		// Ensure that user.likedBy is an array before sending the response
		if (!Array.isArray(user.likedBy)) {
			throw new Error("likedBy is not an array");
		}

		res.status(200).json({ likedBy: user.likedBy });
	} catch (error) {
		console.error("Error in getLikeController:", error);
		res.status(500).json({ error: error.message });
	}
};

// Controller for fetching user likes from/to MongoDB
export const likeProfileController = async (req, res) => {
  try {
    const { username } = req.params
    //Authenticated user that we want to get it from database.
    const user = await User.findById(req.user._id.toString())
    console.log(user, 'Authenticated User')

    //User we want to like her/his profile and get it from database.
    const userToLike = await User.findOne({ username })

    //Improvement: Added return statements to ensure the function 
    //exits after sending a response, preventing attempts to send multiple responses.
    if (!userToLike) {
      return res.status(404).json({error: 'User Is Not A Member.'})
    }

    if (user.likedProfiles.includes(userToLike.username)) {
      return res.status(400).json({error: 'You already liked this user.'})
    }

    userToLike.likedBy.push({
      username: user.username,
      avatarUrl: user.avatarUrl,
      likedDate: Date.now()
    })

    user.likedProfiles.push(userToLike.username)

    // await user.save()
    // await userToLike.save()
    //above 'awaits' are slow, we use 'Promise.all' to load them in parallel.
    await Promise.all([user.save(), userToLike.save()])

    res.status(200).json({message: 'User has been liked'})
    
  } catch (error) {
    req.status(500).json({error: error.message})
  }
}