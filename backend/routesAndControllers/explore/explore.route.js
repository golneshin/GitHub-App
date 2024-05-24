import express from 'express'
import { exploreController } from './explore.controller.js'
import { ensureAuthenticated } from '../../middleware/ensureAuthenticated.js'


// Define router and routes
const router = express.Router() 
router.get('/repos/:language', ensureAuthenticated, exploreController)

export default router