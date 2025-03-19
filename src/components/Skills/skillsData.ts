import { IconName } from './iconMap';

export interface Skill {
  name: IconName;
  level: number;
}

export const skills: Record<string, Skill[]> = {
  "Languages": [
    { name: "TypeScript", level: 95 },
    { name: "JavaScript", level: 95 },
    { name: "Python", level: 90 },
    { name: "Java", level: 85 },
    { name: "Dart", level: 85 },
    { name: "PHP", level: 85 },
    { name: "C", level: 75 },
    { name: "CSharp", level: 75 },
    { name: "Haskell", level: 70 }
  ],
  "Frontend": [
    { name: "React", level: 95 },
    { name: "Vue.js", level: 90 },
    { name: "Angular", level: 90 },
    { name: "Flutter", level: 85 },
    { name: "ReactNative", level: 85 }
  ],
  "Backend": [
    { name: "Node.js", level: 95 },
    { name: "FastAPI", level: 90 },
    { name: "Spring", level: 85 },
    { name: "Laravel", level: 85 },
    { name: "Flask", level: 85 },
    { name: "Symfony", level: 80 }
  ],
  "DevOps": [
    { name: "Docker", level: 95 },
    { name: "GitLab", level: 90 },
    { name: "AWS", level: 90 },
    { name: "Kubernetes", level: 85 },
    { name: "Ansible", level: 85 },
    { name: "Firebase", level: 85 }
  ],
  "Databases": [
    { name: "PostgreSQL", level: 90 },
    { name: "MongoDB", level: 85 },
    { name: "MySQL", level: 85 }
  ],
  "API & Architecture": [
    { name: "REST", level: 95 },
    { name: "GraphQL", level: 90 },
    { name: "Microservices", level: 90 },
    { name: "IoT", level: 85 }
  ],
  "Tools & Others": [
    { name: "Git", level: 95 },
    { name: "Shell", level: 90 },
    { name: "Figma", level: 85 },
    { name: "WordPress", level: 80 }
  ]
};