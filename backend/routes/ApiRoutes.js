const express = require("express");
const ServicesController = require("../controllers/ServicesControllers");

const router = express.Router();

router.get("/services", ServicesController.allServices);
router.post("/services", ServicesController.addService);

module.exports = router;
