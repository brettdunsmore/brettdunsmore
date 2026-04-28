import cloudflareLogo from '@/assets/logos/cloudflare.svg';
import dellLogo from '@/assets/logos/dell.svg';
import uqLogo from '@/assets/logos/uq.svg';
import ibmLogo from '@/assets/logos/ibm.svg';

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
    "A career spanning IBM, The University of Queensland, Dell Technologies, and now Cloudflare has taught me one thing: technology only matters when it actually helps people.",
    "At Cloudflare, I work with Australian government agencies to modernise their infrastructure and workflows without starting from scratch — securing AI transformation across both human and agentic workflows, reviewing data governance and compliance, managing traffic across hybrid environments, handling real threats like bots and volumetric attacks, and improving application performance at the edge.",
    "Digital transformation starts with the workforce. Zero Trust isn't just a concept — it's making sure the right person has the right access at the right time, tied to identity and sensible policy, so corporate data stays protected wherever people work best.",
    "AI, Cloud, Zero Trust. They're just tools.",
    "Outcomes are what count."
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
      logo: cloudflareLogo,
      period: "October 2025 - Present, Australia",
      description: "Public Sector, QLD/NT",
      responsibilities: [
        "Senior Named Account Executive, Australia"
      ]
    },
    {
      company: "Dell Technologies",
      logo: dellLogo,
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
      logo: uqLogo,
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
      logo: ibmLogo,
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
    "Zero Trust",
    "Edge Computing",
    "Network",
    "Web Services",
    "AI",
    "AI - Inference",
    "AI - Training",
    "Agentic AI",
    "Generative AI",
    "NVIDIA AI Enterprise",
    "Digital Twin",
    "Vectorisation",
    "Quantisation",
    "Robotics",
    "Data Workflows and Pipelines",
    "Data Governance",
    "Public Sector Procurement",
    "Public Sector Strategy",
    "Defence Technologies",
    "Technical Enablement",
    "Leadership",
    "People Management",
    "Sales GTM",
    "Omnichannel GTM",
    "Sales Strategy",
    "Sales Forecasting",
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
    "Long-term Data Archive",
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
