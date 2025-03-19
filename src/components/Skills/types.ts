import { IconName } from './iconMap';

export interface Skill {
  name: IconName;
  level: number;
}

export interface SkillCategory {
  [key: string]: Skill[];
}