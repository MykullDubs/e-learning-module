import { Resend } from 'resend';

// CORRECT: This looks for an environment variable named "RESEND_API_KEY".
const resend = new Resend(process.env.RESEND_API_KEY);
const instructorEmail = 'michaelwesleywilson@gmail.com';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    // Get the data sent from the public assessment page
    const { userEmail, assessment } = req.body;

    // --- 1. Send the results email to the USER who took the test ---
    await resend.emails.send({
      from: 'results@commonwealthlinguistics.org',
      to: userEmail,
      subject: `Your Results for: ${assessment.title}`,
      html: `
        <h1>Your Assessment Results</h1>
        <p>Thank you for trying the demo for the Learning Experience Forge!</p>
        <p>You scored <strong>${assessment.score}</strong> on the ${assessment.title}.</p>
        <p>${assessment.passed ? 'Congratulations, you passed! You have a real talent for this.' : 'Good effort! You have a strong foundation to build upon.'}</p>
        <p>Ready to unlock your full potential and master the future of instructional design? Enroll in the full course today!</p>
        <a href="https://commonwealthlingustics.org/index.html">Enroll Now</a>
      `
    });

    // --- 2. Send a notification email to YOU, the instructor ---
    await resend.emails.send({
      from: 'results@commonwealthlinguistics.org', // Using a consistent "from" address
      to: instructorEmail,
      subject: `New Public Assessment Submission: ${userEmail}`,
      html: `
        <h1>New Lead from Public Assessment</h1>
        <p>A potential student has completed the public demo for Module 1.</p>
        <p><strong>Email:</strong> ${userEmail}</p>
        <p><strong>Score:</strong> ${assessment.score}</p>
        <p><strong>Passed:</strong> ${assessment.passed ? 'Yes' : 'No'}</p>
      `
    });

    // Send a success response back to the assessment page
    res.status(200).json({ message: 'Emails sent successfully!' });

  } catch (error) {
    console.error(error);
    // If anything goes wrong, send an error response
    res.status(500).json({ error: 'Failed to send emails.' });
  }
}
