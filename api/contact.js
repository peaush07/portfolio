// Vercel Serverless Function: Contact Form Handler
export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    return res.status(200).json({
      status: 'online',
      endpoint: '/api/contact',
      methods: ['POST'],
      description: 'Contact submission endpoint for Peaush Paul Portfolio'
    });
  }

  if (req.method === 'POST') {
    try {
      const { name, email, subject, message } = req.body || {};

      if (!name || !email || !message) {
        return res.status(400).json({
          error: 'Validation Error',
          message: 'Please provide name, email, and message fields.'
        });
      }

      // Format clean response payload
      const timestamp = new Date().toISOString();
      console.log(`[API Contact] Message received from ${name} (${email}) at ${timestamp}`);

      return res.status(200).json({
        success: true,
        message: 'Thank you! Your message has been received successfully.',
        data: {
          name,
          email,
          subject: subject || 'Portfolio Contact',
          receivedAt: timestamp
        }
      });
    } catch (err) {
      console.error('[API Contact Error]', err);
      return res.status(500).json({
        error: 'Internal Server Error',
        message: 'Failed to process contact message.'
      });
    }
  }

  return res.status(405).json({ error: 'Method Not Allowed' });
}
