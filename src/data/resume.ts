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
    "At Cloudflare, I help organisations protect their critical websites, APIs, and internal networks from cyber threats, securely connect users and devices to applications worldwide, and support application development teams build scalable, high-performance applications enhanced by AI workers at the network edge.",
    "My background combines deep technical expertise with a focus on people, process and technology, honed in high-impact roles at Dell Technologies, IBM, and UQ's Institute for Molecular Bioscience. I have managed the complete data centre lifecycle including infrastructure, support, policy, and procurement.",
    "My experience spans sales, technical enablement, and keynote speaking, all focused on giving others agency to deliver outstanding business and research excellence."
  ],
  avatarUrl: "https://media.licdn.com/dms/image/v2/D4E03AQEVQ_myI5HDTw/profile-displayphoto-scale_400_400/B4EZpXtixKHcAg-/0/1762408148869?e=1772668800&v=beta&t=rc7zJAN-CSqCnOSY8V4b9GH0p3-pRKNacLgLJ8baALY",
  contact: {
    email: "dunsmore.brett@gmail.com",
    linkedin: "https://www.linkedin.com/in/dunsmorebrett",
    mobile: "61429209460",
  },
  experience: [
    {
      company: "Cloudflare",
      logo: "https://logo.clearbit.com/cloudflare.com?size=64",
      period: "October 2025 - Present",
      description: "Public Sector and Named Higher Education (QLD/NT)",
      responsibilities: [
        "Senior Named Account Executive, Public Sector"
      ]
    },
    {
      company: "Dell Technologies",
      logo: "https://logo.clearbit.com/dell.com?size=64",
      period: "December 2017 - October 2025",
      description: "Public Sector, Federal, Defence, Higher Education, Utilities, and Enterprise.",
      responsibilities: [
        "AI solutions strategy for Australia and New Zealand (2024-2025)",
        "Principal Solutions Executive (2022-2024)",
        "Data Centre Solutions Executive (2021-2022)",
        "Senior Systems Engineer (2019-2021)"
      ]
    },
    {
      company: "The University of Queensland (IMB)",
      logo: "https://logo.clearbit.com/uq.edu.au?size=64",
      period: "February 2009 - December 2017",
      description: "Institute for Molecular Bioscience IT Leadership.",
      responsibilities: [
        "Senior IT Manager (2012-2017)",
        "Service Delivery Manager (2010-2012)",
        "Desktop Support (2009-2010)"
      ]
    },
    {
      company: "IBM",
      logo: "https://logo.clearbit.com/ibm.com?size=64",
      period: "June 2006 - February 2009",
      description: "Technical excellence and customer relationship management.",
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
    "Edge Computing",
    "Generative AI",
    "Public Sector Strategy",
    "Technical Enablement",
    "Data Centre Infrastructure",
    "Digital Transformation"
  ],
  linkedinPosts: [
    {
      title: "A New Chapter at Dell Technologies",
      snippet: "Reflecting on a decade of growth and the incredible technological evolution I've witnessed. From traditional infrastructure to the AI-driven future.",
      date: "Recent",
      imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
      link: "https://www.linkedin.com/in/dunsmorebrett/"
    },
    {
      title: "The Hidden Risks of Shadow AI",
      snippet: "As organizations race to adopt generative AI, many are overlooking critical security blind spots. Balance speed of innovation with robust governance.",
      date: "Recent",
      imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
      link: "https://www.linkedin.com/in/dunsmorebrett/"
    },
    {
      title: "Balancing AI Innovation with Security",
      snippet: "Integrating a security-first mindset into edge computing and AI workflows is no longer optional. Security is an enabler of innovation.",
      date: "Recent",
      imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      link: "https://www.linkedin.com/in/dunsmorebrett/"
    }
  ],
  presentations: [
    {
      title: "The Perfect Research Cloud, by Researchers.",
      event: "THETA Conference",
      videoId: "4Vt7Q0vz5Y0",
      videoUrl: "https://youtu.be/4Vt7Q0vz5Y0"
    },
    {
      title: "Unlock the Power of Data with AI",
      event: "Dell Technologies, NVIDIA, AMD",
      videoId: "S5ZZAT2GqQQ",
      videoUrl: "https://youtu.be/S5ZZAT2GqQQ"
    },
    {
      title: "6D.ai - Standouts Panel",
      event: "Emerging Tech Showcase",
      videoId: "SmZTZ2SzWLc",
      videoUrl: "https://youtu.be/SmZTZ2SzWLc"
    }
  ]
};