export interface Project {
  slug: string;
  name: string;
  industry: string;
  status: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  iconName: "GraduationCap" | "Users" | "UserCircle" | "Camera";
  boxColor: string;
  statusColor?: string;
  overview: string;
  problem: string;
  solution: string;
  benefits: string[];
  impact: { value: string; label: string }[];
}

export const PROJECTS: Project[] = [
  {
    slug: "my-kids-learning",
    name: "My Kids Learning App",
    industry: "EdTech",
    status: "Live & Active",
    description: "An intelligent learning and attendance management system designed for modern classrooms, students, and parents.",
    tech: ["Next.js", "React Native", "Firebase", "Tailwind CSS"],
    liveUrl: "https://www.mykidslearning.com",
    iconName: "GraduationCap",
    boxColor: "bg-blue-500",
    statusColor: "text-blue-400 bg-blue-500/10",
    overview: "My Kids Learning is an interactive educational and attendance tracking ecosystem built to simplify school-parent communication and engage early childhood learners with gamified modules.",
    problem: "Educators and parents struggled with fragmented tracking apps, paper-based attendance, and lack of real-time visibility into kids' daily curriculum milestones.",
    solution: "We engineered a unified web and mobile application that handles multi-tenant classroom rosters, digital check-ins, automated parent alerts, and interactive multimedia learning modules.",
    benefits: [
      "Real-time attendance tracking with instant parent notifications",
      "Interactive audio-visual learning activities for young students",
      "Seamless mobile app experience on iOS & Android via React Native",
      "Role-based access for teachers, administrators, and parents"
    ],
    impact: [
      { value: "50K+", label: "Active Students & Parents" },
      { value: "99.9%", label: "Uptime on Cloud Infrastructure" },
      { value: "3x", label: "Faster Daily Attendance Logging" }
    ]
  },
  {
    slug: "developer-portfolio",
    name: "Premium Portfolio Website",
    industry: "Personal Brand",
    status: "Live",
    description: "A conversion-focused, dark-mode portfolio built to showcase software engineering projects, 3D holograms, and attract premium clients.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    liveUrl: "https://abhimungase.vercel.app/",
    iconName: "UserCircle",
    boxColor: "bg-emerald-500",
    statusColor: "text-emerald-400 bg-emerald-500/10",
    overview: "A sleek, cutting-edge software engineer portfolio engineered with smooth animations, dark-mode cyber aesthetics, responsive layout, and optimized Core Web Vitals to elevate personal brand credibility.",
    problem: "Generic static resume sites failed to reflect modern full-stack development skills, high-performance UI engineering, or visual craft.",
    solution: "Designed and built an ultra-premium portfolio featuring interactive 3D elements, dynamic project case studies, custom photography integration, and instant WhatsApp booking integration.",
    benefits: [
      "Sub-second load times with Next.js App Router and SSR",
      "Ultra-fluid micro-interactions and framer-motion animations",
      "Direct WhatsApp lead generation integration with pre-filled prompts",
      "100/100 Core Web Vitals performance and SEO optimization"
    ],
    impact: [
      { value: "100%", label: "Performance Score on Lighthouse" },
      { value: "4x", label: "Increase in Direct Inquiries" },
      { value: "< 1s", label: "Page Load Speed Worldwide" }
    ]
  },
  {
    slug: "photography-website",
    name: "Ritesh Gujarathi Photography",
    industry: "Creative & Luxury Brand",
    status: "Live & Active",
    description: "Luxury Wedding Photography & Films website designed to highlight high-resolution wedding collections and cinematic drone films.",
    tech: ["React", "Next.js", "Framer Motion", "Tailwind CSS", "Vercel"],
    liveUrl: "https://riteshgujarathiphotography.vercel.app/",
    iconName: "Camera",
    boxColor: "bg-orange-500",
    statusColor: "text-orange-400 bg-orange-500/10",
    overview: "Ritesh Gujarathi Photography is a high-end luxury wedding photography and cinematography showcase designed to present grand Indian wedding films, candid emotions, and aerial drone vistas with magazine-grade aesthetics.",
    problem: "Showcasing hundreds of high-resolution 4K photographs and wedding video showreels without slowing down mobile performance was a critical challenge for high-ticket bookings.",
    solution: "We engineered an image-first, responsive platform with next-gen image compression, progressive blur loading, custom 3D perspective carousels, and an instant date-booking workflow.",
    benefits: [
      "Instant loading of high-resolution 4K wedding galleries",
      "Custom 3D perspective carousel with touch and swipe controls",
      "Integrated wedding inquiry booking form with direct WhatsApp routing",
      "Full editorial layout showcasing luxury pre-wedding & destination shoots"
    ],
    impact: [
      { value: "250+", label: "Weddings & Shoots Featured" },
      { value: "65%", label: "Boost in Pre-Wedding Bookings" },
      { value: "100%", label: "Mobile-First Responsiveness" }
    ]
  },
  {
    slug: "company-attendance-system",
    name: "Company Attendance System",
    industry: "Enterprise",
    status: "Production",
    description: "A robust internal portal for tracking employee attendance, shift schedules, leaves, and generating automated HR payroll reports.",
    tech: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    liveUrl: undefined, // Internal Enterprise platform
    iconName: "Users",
    boxColor: "bg-purple-500",
    statusColor: "text-purple-400 bg-purple-500/10",
    overview: "A scalable enterprise attendance and employee resource management portal tailored for medium-to-large businesses to streamline check-ins, biometric synchronization, and HR compliance.",
    problem: "Manual attendance punch records and spreadsheet-based leave approvals led to payroll discrepancies, time theft, and heavy HR administrative overhead.",
    solution: "Created an enterprise web dashboard with automated biometric device sync, geo-fenced mobile punches, multi-tier leave approval chains, and one-click payroll CSV exports.",
    benefits: [
      "Geo-fenced mobile clock-in/out for remote and field staff",
      "Automated overtime calculation and payroll report generation",
      "Role-based access controls for employees, managers, and HR heads",
      "Biometric hardware API integration with PostgreSQL database"
    ],
    impact: [
      { value: "90%", label: "Reduction in Payroll Calculation Time" },
      { value: "0", label: "Attendance Tracking Errors" },
      { value: "1,500+", label: "Daily Active Employees Clocked" }
    ]
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
