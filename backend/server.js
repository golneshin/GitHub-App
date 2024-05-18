import express from "express"
import dotenv from "dotenv"
import cors from "cors"

import userRouter from './routesAndControllers/users/user.route.js'
import exploreRouter from './routesAndControllers/explore/explore.route.js'

dotenv.config()
const app = express()
app.use(cors())

// Root route
app.get('/', (req, res) => {
  res.send('server is ready')
})

// Use the router
app.use('/api/users', userRouter)
app.use('/api/explore', exploreRouter)

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});