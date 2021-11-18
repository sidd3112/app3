let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
    res.status(200).render('../views/mainpages/index.ejs');
});
router.get('/index', (req, res) => {
    res.status(200).render('../views/mainpages/index.ejs');
});
router.get('/aboutus', (req, res) => {
    res.status(200).render('../views/mainpages/aboutus.ejs');
});
router.get('/contactus', (req, res) => {
    res.status(200).render('../views/mainpages/contactus.ejs');
});
router.get('/*', (req, res) => {
    res.status(200).render('../views/mainpages/error404.ejs');
});

module.exports = router;