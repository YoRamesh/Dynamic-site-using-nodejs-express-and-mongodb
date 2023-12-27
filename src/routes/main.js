const express = require('express');
const Detail = require("../models/details")
const Slider = require("../models/sliders");
const Service = require("../models/services");
const Contact = require("../models/contact");
const routes = express.Router()

routes.get("/",async (req,res)=>{
    const details = await Detail.findOne({"_id":"65847af3af49af540d321b7f"})
    const slides = await Slider.find()
    const service = await Service.find()
    //console.log(slides)

    res.render("index",{
        details:details,
        slides:slides,
        service:service
    });
})

routes.post("/process-contact-form",async (req,res)=>{
    console.log("form is submitted");
   // console.log(req.body)
    try {
        const data = await Contact.create(req.body)
        console.log(data)
        res.redirect('/')
    } catch (error) {
        console.log(error)
        res.redirect('/')
    }
})

module.exports= routes