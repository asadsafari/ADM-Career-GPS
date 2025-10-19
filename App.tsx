
import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { SkillBoard } from './components/SkillBoard';
import { SkillModal } from './components/SkillModal';
import { DeliveryPlan } from './components/DeliveryPlan';
import { allSkills } from './data';
import { Skill } from './types';

const App: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(allSkills[0]);
  const [view, setView] = useState<'wiki' | 'plan'>('wiki');

  const handleSkillSelect = useCallback((skill: Skill) => {
    setSelectedSkill(skill);
  }, []);

  return (
    <div className="min-h-screen bg-light-bg">
      <Header view={view} onViewChange={setView} />
      <div className="max-w-screen-2xl mx-auto w-full flex flex-col md:flex-row items-start">
        {view === 'wiki' && (
            <SkillBoard
                skills={allSkills}
                selectedSkill={selectedSkill}
                onSkillSelect={handleSkillSelect}
            />
        )}
        <main className="flex-1 w-full p-4 md:p-8">
            {view === 'wiki' ? (
                <SkillModal key={selectedSkill?.skillName} skill={selectedSkill} />
            ) : (
                <DeliveryPlan />
            )}
        </main>
      </div>
    </div>
  );
};

export default App;
