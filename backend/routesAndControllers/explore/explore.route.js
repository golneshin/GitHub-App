import express from 'express'
import { exploreController } from './explore.controller.js'


// Define router and routes
const router = express.Router() 
router.get('/repos/:language', exploreController)

export default router