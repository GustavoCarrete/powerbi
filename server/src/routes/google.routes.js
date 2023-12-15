const { Router } = require('express');
const router = Router();


const {controllers} = require("../controllers/controllers")

router.post("/create_acces_token",controllers.creates.create_acces_token)



module.exports = router;