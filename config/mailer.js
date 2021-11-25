"use strict";
const nodemailer = require("nodemailer");
const config = require('./config.json');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: config.email_id, // generated ethereal user
        pass: config.password, // generated ethereal password
    },
});

module.exports = transporter;