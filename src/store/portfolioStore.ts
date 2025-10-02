import { create } from "zustand";

export interface Project {
  id: string;
  title: string;
  duration: string;
  description: string;
  image: string;
  staticImage?: string;
  technologies: Array<{
    frontend?: string[];
    backend?: string[];
    deploy?: string[];
  }>;
  githubUrl?: string;
  liveUrl?: string;
  downloadUrl?: string;
  content?: string;
  features?: string[];
  challenges?: string;
}

interface PortfolioState {
  projects: Project[];
  setProjects: (projects: Project[]) => void;
  getProjectById: (id: string) => Project | undefined;
}

export const usePortfolioStore = create<PortfolioState>((set, get) => ({
  projects: [],
  setProjects: (projects) => set({ projects }),
  getProjectById: (id) => {
    const { projects } = get();
    return projects.find((project) => project.id === id);
  },
}));
