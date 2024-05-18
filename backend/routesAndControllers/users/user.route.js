import express from 'express'
import { userController } from './user.controller.js'


// Define router and routes
const router = express.Router() 
router.get('/:username', userController)

export default router