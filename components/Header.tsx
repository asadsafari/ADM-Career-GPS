
import React from 'react';

interface HeaderProps {
    view: 'wiki' | 'plan';
    onViewChange: (view: 'wiki' | 'plan') => void;
}

export const Header: React.FC<HeaderProps> = ({ view, onViewChange }) => {
  
  const getButtonClass = (buttonView: 'wiki' | 'plan') => {
    const baseClass = "px-4 py-2 rounded-md text-sm font-semibold transition-colors";
    if(view === buttonView) {
        return `${baseClass} bg-brand-primary text-white shadow-sm`;
    }
    return `${baseClass} bg-slate-200 text-text-secondary hover:bg-slate-300`;
  };

  return (
    <header className="bg-card-bg shadow-sm p-4 md:px-6 border-b border-slate-200 h-auto md:h-[89px] flex flex-col md:flex-row md:items-center md:justify-between sticky top-0 z-20">
      <div className="flex-shrink-0">
        <h1 className="text-3xl font-extrabold text-brand-primary">
          ADM Career GPS
        </h1>
        <p className="text-text-secondary mt-1 text-sm md:text-base">
          Your Interactive Guide to Agile Delivery Management Mastery
        </p>
      </div>
      
      <div className="flex items-center gap-4 mt-4 md:mt-0">
         <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-lg">
           <button onClick={() => onViewChange('wiki')} className={getButtonClass('wiki')}>Skill Wiki</button>
           <button onClick={() => onViewChange('plan')} className={getButtonClass('plan')}>Example Delivery Plan</button>
         </div>

        <div className="hidden md:block text-right border-l border-slate-200 pl-4 ml-2">
            <p className="text-xs text-text-secondary">
            A project by
            </p>
            <p className="text-sm font-semibold text-brand-secondary">
            <a href="https://scrum.ir" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Scrum.ir / Asad Safari
            </a>
            </p>
            <p className="text-xs text-text-secondary mt-1">
            Released under the MIT License.
            </p>
        </div>
      </div>
    </header>
  );
};
