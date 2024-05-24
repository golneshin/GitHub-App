import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import passport from "passport"
import session from "express-session"
import path from 'path'

import './passport/github.auth.js'
import userRouter from './routesAndControllers/users/user.route.js'
import exploreRouter from './routesAndControllers/explore/explore.route.js'
import userAuth from './routesAndControllers/auth/auth.route.js'
import { connectMongoDB } from "./db/connectMongoDB.js"

dotenv.config()
const app = express()
app.use(cors())
const __dirname = path.resolve()

console.log('dirname:', __dirname)

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

app.use(express.static(path.join(__dirname, "/frontend/dist")))

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"))
})
// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`)
  connectMongoDB()
})