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
    "A career spanning Dell Technologies, IBM, The University of Queensland, and now Cloudflare has taught me one thing. Technology only works when it actually helps people.",
    "At Cloudflare, I work with Government agencies to modernise their infrastructure and workflows without starting from scratch. That means securing AI transformation at every level, whether it's human workflows where people use AI tools or agentic workflows where systems act independently. It also means sorting out data governance, compliance, managing traffic across hybrid environments, dealing with real threats like bot attacks, and improving application performance at the network edge.",
    "Digital transformation starts with the workforce and zero trust isn't just a concept. It's about making sure the right person has the right access, at the right time, and when you tie access to identity (with sensible policies), you protect corporate data wherever people work best.",
    "AI, Cloud, Zero Trust. They're just tools. ",
    "The outcome matters more than just the technology, and that's what I focus on."
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
      period: "October 2025 - Present, Australia",
      description: "Public Sector, QLD/NT",
      responsibilities: [
        "Senior Named Account Executive, Australia"
      ]
    },
    {
      company: "Dell Technologies",
      logo: "https://brandlogos.net/wp-content/uploads/2022/08/dell_technologies-logo_brandlogos.net_kl1p4.png",
      period: "December 2017 - October 2025, Australia",
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
      period: "June 2006 - February 2009, Australia",
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
