
import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { SkillBoard } from './components/SkillBoard';
import { SkillModal } from './components/SkillModal';
import { DeliveryPlan } from './components/DeliveryPlan';
import { MonteCarloSimulator } from './components/MonteCarloSimulator';
import { ReleaseTracker } from './components/ReleaseTracker';
import { allSkills } from './data';
import { Skill } from './types';

type ViewType = 'wiki' | 'plan' | 'progress' | 'monteCarlo';

const App: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(allSkills[0]);
  const [view, setView] = useState<ViewType>('wiki');

  const handleSkillSelect = useCallback((skill: Skill) => {
    setSelectedSkill(skill);
  }, []);
  
  const handleViewChange = useCallback((newView: ViewType) => {
    setView(newView);
  }, []);

  const renderMainContent = () => {
    switch(view) {
        case 'wiki':
            return (
              <>
                <SkillBoard
                    skills={allSkills}
                    selectedSkill={selectedSkill}
                    onSkillSelect={handleSkillSelect}
                />
                <main className="flex-1 w-full p-4 md:p-8">
                    <SkillModal key={selectedSkill?.skillName} skill={selectedSkill} />
                </main>
              </>
            );
        case 'plan':
            return (
                <main className="flex-1 w-full p-4 md:p-8">
                    <DeliveryPlan />
                </main>
            );
        case 'progress':
            return (
                <main className="flex-1 w-full p-4 md:p-8">
                    <ReleaseTracker />
                </main>
            );
        case 'monteCarlo':
            return (
                <main className="flex-1 w-full p-4 md:p-8">
                    <MonteCarloSimulator />
                </main>
            );
        default:
            return null;
    }
  };

  return (
    <div className="min-h-screen bg-light-bg">
      <Header view={view} onViewChange={handleViewChange} />
      <div className="max-w-screen-2xl mx-auto w-full flex flex-col md:flex-row items-start">
        {renderMainContent()}
      </div>
    </div>
  );
};

export default App;
