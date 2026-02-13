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
    "My background combines deep technical expertise with a focus on people, processes, and technology, honed in high-impact roles at Dell Technologies, IBM, and UQ's Institute for Molecular Bioscience. I have managed the complete data centre lifecycle including infrastructure, support, policy, and procurement.",
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
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/94/Cloudflare_Logo.png",
      period: "October 2024 - Present",
      description: "Public Sector and Higher Education",
      responsibilities: [
        "Senior Named Account Executive"
      ]
    },
    {
      company: "Dell Technologies",
      logo: "https://www.femmehub.com/wp-content/uploads/2023/01/Dell.png",
      period: "December 2017 - October 2024",
      description: "Defence, Federal, Higher Education, and Large Enterprise",
      responsibilities: [
        "AI Solutions Strategy for Australia and New Zealand (2024-2025)",
        "Principal Solutions Executive (2022-2024)",
        "Data Centre Solutions Executive (2021-2022)",
        "Senior Systems Engineer (2019-2021)"
      ]
    },
    {
      company: "The University of Queensland (IMB)",
      logo: "https://universitiesaustralia.edu.au/wp-content/uploads/2019/05/UQ-300x300.png",
      period: "February 2009 - December 2017",
      description: "Supporting Life Sciences Research and Drug Discovery",
      responsibilities: [
        "Senior IT Manager (2012-2017)",
        "Service Delivery Manager (2010-2012)",
        "Desktop Support (2009-2010)"
      ]
    },
    {
      company: "IBM",
      logo: "https://download.logo.wine/logo/IBM/IBM-Logo.wine.png",
      period: "June 2006 - February 2009",
      description: "L3/4 Technical Support, Training, and Quality Assurance - APAC",
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
      title: "Helping Build a Better Internet at Cloudflare",
      snippet: "I'm thrilled to share that I've joined Cloudflare to support our Public Sector and Higher Education customers across Australia. Looking forward to helping organisations stay secure and performant.",
      date: "October 2024",
      imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800",
      link: "https://www.linkedin.com/in/dunsmorebrett/"
    },
    {
      title: "Navigating the Strategic Risks of Shadow AI",
      snippet: "As Generative AI adoption accelerates, the emergence of 'Shadow AI' presents significant governance and security challenges. It's critical to balance the pace of innovation with robust corporate guardrails.",
      date: "Recent",
      imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      link: "https://www.linkedin.com/in/dunsmorebrett/"
    },
    {
      title: "The Dissolving Perimeter: Why Edge Security is Non-Negotiable",
      snippet: "In a world of distributed workforces and hybrid clouds, the traditional network perimeter has dissolved. Protecting users and applications at the edge with Zero Trust architecture is the new standard.",
      date: "Recent",
      imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
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