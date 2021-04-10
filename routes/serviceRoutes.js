const express = require('express');
const router = express.Router();

const serviceController = require('./../controllers/serviceController');
const authController = require('./../controllers/authController');

router.route('/')
    .get(serviceController.getAllServices)
    .post(serviceController.createService);

router.route('/:id')
    .put(serviceController.updateService)
    .delete(serviceController.deleteService);

module.exports = router;