// Shared utility functions for Vercel API routes
function getChatReply(message) {
  const lowerMsg = message.toLowerCase();
  
  if (lowerMsg.includes('hello') || lowerMsg.includes('hi') || lowerMsg.includes('hey')) {
    return "Hello! Welcome to China Medical Concierge. I'm Warren, your virtual assistant. How can I help you with medical care in China today?";
  } else if (lowerMsg.includes('cost') || lowerMsg.includes('price') || lowerMsg.includes('how much') || lowerMsg.includes('fee')) {
    return "Costs vary by procedure. For example: Full body check-up $500-1.5k, Dental implants $900-1.5k, Cardiac surgery $20-30k. These are typically 60-80% less than US/UK prices. Would you like a free personalized quote?";
  } else if (lowerMsg.includes('hospital') || lowerMsg.includes('doctor') || lowerMsg.includes('clinic')) {
    return "We partner with 28+ top hospitals in China, including Grade 3A public hospitals and JCI-accredited private facilities. We match you with the right specialist for your condition. What type of treatment are you looking for?";
  } else if (lowerMsg.includes('visa') || lowerMsg.includes('travel') || lowerMsg.includes('flight') || lowerMsg.includes('hotel')) {
    return "We provide full travel support: medical visa invitation letters, flight guidance, hotel booking near the hospital, and airport pickup. Your personal care manager handles everything.";
  } else if (lowerMsg.includes('translate') || lowerMsg.includes('language') || lowerMsg.includes('english') || lowerMsg.includes('interpret')) {
    return "Yes, we provide certified medical interpreters who accompany you to every appointment. 100% English support guaranteed. Your care manager is bilingual and available 24/7.";
  } else if (lowerMsg.includes('contact') || lowerMsg.includes('email') || lowerMsg.includes('phone') || lowerMsg.includes('whatsapp') || lowerMsg.includes('reach')) {
    return "You can reach us at: Email: shaohua8883@gmail.com | Contact: Warren. We reply within 24 hours.";
  } else if (lowerMsg.includes('dental') || lowerMsg.includes('tooth') || lowerMsg.includes('implant')) {
    return "Dental implants in China cost $900-1,500 (vs $4-6k in the US). We partner with top dental clinics using premium brands. Full treatment can be completed in 1 week. Would you like a free assessment?";
  } else if (lowerMsg.includes('cancer') || lowerMsg.includes('oncology') || lowerMsg.includes('tumor')) {
    return "China has world-class oncology centers offering advanced treatments including CAR-T therapy, proton therapy, and targeted immunotherapy at 30-70% lower costs than Western countries. We can arrange second opinions and full treatment plans.";
  } else if (lowerMsg.includes('checkup') || lowerMsg.includes('check-up') || lowerMsg.includes('physical') || lowerMsg.includes('screening')) {
    return "Executive full-body check-ups in China are comprehensive, same-day, and cost $500-1,500 (vs $3-8k in the US). Includes advanced imaging, blood panels, and specialist consultations.";
  } else if (lowerMsg.includes('ivf') || lowerMsg.includes('fertility') || lowerMsg.includes('baby')) {
    return "IVF treatment in China costs $4-6k per cycle (vs $15-25k in the US). Success rates are comparable to top Western clinics. We partner with leading reproductive medicine centers.";
  } else if (lowerMsg.includes('cardiac') || lowerMsg.includes('heart') || lowerMsg.includes('bypass') || lowerMsg.includes('stent')) {
    return "Cardiac surgery in China costs $20-30k (vs $75-200k in the US). Our partner hospitals perform thousands of bypasses, valve replacements, and stent procedures annually with excellent outcomes.";
  } else if (lowerMsg.includes('process') || lowerMsg.includes('how it works') || lowerMsg.includes('step') || lowerMsg.includes('start')) {
    return "Our process is simple: 1) Contact us with your medical records → 2) We assess and match you with a specialist → 3) We arrange travel & visa → 4) You arrive, we meet you at the airport → 5) Bilingual care manager accompanies every hospital visit → 6) We handle follow-up and records after you return home.";
  } else if (lowerMsg.includes('insurance') || lowerMsg.includes('coverage') || lowerMsg.includes('claim')) {
    return "We provide fully translated, itemized medical bills for your insurance claims. We also partner with international insurance providers for direct billing at some hospitals.";
  } else if (lowerMsg.includes('time') || lowerMsg.includes('wait') || lowerMsg.includes('schedule') || lowerMsg.includes('appointment')) {
    return "Appointments can typically be scheduled within 1-2 weeks. Emergency cases can be arranged faster. Unlike Western systems with months-long waitlists, China's top hospitals offer much faster access.";
  } else if (lowerMsg.includes('thank') || lowerMsg.includes('thanks')) {
    return "You're welcome! I'm here if you have any other questions. Feel free to submit your case for a free assessment, or contact Warren directly at shaohua8883@gmail.com";
  } else if (lowerMsg.includes('bye') || lowerMsg.includes('goodbye')) {
    return "Goodbye! Take care, and feel free to reach out anytime. We're here 24/7. Have a great day!";
  }
  
  return "Thank you for your message. To give you the most accurate information, could you tell me more about your condition or what type of treatment you're looking for? Or you can submit a free case review and Warren will personally assess your situation within 24 hours.";
}

module.exports = { getChatReply };
