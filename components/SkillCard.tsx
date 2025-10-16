
import React from 'react';
import { Skill } from '../types';

interface SkillCardProps {
  skill: Skill;
  onClick: (skill: Skill) => void;
}

const getSkillTypeBadgeColor = (type: string) => {
  if (type.toLowerCase().includes('must-have')) return 'bg-red-100 text-red-800';
  if (type.toLowerCase().includes('core')) return 'bg-blue-100 text-blue-800';
  if (type.toLowerCase().includes('valuable')) return 'bg-yellow-100 text-yellow-800';
  if (type.toLowerCase().includes('differentiator')) return 'bg-purple-100 text-purple-800';
  return 'bg-slate-100 text-slate-800';
};

export const SkillCard: React.FC<SkillCardProps> = ({ skill, onClick }) => {
  return (
    <div
      onClick={() => onClick(skill)}
      className="bg-card-bg p-4 rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-200 cursor-pointer border border-slate-200"
    >
      <h3 className="font-bold text-md text-text-primary">{skill.skillName}</h3>
      <div className="flex flex-wrap gap-2 mt-3">
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${getSkillTypeBadgeColor(skill.skillType)}`}>
          {skill.skillType}
        </span>
         <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-green-100 text-green-800">
          {skill.marketDemand}
        </span>
      </div>
      <div className="mt-4 flex justify-between text-xs text-text-secondary">
          <span>Entry: {skill.requiredForLevel.entry}</span>
          <span>Mid: {skill.requiredForLevel.mid}</span>
          <span>Senior: {skill.requiredForLevel.senior}</span>
      </div>
    </div>
  );
};
