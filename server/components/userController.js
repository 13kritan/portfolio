// userController.js
const nodemailer = require('nodemailer');

module.exports.sendEmail = async (req, res) => {
    const { firstname, lastname, email, subject, message } = req.body
    console.log(firstname, lastname + "log")
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    try {
        await transporter.sendMail({
            from: `"${firstname} ${lastname}" <${email}>`,
            to: process.env.EMAIL_USER, // your email
            subject: `Portfolio Contact Form: ${subject}`,
            html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333;">
            <h2 style="color: #C30927;">New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${firstname} ${lastname}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p style="background: #f3f3f3; padding: 10px; border-radius: 5px;">${message}</p>
            <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
            <p style="font-size: 12px; color: #888;">This message was sent from your portfolio contact form.</p>
          </div>
        `,
        });

        res.status(200).json({ message: 'Email sent successfully!' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to send email' });
    }
};
