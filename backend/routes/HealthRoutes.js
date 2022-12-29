const express = require("express");
const HealthControllers = require("../controllers/HealthControllers");

const router = express.Router();

router.get("/", HealthControllers.healthCheck);

module.exports = router;
