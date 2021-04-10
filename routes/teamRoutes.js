const express = require('express');
const router = express.Router();

const teamController = require('./../controllers/teamController');
const authController = require('./../controllers/authController');

router.route('/')
    .get(teamController.getAllTeam)
    .post(teamController.uploadMemberPhoto, teamController.resizeMemberPhoto ,teamController.createMember);

router.route('/:id')
    .put(teamController.uploadMemberPhoto, teamController.resizeMemberPhoto ,teamController.updateMember)
    .delete(teamController.deleteMember);

module.exports = router;