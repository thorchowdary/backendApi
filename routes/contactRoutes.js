const express = require('express');
const {getContact,getContat,createContact,updateContact,deleteContact} = require('../controllers/contactController');
const router = express.Router();

router.route("/").get(getContact);

router.route("/").post(createContact);

router.route("/:id").put(updateContact);

router.route("/:id").get(getContat);

router.route("/:id").delete(deleteContact);
 
module.exports = router;