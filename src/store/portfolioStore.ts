import { create } from "zustand";
import { Project } from "@/types/project";

interface PortfolioState {
  projects: Project[];
  setProjects: (projects: Project[]) => void;
  getProjectById: (id: string) => Project | undefined;
}

export const usePortfolioStore = create<PortfolioState>((set, get) => ({
  projects: [],
  setProjects: projects => set({ projects }),
  getProjectById: (id: string) => {
    const { projects } = get();
    return projects.find(project => project.id === id);
  },
}));
