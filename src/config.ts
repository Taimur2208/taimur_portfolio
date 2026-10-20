// ============================================================
//  TAIMUR KHAN — PORTFOLIO CONFIG
//  Change values here and the whole site updates automatically.
// ============================================================

export const PROFILE = {
  name: "Taimur Khan",
  firstName: "Taimur",
  roles: ["Python Developer", "Cyber Security Enthusiast", "ICIP Certified", "Problem Solver • 128 IQ"],
  tagline: "Python Developer & Cyber Security Enthusiast",
  email: "taimurkhancode22@gmail.com",
  location: "Pakistan • Available Worldwide (Remote)",
  responseTime: "Usually replies within a few hours",
  availability: "Available for Help & Projects",

  // WhatsApp number in international format (no +, spaces or dashes)
  // +92 308 9342404  →  "923089342404"
  whatsappNumber: "923089342404",

  whatsappMessage:
    "Hi Taimur Khan, I saw your portfolio and now I need your help.",

  emailSubject: "Help Needed — I Saw Your Portfolio",
  emailBody: `Hi Taimur Khan,

I saw your portfolio and now I need your help.

My requirement:
`,
};

export const LINKS = {
  get whatsapp() {
    return `https://wa.me/${PROFILE.whatsappNumber}?text=${encodeURIComponent(
      PROFILE.whatsappMessage
    )}`;
  },
  get email() {
    return `mailto:${PROFILE.email}?subject=${encodeURIComponent(
      PROFILE.emailSubject
    )}&body=${encodeURIComponent(PROFILE.emailBody)}`;
  },
};

export const CERTIFICATES = {
  icip: {
    id: "NyfUMDlGzA",
    title: "Introduction to Critical Infrastructure Protection",
    short: "Pre-Security • ICIP",
    issuer: "OPSWAT Academy",
    issued: "10/11/2026",
    expires: "10/11/2027",
    cpe: "0.50 CPE Credits",
  },
  iq: {
    id: "746 068",
    title: "General Intelligence Quotient Certificate",
    short: "128 IQ • myIQ",
    issuer: "myIQ",
    score: "128",
    date: "October 1, 2026",
  },
};
