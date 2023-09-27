const nodemailer = require('nodemailer');
const sendMail = async (req, res) => {
    let lestAccount = await nodemailer.createTestAccount();
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'bert.mckenzie@ethereal.email',
            pass: 'yKdSWbJnu7fRb7D2CS'
        }
    });
    const info = await transporter.sendMail({
        from: '"nabeel hassan 👻" <nabeelflutter786@gmail.com>', // sender address
        to: "nabeelflutter786@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    });
    console.log("Message sent: %s", info.messageId);
    res.json(info);
}
module.exports = sendMail;