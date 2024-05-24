import express from 'express'
import { 
  getLikeController, 
  likeProfileController, 
  userController 
} from './user.controller.js'
import { ensureAuthenticated } from '../../middleware/ensureAuthenticated.js'

// Define router and routes
const router = express.Router() 

router.get('/:username', userController)
// router.get('/likes', ensureAuthenticated, getLikeController)
router.post('/like/:username', ensureAuthenticated, likeProfileController)


export default router