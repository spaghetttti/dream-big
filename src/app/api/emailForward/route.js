import { transporter } from "./transporter";

export async function POST(request) {
  try {
    const { subject, email, message } = await request.json();
    
    // Create a nodemailer transporter with your SMTP configuration

    // Send email
    const mailOptions = {
      from: process.env.REDIRECT_EMAIL_ADDRESS, // Sender email
      to: process.env.REDIRECT_EMAIL_ADDRESS, // Recipient's email address
      subject: `Subject of your email: ${subject}`,
      text: `Email: ${email}\nMessage: ${message}`,
    };

    const r = await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) { 
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ message: "Failed to send email." }), {
      headers: { "Content-Type": "application/json" },
      status: 500,
    });
  }
}
