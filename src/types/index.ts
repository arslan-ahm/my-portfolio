export interface ProjectData {
  title: string;
  description: string;
  url?: string;
  repo?: string;
  image: string;
  imagePlaceholder: string;
  imageAlt: string;
  technologies: string[];
  roles: string[];
  year: string;
}

export interface ArticleData {
  title: string;
  abstract: string;
  date: string;
  banner: string;
  bannerPlaceholder: string;
  bannerAlt: string;
  readTime: string;
}

export interface Config {
  name: string;
  role: string;
  disciplines: string[];
  url: string;
  bluesky?: string;
  figma?: string;
  github?: string;
  repo?: string;
  ascii?: string;
}

export interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export interface DeviceInfo {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  hasReducedMotion: boolean;
  isTouch: boolean;
}

export interface ViewportDimensions {
  width: number;
  height: number;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}
