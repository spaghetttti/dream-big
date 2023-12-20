import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.google.com", // SMTP host for your custom domain email
  port: 465, // Port for your SMTP service (usually 465 for secure SSL)
  secure: true, // Enable SSL
  auth: {
    user: process.env.REDIRECT_EMAIL_ADDRESS, // Your custom domain email address
    pass: process.env.REDIRECT_EMAIL_PASSWORD, // Your custom domain email password or app-specific password
  },
});
