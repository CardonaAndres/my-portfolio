import type { Dictionary } from "@/core/interfaces/i18n.interface";

export const enDictionary: Dictionary = {
  nav: {
    home: "Home",
    projects: "Projects",
    experience: "Experience",
    skills: "Skills",
    contact: "Contact",
  },
  hero: {
    badge: "Available for new opportunities",
    greeting: "Hi, I'm",
    role: "Software Developer",
    description:
      "Specialized in building modern web applications, scalable architectures, and high-impact digital experiences.",
    ctaProjects: "View Projects",
    ctaContact: "Get in Touch",
  },
  projects: {
    title: "Featured Projects",
    subtitle: "A curated selection of recent work and case studies I have built.",
    filterAll: "All",
    viewDemo: "Live Demo",
    viewCode: "Source Code",
    emptyState: "No projects found in this category.",
  },
  contact: {
    title: "Let's Talk",
    subtitle: "Have a project or idea in mind? Drop me a message and let's build something remarkable.",
    nameLabel: "Name",
    namePlaceholder: "Your full name",
    emailLabel: "Email Address",
    emailPlaceholder: "you@email.com",
    messageLabel: "Message",
    messagePlaceholder: "Tell me about your project...",
    submitButton: "Send Message",
    submittingButton: "Sending...",
    successMessage: "Message sent successfully! I will get back to you as soon as possible.",
    errorMessage: "An error occurred while sending the message. Please try again.",
  },
  footer: {
    rights: "All rights reserved.",
    designedWith: "Designed and built with Next.js and Tailwind CSS.",
  },
};
