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
  title: "Helping Build a Better Internet",
  summaryParagraphs: [
    "At Cloudflare, I help organisations protect their critical websites, APIs, and internal networks from cyber threats, securely connect users and devices to applications worldwide, and support application development teams in building scalable, high-performance applications enhanced by AI workers at the network edge.",
    "My background combines deep technical expertise with a focus on people, processes, and technology, honed in high-impact roles at Dell Technologies, IBM, and the University of Queensland's Institute for Molecular Bioscience. I have managed the complete data centre lifecycle including infrastructure, support, policy, and procurement.",
    "My experience spans sales, technical enablement, and keynote speaking, all focused on giving others agency to deliver outstanding business and research excellence."
  ],
  avatarUrl: "https://media.licdn.com/dms/image/v2/D4E03AQEVQ_myI5HDTw/profile-displayphoto-scale_400_400/B4EZpXtixKHcAg-/0/1762408148869?e=1772668800&v=beta&t=rc7zJAN-CSqCnOSY8V4b9GH0p3-pRKNacLgLJ8baALY",
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
      description: "Public Sector, Queensland and Northern Territory",
      responsibilities: [
        "Senior Named Account Executive"
      ]
    },
    {
      company: "Dell Technologies",
      logo: "https://brandlogos.net/wp-content/uploads/2022/08/dell_technologies-logo_brandlogos.net_kl1p4.png",
      period: "December 2017 - October 2025",
      description: "Defence, Federal Government, Higher Education, and Large Enterprise",
      responsibilities: [
        "AI Solutions Strategy for Australia and New Zealand (2024-2025)",
        "Principal Solutions Executive (2022-2024)",
        "Data Centre Solutions Executive (2021-2022)",
        "Senior Systems Engineer (2019-2021)",
        "Systems Engineer / Solutions Consultant (2017-2019)"
      ]
    },
    {
      company: "The University of Queensland (IMB)",
      logo: "https://universitiesaustralia.edu.au/wp-content/uploads/2019/05/UQ-300x300.png",
      period: "February 2009 - December 2017",
      description: "High-performance computing and data management, supporting Life Sciences research",
      responsibilities: [
        "Senior IT Manager (2012-2017)",
        "Service Delivery Manager (2010-2012)",
        "Desktop Support (2009-2010)"
      ]
    },
    {
      company: "IBM",
      logo: "https://www.freepnglogos.com/uploads/ibm-logo-png/ibm-logo-tableau-qlikview-tableau-power-power-20.png",
      period: "June 2006 - February 2009",
      description: "L3/4 Technical Support, Quality Assurance and Customer Experience",
      responsibilities: [
        "Senior Technical Support (2008-2009)",
        "Customer Relations Manager (2007-2008)",
        "Technical Support Officer (2006-2007)"
      ]
    }
  ],
  education: [],
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
    "Vectorisation",
    "Quantisation",
    "Data Workflows and Pipelines",
    "Public Sector Procurement",
    "Public Sector Strategy",
    "Defence Technologies",
    "Technical Enablement",
    "Leadership",
    "Sales GTM",
    "Sales Strategy",
    "Sales Forecasting",
    "Prople Management",
    "Data Centre Infrastructure",
    "Lifecycle Management",
    "Digital Transformation"
    "Workforce Transformation",
    "High-Performance Computing",
    "Hierarchical File Systems",
  ],
  linkedinPosts: [],
  presentations: [
    {
      title: "The Perfect Research Cloud, by Researchers.",
      event: "THETA Conference - 2025",
      videoId: "4Vt7Q0vz5Y0",
      videoUrl: "https://youtu.be/4Vt7Q0vz5Y0"
    },
    {
      title: "Unlock the Power of Data with AI",
      event: "Dell Technologies, NVIDIA, AMD - 2024",
      videoId: "S5ZZAT2GqQQ",
      videoUrl: "https://youtu.be/S5ZZAT2GqQQ"
    },
    {
      title: "6D.ai - Standouts Panel",
      event: "Emerging Tech Showcase - 2024",
      videoId: "SmZTZ2SzWLc",
      videoUrl: "https://youtu.be/SmZTZ2SzWLc"
    }
  ]
};
