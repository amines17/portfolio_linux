import { iconMap } from './iconMap';

interface SkillCardProps {
  name: keyof typeof iconMap;
  level: number;
}

export default function SkillCard({ name, level }: SkillCardProps) {
  const Icon = iconMap[name];

  return (
    <div className="bg-gray-800/50 p-3 sm:p-4 rounded-lg">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <div className="text-emerald-400 mr-2 sm:mr-3 w-5 h-5 sm:w-6 sm:h-6">
            <Icon />
          </div>
          <span className="text-gray-200 text-sm sm:text-base">{name}</span>
        </div>
        <span className="text-emerald-400 text-sm sm:text-base">{level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div
          className="bg-emerald-500 h-2 rounded-full transition-all duration-500"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
}