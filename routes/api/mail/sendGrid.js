const sgMail = require('@sendgrid/mail');

const sendEmail = async (req, res) =>{
    try {
        console.log("REQ.BODY", req.body);
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        await sgMail.send({
            to: process.env.TO_EMAIL_ADDRESS, // Your email where you'll receive emails
            from: process.env.FROM_EMAIL_ADDRESS, // your website email address here
            subject: `${req.body.subject}`,
            html: `<div>Sent from ${req.body.fullName} (${req.body.email}) through BHKLab Website:<div>${req.body.message}</div></div>`,
        });
    } catch (error) {
        console.log(error);
        return res.status(error.statusCode || 500).json({ error: error.message });
    }
    return res.status(200).json({ error: "" });
}

module.exports ={
    sendEmail
}
