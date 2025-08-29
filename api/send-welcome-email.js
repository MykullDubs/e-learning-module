// This is a new serverless function specifically for sending a welcome email.
// It should be saved at /api/send-welcome-email.js

import { Resend } from 'resend';

// Initialize Resend with your secure environment variable
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    // Get the new user's name and email from the request body
    const { name, email } = req.body;
    
    // The HTML content for the email
    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
          <title>Welcome to the Learning Experience Forge!</title>
          <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; margin: 0; padding: 0; background-color: #f8fafc; color: #334155; }
              .container { max-width: 600px; margin: 40px auto; background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; }
              .header { background-color: #4338ca; color: #ffffff; padding: 40px; text-align: center; }
              .content { padding: 40px; line-height: 1.6; }
              .button { display: inline-block; background-color: #4f46e5; color: #ffffff; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; margin-top: 20px; }
              .footer { padding: 20px; text-align: center; font-size: 12px; color: #64748b; }
          </style>
      </head>
      <body>
          <div class="container">
              <div class="header">
                  <h1 style="margin: 0; font-size: 28px;">Welcome to the Learning Experience Forge!</h1>
              </div>
              <div class="content">
                  <h2 style="font-size: 22px; color: #1e293b;">Hi ${name},</h2>
                  <p>Congratulations, and welcome! You've just taken a monumental step toward transforming your career and mastering the future of instructional design. We are absolutely thrilled to have you join us.</p>
                  <p>You're not just enrolling in a course; you're entering a new era of creation. The days of being limited by clunky, expensive authoring tools are over. You are about to learn how to leverage the most powerful technology of our time to build engaging, effective, and truly innovative learning experiences at the speed of thought.</p>
                  <p>This journey will empower you to move beyond being a content creator to becoming a true <strong>learning architect</strong>. You will design, prototype, and deploy with an efficiency that will set you apart in your field. This is the skill that will define the next generation of leaders in education and corporate training.</p>
                  <p>Your adventure begins now. Log in to your dashboard to get started.</p>
                  <div style="text-align: center;">
                      <a href="https://your-vercel-project-url/login.html" class="button">Go to My Dashboard</a>
                  </div>
                  <p style="margin-top: 30px;">We can't wait to see what you create.</p>
                  <p>Warmly,<br>The Team at the Learning Experience Forge</p>
              </div>
              <div class="footer">
                  <p>You received this email because you signed up for the Learning Experience Forge.</p>
              </div>
          </div>
      </body>
      </html>
    `;

    // Send the email using Resend
    await resend.emails.send({
      from: 'welcome@your-verified-domain.com', // IMPORTANT: Use an address from your verified domain
      to: email,
      subject: `Welcome to the Forge, ${name}! Your Journey Starts Now.`,
      html: emailHtml
    });

    res.status(200).json({ message: 'Welcome email sent successfully!' });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to send welcome email.' });
  }
}
