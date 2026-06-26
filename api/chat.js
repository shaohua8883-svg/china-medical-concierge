const { getChatReply } = require('./_utils');

const chatLogs = [];

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
  if (req.method !== 'POST') {
    res.status(405).json({ success: false, message: 'Method not allowed' });
    return;
  }
  
  const { message, sessionId } = req.body;
  
  if (!message) {
    res.status(400).json({ success: false, message: 'Message is required.' });
    return;
  }
  
  const reply = getChatReply(message);
  
  chatLogs.push({
    sessionId: sessionId || 'anonymous',
    message,
    reply,
    timestamp: new Date().toISOString()
  });
  
  res.status(200).json({ success: true, reply });
};
