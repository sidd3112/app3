let express = require('express');
let router = express.Router();

let transporter = require("../config/mailer");


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

router.post('/sendemail', async(req, res) => {
    console.log(req.body);
    let msg = {
        from: 'siddharthchandra30@gmail.com', // sender address
        to: req.body.uemail, // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<h1>dear client</h1><br><br> <p>we will contact you soon</p><br><br>Thanks and regards<br><br><b>Siddharth chandra</b>", // html body
    };
    let info = await transporter.sendMail(msg, (error, data) => {
        if (error) {
            console.log(error);
        } else {
            console.log(data);
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