const express = require('express');
const router = express.Router();

const featureController = require('./../controllers/featureController');
const authController = require('./../controllers/authController');

router.route('/')
    .get(featureController.getAllFeatures)
    .post(featureController.createFeature);

router.route('/:id')
    .put(featureController.updateFeature)
    .delete(featureController.deleteFeature);

module.exports = router;