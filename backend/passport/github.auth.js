import passport from "passport"
import dotenv from "dotenv"
import { Strategy as GitHubStrategy } from "passport-github2"
import User from '../models/users.model.js'

dotenv.config()

passport.serializeUser(function(user, done) {
  //stores the user in the session.
  done(null, user)
})

passport.deserializeUser(function(obj, done) {
  //retrieves the full user object from
  // the database using the user stored in the session.
  done(null, obj)
})

passport.use(new GitHubStrategy(
  {
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "/api/auth/github/callback"
  },
  async function(accessToken, refreshToken, profile, done) {
    try {
      const user = await User.findOne({ username: profile.username })
      if (!user) {
        // Signup: create a new user
        const newUser = new User({
          name: profile.displayName || profile.username,
          username: profile.username,
          profileUrl: profile.profileUrl,
          avatarUrl: profile._json.avatar_url,
          likedProfiles: [],
          likedBy: []
        })
        await newUser.save()
        console.log('signedup successfully')
        return done(null, newUser)
      } else {
        // Login: user exists
        console.log('logged successfully')
        return done(null, user)
      }
    } catch (err) {
      return done(err)
    }
  }
))