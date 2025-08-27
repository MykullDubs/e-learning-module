// This code is designed to run in a serverless environment (like Vercel or Netlify), NOT in the browser.
// It handles the secure sending of emails after the assessment is submitted.

// Import the Resend library, which is used to send emails.
import { Resend } from 'resend';

// Initialize Resend with your API key.
// CRITICAL: This securely accesses the API key from your hosting platform's environment variables.
// It prevents your secret key from being exposed in your public GitHub repository.
const resend = new Resend(process.env.re_VsbFGbqb_HhsaaPMbwNvmS7i6J14z5UG2);

// This is the main serverless function. It's often called a "handler".
// It takes an incoming request (req) and sends back a response (res).
export default async function handler(req, res) {
  // We only want to allow POST requests, as the frontend will be sending data.
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    // Extract the data sent from the frontend assessment page.
    // This data is in the body of the request (req.body).
    const { student, instructor, assessment } = req.body;

    // --- 1. Send the results email to the INSTRUCTOR ---
    await resend.emails.send({
      from: 'onboarding@resend.dev', // This is a default from Resend, you can configure a custom domain.
      to: 'michaelwesleywilson@gmail.com', // The instructor's email address.
      subject: `Assessment Results for ${student.name}`,
      html: `
        <h1>Module 1 Assessment Results</h1>
        <p><strong>Student:</strong> ${student.name} (${student.email})</p>
        <p><strong>Assessment:</strong> ${assessment.title}</p>
        <p><strong>Score:</strong> ${assessment.score}</p>
        <p><strong>Passed:</strong> ${assessment.passed ? 'Yes' : 'No'}</p>
      `
    });

    // --- 2. Send a confirmation email to the STUDENT ---
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: student.email, // The student's email, captured from the form.
      subject: `Your Results for: ${assessment.title}`,
      html: `
        <h1>Your Assessment Results</h1>
        <p>Hi ${student.name},</p>
        <p>You scored <strong>${assessment.score}</strong> on the ${assessment.title}.</p>
        <p>${assessment.passed ? 'Congratulations, you passed!' : 'Please review the module content and try again.'}</p>
      `
    });

    // If both emails are sent successfully, send a success response back to the frontend.
    res.status(200).json({ message: 'Emails sent successfully!' });

  } catch (error) {
    // If anything goes wrong during the process, log the error for debugging...
    console.error(error);
    // ...and send an error response back to the frontend.
    res.status(500).json({ error: 'Failed to send emails.' });
  }
}

