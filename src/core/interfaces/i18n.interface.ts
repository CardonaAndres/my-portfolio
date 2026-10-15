export type Locale = "es" | "en";

export interface NavDictionary {
  home: string;
  projects: string;
  experience: string;
  skills: string;
  contact: string;
}

export interface HeroDictionary {
  badge: string;
  greeting: string;
  name: string;
  role: string;
  tagline: string;
  description: string;
  location: string;
  ctaProjects: string;
  ctaContact: string;
  statExperience: string;
  statProjects: string;
  statAvailability: string;
  techStackLabel: string;
  focusFrontendLabel: string;
  focusFrontendText: string;
  focusBackendLabel: string;
  focusBackendText: string;
}

export interface ProjectsDictionary {
  title: string;
  subtitle: string;
  filterAll: string;
  viewDemo: string;
  viewCode: string;
  emptyState: string;
}

export interface ContactDictionary {
  title: string;
  subtitle: string;
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  submitButton: string;
  submittingButton: string;
  successMessage: string;
  errorMessage: string;
}

export interface FooterDictionary {
  rights: string;
  designedWith: string;
}

export interface Dictionary {
  nav: NavDictionary;
  hero: HeroDictionary;
  projects: ProjectsDictionary;
  contact: ContactDictionary;
  footer: FooterDictionary;
}
