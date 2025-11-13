const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Nodemailer transporter configured using maptechnepal.com domain DNS
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com', // Updated from mail.spacemail.com
  port: 587,
  secure: false,
  auth: {
    user: 'maptech07@gmail.com',
    pass: 'bycflcsatrfhvvjo',
  },
  connectionTimeout: 300000,
  socketTimeout: 300000,
  tls: {
    rejectUnauthorized: false,
  },
});

// Validation function
const validateContactForm = (body) => {
  const errors = [];

  if (!body.fullName || body.fullName.trim().length < 2) {
    errors.push('Invalid or missing full name');
  }

  if (!body.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    errors.push('Invalid email address');
  }

  if (!body.message || body.message.trim().length < 5) {
    errors.push('Message is too short');
  }

  return errors;
};

// Contact form route
app.post('/api/contact', (req, res) => {
  console.log('Received contact form:', req.body);

  const validationErrors = validateContactForm(req.body);
  if (validationErrors.length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: validationErrors,
    });
  }

  const { fullName, email, phone, subject, message } = req.body;

  const mailOptions = {
    from: 'support@maptechnepal.com',
    replyTo: email,
    to: 'info@maptechnepal.com',
    subject: 'New Contact Form Submission',
    text: `
Contact Form Details:
Name: ${fullName}
Email: ${email}
Phone: ${phone || 'Not provided'}

Message:
${message}
        `,
    html: `
<html>
<body>
    <h2>Contact Form Submission</h2>
    <p><strong>Name:</strong> ${fullName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
    <h3>Subject:</h3>
    <p>${subject}</p>
    <h3>Message:</h3>
    <p>${message}</p>
</body>
</html>
        `,
  };

  transporter.verify((error, success) => {
    if (error) {
      console.error('SMTP Connection Verification Failed:', error);
      return res.status(500).json({
        success: false,
        message: 'SMTP Server Connection Failed',
        error: error.toString(),
      });
    }

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Email Send Error:', error);
        return res.status(500).json({
          success: false,
          message: 'Failed to send email',
          error: error.toString(),
        });
      }

      console.log('Email sent successfully:', info.response);
      res.status(200).json({
        success: true,
        message: 'Message sent successfully!',
        messageId: info.messageId,
      });
    });
  });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
    error: err.toString(),
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('Shutting down server...');
  process.exit(0);
});
app.post('/api/demo', (req, res) => {
  console.log('Received demo request:', req.body);
  const {
    name,
    email,
    phone,
    company,
    companyContact,
    companyAddress,
    product,
    subject,
    message,
  } = req.body;

  // Prepare email content
  const mailOptions = {
    from: 'support@maptechnepal.com',
    replyTo: email,
    to: 'info@maptechnepal.com',
    subject:
      subject && subject.trim() !== ''
        ? subject
        : `Demo Request for ${product}`,
    text: `
Demo Request Details:
Name: ${name}
Email: ${email}
Phone: ${phone}

Company: ${company || 'Not provided'}
Company Contact: ${companyContact || 'Not provided'}
Company Address: ${companyAddress || 'Not provided'}
Product: ${product}

Message:
${message}
    `,
    html: `
<html>
<body>
  <h2>Demo Request Submission</h2>
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Phone:</strong> ${phone}</p>
  <h3>Company Information</h3>
  <p><strong>Company:</strong> ${company || 'Not provided'}</p>
  <p><strong>Company Contact:</strong> ${companyContact || 'Not provided'}</p>
  <p><strong>Company Address:</strong> ${companyAddress || 'Not provided'}</p>
  <h3>Product</h3>
  <p>${product}</p>
  <h3>Subject</h3>
  <p>${subject || 'N/A'}</p>
  <h3>Message</h3>
  <p>${message}</p>
</body>
</html>
    `,
  };

  transporter.verify((error, success) => {
    if (error) {
      console.error('SMTP Connection Verification Failed:', error);
      return res.status(500).json({
        success: false,
        message: 'SMTP Server Connection Failed',
        error: error.toString(),
      });
    }

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Email Send Error:', error);
        return res.status(500).json({
          success: false,
          message: 'Failed to send email',
          error: error.toString(),
        });
      }

      console.log('Demo request email sent successfully:', info.response);
      res.status(200).json({
        success: true,
        message: 'Demo request submitted successfully!',
        messageId: info.messageId,
      });
    });
  });
});
