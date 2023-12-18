import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "emailsubmit.dreambtransporting.com", // SMTP host for your custom domain email
  port: 587, // Port for your SMTP service (usually 465 for secure SSL)
  secure: true, // Enable SSL
  auth: {
    user: process.env.HR_EMAIL_ADDRESS, // Your custom domain email address
    pass: process.env.HR_EMAIL_PASSWORD, // Your custom domain email password or app-specific password
  },
});
