const Contact = require("../models/contactModel")
const asyncHandler = require("express-async-handler");
const errorhandler = require("../middleware/errorhandler")

const getContact = asyncHandler(async(req,res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
})

//@updatecontact
const updateContact = asyncHandler(async(req,res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new:true
        } 

    ); 
    res.status(201).json(updatedContact);
})

//@createcontat
const createContact = asyncHandler(async(req,res) => {
    const {name, phone, email} = req.body;
    if(!name || !phone || !email){
        res.status(400);
        throw new Error("All fields are mandatory !");
    }
    const contact = await Contact.create({
        name,
        phone,
        email
    });
    console.log(req.body)
    res.status(200).json(contact);
})
//@delete contact
const deleteContact = asyncHandler(async(req,res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    await Contact.remove();
    res.status(200).json(contact);
})
//@getcontactbyId
const getContat = asyncHandler(async(req,res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact);
})
module.exports = {getContact, getContat, updateContact, createContact, deleteContact}