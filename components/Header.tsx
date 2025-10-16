import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-card-bg shadow-sm p-4 md:px-6 border-b border-slate-200 h-auto md:h-[89px] flex flex-col md:flex-row md:items-center md:justify-between sticky top-0 z-10">
      <div className="flex-shrink-0">
        <h1 className="text-3xl font-extrabold text-brand-primary">
          ADM Career GPS
        </h1>
        <p className="text-text-secondary mt-1 text-sm md:text-base">
          Your Interactive Guide to Agile Delivery Management Mastery
        </p>
      </div>
      <div className="mt-4 md:mt-0 text-left md:text-right">
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
    </header>
  );
};