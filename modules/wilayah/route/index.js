const WilayahController = require("../controller");
const express = require("express");

const router = new express.Router();
const wilayahController = new WilayahController();

router.get('/provinces', wilayahController.getProvinsi);
router.get('/cities', wilayahController.getKota);


module.exports = router;