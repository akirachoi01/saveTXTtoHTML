require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the HTML contact form
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/contact.html');
});

// Handle form submission
app.post('/send-email', (req, res) => {
  const { name, email, subject, message } = req.body;

  // Nodemailer configuration
  const transporter = nodemailer.createTransport({
    host: 'mail.shantagoldsph.org.',
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  // Email options
  const mailOptions = {
    from: `"${name}" <${email}>`, // Sender address
    to: process.env.SMTP_USER,     // Your email address
    subject: subject,              // Subject line
    text: message,                 // Plain text body
    html: `<p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Message:</strong></p><p>${message}</p>` // HTML body
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(`Error: ${error.message}`);
      return res.status(500).send('Error sending email');
    }
    console.log(`Email sent: ${info.response}`);
    res.status(200).send('Message sent successfully!');
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
