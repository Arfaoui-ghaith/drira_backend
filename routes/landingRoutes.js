const express = require('express');
const router = express.Router();

const landingController = require('./../controllers/landingController');
const authController = require('./../controllers/authController');

router.route('/')
    .get(landingController.getAllLandings)
    .post(landingController.uploadLandingPhoto, landingController.resizeLandingPhoto ,landingController.createLanding);

router.route('/:id')
    .put(landingController.uploadLandingPhoto, landingController.resizeLandingPhoto, landingController.updateLanding)
    .delete(landingController.deleteLanding);

module.exports = router;