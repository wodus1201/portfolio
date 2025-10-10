import { create } from "zustand";

export interface Project {
  id: string;
  title: string;
  soloOrTeam: string;
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
  features?: { [key: string]: string[] | object[] | undefined };
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
  getProjectById: (id: string) => {
    const { projects } = get();
    return projects.find((project) => project.id === id);
  },
}));
