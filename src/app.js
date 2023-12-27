const express = require("express");
const hbs = require("hbs");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require('./routes/main');
const Detail= require("./models/details");
const Slider = require("./models/sliders");
const Service = require("./models/services");

app.use(bodyParser.urlencoded({extended:true}))

app.use('/static',express.static("public"))
app.use('',routes)
//(template engine)
app.set('view engine', 'hbs')
app.set("views","views")
hbs.registerPartials("views/partials")

//db connection
//abc
mongoose.connect("mongodb://localhost:27017/project1").then(()=>{
    console.log("connection successful");

    // Slider.create(

    //     [
    
    //         {
    //             title:'Learn java in very easy manner',
    //             subTitle:'Java is one of the most popular programming language',
    //             imageUrl:"/static/images/slider1.jpg"
    //         },
    //         {
    //             title:'Learn java in very easy manner',
    //             subTitle:'Java is one of the most popular programming language',
    //             imageUrl:"/static/images/slider2.jpg"
    //         },
    //         {
    //             title:'Learn java in very easy manner',
    //             subTitle:'Java is one of the most popular programming language',
    //             imageUrl:"/static/images/slider3.jpg"
    //         }
    //     ]
    // )

    // Detail.create({
    //     brandName:"Rtech solutions",
    //     brandIconUrl:"https://cc-prod.scene7.com/is/image/CCProdAuthor/mascot-logo-design_P1_900x420?$pjpeg$&jpegSize=200&wid=900",
    //     links:[
    //         {
    //             label:"Home",
    //             url:"/"
    //         },
    //         {
    //             label:"Services",
    //             url:"/Services"
    //         },
    //         {
    //             label:"Gallery",
    //             url:"/gallery"
    //         },
    //         {
    //             label:"About",
    //             url:"/about"
    //         },
    //         {
    //             label:"Contact Us",
    //             url:"/contact-us"
    //         }
    //     ]
    // })
    // Service.create([
    //     {
    //         icon:'fa fa-address-card',
    //         title:'Provide best courses',
    //         description:'we provide best courses that helps us student in learning and in placement.',
    //         linkText:'Check',
    //         link:'https://www.learncodewithdurgesh.com'
    //     },
    //     {
    //         icon:'fa fa-id-card',
    //         title:'Provide best courses',
    //         description:'we provide best courses that helps us student in learning and in placement.',
    //         linkText:'Check',
    //         link:'https://www.learncodewithdurgesh.com'
    //     },
    //     {
    //         icon:'fa fa-podcast',
    //         title:'Provide best courses',
    //         description:'we provide best courses that helps us student in learning and in placement.',
    //         linkText:'Check',
    //         link:'https://www.learncodewithdurgesh.com'
    //     }

    // ])
}).catch((error)=>{
    console.log(error);
})


app.listen(process.env.PORT | 5556,()=>{
    console.log("server started")
});
