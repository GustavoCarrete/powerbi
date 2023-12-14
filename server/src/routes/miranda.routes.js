const { Router } = require('express');
const router = Router();
const {controllers} =require("../controllers/controllers")


router.get("/")
router.post("/add_refresh_token",controllers.getters.add_refresh_token)


module.exports = router;