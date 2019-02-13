const nodemailer = require("nodemailer");

const sendMail = async ({subject, sender, text, senderEmail}) => {

    const transporter = nodemailer.createTransport ({
        host: "outlook.com",
        auth: {
            user: process.env.USER,
            pass: process.env.PASS
        }
    });

    const mailOptions = {
        from: process.env.USER,
        to: `nevilleneville@hotmail.com, ${senderEmail}`,
        subject: `This is an auto-generated email by github.io/neville-li: ${subject}`,
        html: `
            <p>Hi, ${sender}</p>
            <p>This is a confirmation email that I have recieved your email, and I will get back to you as soon as possible</p>
            <small>This is an This is an auto-generated email by github.io/neville-li. NO REPLY.</small>
            <small>To get in touch with me, please email me at neville.s.li@hotmail.com</small>
            <hr>
            <h3>Subject: ${subject}</h3>
            <p>${text}</p>
            <small>from ${senderEmail}</small>
        `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully: " + info.response);
}
module.exports = sendMail;

