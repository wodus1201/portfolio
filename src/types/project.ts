export interface Project {
  id: string;
  title: string;
  soloOrTeam: "solo" | "team";
  duration: string;
  description: string;
  image: string;
  staticImage: string;
  technologies: Array<{
    frontend?: string[];
    backend?: string[];
    deploy?: string[];
  }>;
  githubUrl?: string;
  liveUrl?: string;
  downloadUrl?: string;
  content: string;
  features?: Record<string, (string | Record<string, string[]>)[]>;
  challenges?: string;
}
