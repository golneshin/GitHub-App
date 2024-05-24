import express from "express"
import passport from "passport"
import { ensureAuthenticated } from "../../middleware/ensureAuthenticated.js"
import { getLikeController } from "../users/user.controller.js"

const router = express.Router()

// =====SignUp or Login========================================================
//from app(login/signup page) to Github authorize page
router.get(
  "/github", 
  passport.authenticate(
    "github",//which account: github
    { scope: ["user:email"] }//what is the key: email
  )
)

// from Github authorize page to app{success: homepage, failure: login Page}
router.get(
	"/github/callback",
	passport.authenticate(
    "github", 
    //failure
    { failureRedirect: process.env.CLIENT_BASE_URL + "/login" }
  ),
	function (req, res) {
    //success
		res.redirect(process.env.CLIENT_BASE_URL)
	}
)

//=====Check Athentication======================================================
router.get("/check", (req, res) => {
	if (req.isAuthenticated()) {
		res.send({ user: req.user })
	} else {
		res.send({ user: null })
	}
})

//=====LogOut===================================================================
router.get("/logout", (req, res) => {
	req.session.destroy((err) => {
		res.json({ message: "Logged out" })
	})
})

router.get('/check', ensureAuthenticated, getLikeController)

//=====Export==================================================================
export default router