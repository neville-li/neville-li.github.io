const nodemailer = require("nodemailer");

const sendMail = async ({subject, sender, text}) => {

    const transporter = nodemailer.createTransport ({
        host: "outlook.com",
        auth: {
            user: "",
            pass: ""
        }
    });

    const mailOptions = {
        from: "",
        to: "",
        subject: `New Email From Portfolio: ${subject}`,
        html: `
            <h1>${subject}</h1>
            <p>${text}</p>
            <small>from ${sender || "a anonymous person"}</small>
        `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully: " + info.response);
}
module.exports = sendMail;

