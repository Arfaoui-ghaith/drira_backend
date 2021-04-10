const express = require('express');
const router = express.Router();

const partnerController = require('./../controllers/partnerController');
const authController = require('./../controllers/authController');

router.route('/')
    .get(partnerController.getAllPartners)
    .post(partnerController.uploadPartnerPhoto, partnerController.resizePartnerPhoto ,partnerController.createPartner);

router.route('/:id')
    .put(partnerController.uploadPartnerPhoto, partnerController.resizePartnerPhoto ,partnerController.updatePartner)
    .delete(partnerController.deletePartner);

module.exports = router;