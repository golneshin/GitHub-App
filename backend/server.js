import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import passport from "passport"
import session from "express-session"

import './passport/github.auth.js'
import userRouter from './routesAndControllers/users/user.route.js'
import exploreRouter from './routesAndControllers/explore/explore.route.js'
import userAuth from './routesAndControllers/auth/auth.route.js'
import { connectMongoDB } from "./db/connectMongoDB.js"

dotenv.config()
const app = express()
app.use(cors())

// Root route
app.get('/', (req, res) => {
  res.send('server is ready')
})

app.use(session({ 
  secret: 'keyboard cat', 
  resave: false, 
  saveUninitialized: false 
}));
app.use(passport.initialize());
app.use(passport.session());
// Use the router
app.use('/api/auth', userAuth)
app.use('/api/users', userRouter)
app.use('/api/explore', exploreRouter)

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`)
  connectMongoDB()
})