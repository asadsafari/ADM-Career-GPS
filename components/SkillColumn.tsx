
import React from 'react';
import { Skill } from '../types';
import { SkillCard } from './SkillCard';

interface SkillColumnProps {
  title: string;
  skills: Skill[];
  onCardClick: (skill: Skill) => void;
}

const categoryColors: { [key: string]: string } = {
  'Agile Frameworks & Methodologies': 'border-t-red-500',
  'Technical & Tools Proficiency': 'border-t-blue-500',
  'Delivery Management & Execution': 'border-t-green-500',
  'Leadership & People Skills': 'border-t-purple-500',
  'Communication & Stakeholder Management': 'border-t-yellow-500',
  'Metrics, Analytics & Data-Driven Decision Making': 'border-t-cyan-500',
  'Strategic & Business Acumen': 'border-t-indigo-500',
  'Continuous Improvement & Innovation': 'border-t-pink-500',
};

export const SkillColumn: React.FC<SkillColumnProps> = ({ title, skills, onCardClick }) => {
  const borderColor = categoryColors[title] || 'border-t-slate-500';

  return (
    <div className={`bg-slate-50 rounded-xl p-4 flex-shrink-0 w-full md:w-96 border-t-4 ${borderColor}`}>
      <h2 className="text-xl font-bold text-text-primary mb-4 px-2 sticky top-0 bg-slate-50 py-2">{title} ({skills.length})</h2>
      <div className="space-y-4">
        {skills.map((skill) => (
          <SkillCard key={skill.skillName} skill={skill} onClick={onCardClick} />
        ))}
      </div>
    </div>
  );
};
