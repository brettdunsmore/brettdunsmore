export interface Experience {
  company: string;
  logo: string;
  period: string;
  description?: string;
  responsibilities: string[];
}
export interface LinkedInPost {
  title: string;
  snippet: string;
  date: string;
  imageUrl: string;
  link: string;
}
export interface Presentation {
  title: string;
  event: string;
  videoId: string;
  videoUrl: string;
}
export interface Contact {
  email: string;
  linkedin: string;
  mobile: string;
}
export interface Education {
  school: string;
  degree: string;
  period: string;
  logo?: string;
}
export interface ProfileData {
  name: string;
  title: string;
  summaryParagraphs: string[];
  avatarUrl: string;
  contact: Contact;
  experience: Experience[];
  education: Education[];
  skills: string[];
  linkedinPosts: LinkedInPost[];
  presentations: Presentation[];
}
export const profileData: ProfileData = {
  name: "Brett Dunsmore",
  title: "",
  summaryParagraphs: [
    "I help public sector organisations bridge the gap between business agility and risk management using Cloudflare’s connectivity cloud. My clients deploy to Region: Earth.",
    "Moving beyond traditional perimeter security, I empower teams to confidently adopt agentic workflows for the right reasons, seamlessly bridge hybrid environments with smarter traffic management, fight bot scraping, and deploy applications at the network edge to improve user experience. Crucially, I help clients secure their modern workforce by ensuring that whether an user is in the office, at home or a regional location, modern access methods are simple and Zero Trust principles keep corporate data safe while preventing data loss.",
    "Over the last 19 years, spanning leadership and technical roles at Dell Technologies, IBM, and the University of Queensland, I’ve learned that technology only succeeds when it serves the user. My north star is always delivering measurable business impact while keeping people and processes at the heart of every outcome."
  ],
  avatarUrl: "https://raw.githubusercontent.com/brettdunsmore/brettdunsmore/refs/heads/main/src/assets/brett.jpg",
  contact: {
    email: "me@brettdunsmore.com",
    linkedin: "https://www.linkedin.com/in/dunsmorebrett",
    mobile: "+61 429 209 460",
  },
  experience: [
    {
      company: "Cloudflare",
      logo: "https://www.clipartmax.com/png/middle/146-1469376_the-free-version-of-cloudflare-content-delivery-network-cloudflare-logo-png.png",
      period: "October 2025 - Present",
      description: "Public Sector, QLD/NT",
      responsibilities: [
        "Senior Named Account Executive, Australia"
      ]
    },
    {
      company: "Dell Technologies",
      logo: "https://brandlogos.net/wp-content/uploads/2022/08/dell_technologies-logo_brandlogos.net_kl1p4.png",
      period: "December 2017 - October 2025",
      description: "State and Federal Government, Utilities, Higher Education, and Large Enterprise",
      responsibilities: [
        "AI Solutions Strategy (NVIDIA & AMD) for Australia and New Zealand (2024-2025), APJ",
        "Principal Solutions Executive (2022-2024), Australia",
        "Data Centre Solutions Executive (2021-2022), Australia",
        "Senior Systems Engineer (2019-2021), Australia",
        "Systems Engineer / Solutions Consultant (2017-2019), Australia"
      ]
    },
    {
      company: "The University of Queensland",
      logo: "https://universitiesaustralia.edu.au/wp-content/uploads/2019/05/UQ-300x300.png",
      period: "February 2009 - December 2017, Australia",
      description: "Supporting Multidisciplinary Life Science Research (Institute for Molecular Bioscience)",
      responsibilities: [
        "Senior IT Manager (2012-2017), Australia",
        "Service Delivery Manager (2010-2012), Australia",
        "Desktop Support (2009-2010), Australia"
      ]
    },
    {
      company: "IBM",
      logo: "https://www.freepnglogos.com/uploads/ibm-logo-png/ibm-logo-tableau-qlikview-tableau-power-power-20.png",
      period: "June 2006 - February 2009",
      description: "L3/4 Technical Support, Quality Assurance and Customer Experience",
      responsibilities: [
        "Senior Technical Support (2008-2009), Australia",
        "Customer Relations Manager (2007-2008), Australia",
        "Technical Support Officer (2006-2007), Australia"
      ]
    }
  ],
  education: [
    "NVIDIA Certified Associate (NCA-AIDC)",
    "Microsoft Azure Fundamentals (AZ-900)",
    "Certificate III (ICA30299) - Information Technology",
    "Certificate II (UEE22007) - Restricted Electrician, Equipment Servicing",
    "Certificate II (BSA20197) - Business, Administration",
    "Certificate II - Stage Lighting and Sound Design",
    "Year 12 Graduate (Prefect)",
  ],
  skills: [
    "Cybersecurity",
    "Web Services",
    "Edge Computing",
    "Network",
    "AI",
    "AI - Inference",
    "AI - Training",
    "NVIDIA AI Enterprise",
    "Generative AI",
    "Digital Twin",
    "Vectorisation",
    "Robotics",
    "Quantisation",
    "Agentic AI",
    "Data Workflows and Pipelines",
    "Public Sector Procurement",
    "Public Sector Strategy",
    "Defence Technologies",
    "Technical Enablement",
    "Leadership",
    "Sales GTM",
    "Omnichannel GTM",
    "Sales Strategy",
    "Sales Forecasting",
    "Prople Management",
    "Data Centre Infrastructure",
    "Data Centre",
    "Power Distribution",
    "Cooling Technologies",
    "Fabrics",
    "Lifecycle Management",
    "Digital Transformation",
    "Workforce Transformation",
    "High-Performance Computing",
    "Hierarchical File Systems",
    "Long-term data archive",
  ],
  linkedinPosts: [],
  presentations: [
    {
      title: "The Perfect Research Cloud, by Researchers",
      event: "THETA Conference - 2025 - Keynote Speaker",
      videoId: "4Vt7Q0vz5Y0",
      videoUrl: "https://youtu.be/4Vt7Q0vz5Y0"
    },
    {
      title: "Unlock the Power of Data, with AI",
      event: "Dell Technologies, NVIDIA, AMD - 2024 - Panelist",
      videoId: "S5ZZAT2GqQQ",
      videoUrl: "https://youtu.be/S5ZZAT2GqQQ"
    },
    {
      title: "6D.ai - Standouts Panel",
      event: "Emerging Tech Showcase - 2024 - Panelist",
      videoId: "SmZTZ2SzWLc",
      videoUrl: "https://youtu.be/SmZTZ2SzWLc"
    }
  ]
};
