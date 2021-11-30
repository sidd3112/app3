let express = require('express');
let router = express.Router();
let ejs = require('ejs');

let transporter = require("../config/mailer");
const { request } = require('http');


router.use(express.json());
router.use(express.urlencoded({ extended: false }));



router.get('/', (req, res) => {
    res.status(200).render('../views/mainpages/index.ejs');
});
router.get('/index', (req, res) => {
    res.status(200).render('../views/mainpages/index.ejs');
});
router.get('/aboutus', (req, res) => {
    res.status(200).render('../views/mainpages/aboutus.ejs');
});

router.post('/sendemail', (req, res) => {
    console.log(req.body);
    ejs.renderFile('views/emailer/thankyou.ejs', { uname: req.body.uname }, async(error, data) => {
        if (error) {
            console.log(erorr);
        } else {
            console.log("success");
            let msg = {

                from: 'siddharthchandra30@gmail.com', // sender address
                to: req.body.uemail, // list of receivers
                subject: "Hello ✔", // Subject line
                text: "Hello world?", // plain text body
                html: data // html body
            };
            let info = await transporter.sendMail(msg, (error, data) => {
                if (error) {
                    console.log(error);
                } else {
                    console.log(data);
                }
            });
            console.log("end");
        }

    });



    res.status(200).redirect('/');
});





router.get('/contactus', (req, res) => {
    res.status(200).render('../views/mainpages/contactus.ejs');
});
router.get('/*', (req, res) => {
    res.status(200).render('../views/mainpages/error404.ejs');
});

module.exports = router;