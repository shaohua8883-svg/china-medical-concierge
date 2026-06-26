const contacts = [];

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
  
  const { name, email, condition } = req.body;
  
  if (!name || !email || !condition) {
    res.status(400).json({ success: false, message: 'Name, email, and condition are required.' });
    return;
  }
  
  const contact = {
    id: Date.now(),
    name,
    email,
    phone: req.body.phone || '',
    condition,
    country: req.body.country || '',
    message: req.body.message || '',
    timestamp: new Date().toISOString()
  };
  
  contacts.push(contact);
  
  console.log('New contact:', contact);
  
  res.status(200).json({ 
    success: true, 
    message: 'Thank you! A care manager will contact you within 24 hours.' 
  });
};
