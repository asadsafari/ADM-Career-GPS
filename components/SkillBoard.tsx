
import React, { useState } from 'react';
import { Skill } from '../types';
import { ChevronDownIcon } from './Icons';

interface SkillBoardProps {
  skills: Skill[];
  selectedSkill: Skill | null;
  onSkillSelect: (skill: Skill) => void;
}

export const SkillBoard: React.FC<SkillBoardProps> = ({ skills, selectedSkill, onSkillSelect }) => {
  // FIX: Refactored to group skills by category efficiently and in a type-safe manner.
  // This resolves issues where category was inferred as 'unknown', causing errors.
  const skillsByCategory = skills.reduce((acc, skill) => {
    const category = skill.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  const categories = Object.keys(skillsByCategory);
  
  const [openCategories, setOpenCategories] = useState<string[]>(categories);

  const toggleCategory = (category: string) => {
    setOpenCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  return (
    <aside className="w-full md:w-80 lg:w-96 flex-shrink-0 bg-white border-b md:border-b-0 md:border-l border-slate-200 p-4 md:h-[calc(100vh-89px)] md:sticky md:top-[89px]" dir="rtl">
      <div className="h-full overflow-y-auto">
        <h2 className="text-lg font-bold text-text-primary mb-4 px-2 text-right">ویکی مهارت‌ها</h2>
        <nav>
          <ul>
            {categories.map(category => (
              <li key={category} className="mb-2">
                <button 
                  onClick={() => toggleCategory(category)}
                  className="w-full flex justify-between items-center text-right font-semibold text-brand-primary p-2 rounded-md hover:bg-slate-100"
                >
                  <span>{category}</span>
                  <ChevronDownIcon className={`w-5 h-5 transition-transform ${openCategories.includes(category) ? 'rotate-180' : ''}`} />
                </button>
                {openCategories.includes(category) && (
                  <ul className="pr-4 mt-1 border-r-2 border-l-0 border-brand-secondary/20">
                    {skillsByCategory[category].map(skill => (
                      <li key={skill.skillName}>
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            onSkillSelect(skill);
                          }}
                          className={`block p-2 text-sm rounded-md transition-colors ${
                            selectedSkill?.skillName === skill.skillName
                              ? 'bg-brand-primary/10 text-brand-primary font-semibold'
                              : 'text-text-secondary hover:bg-slate-50 hover:text-text-primary'
                          }`}
                        >
                          {skill.skillName}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};
