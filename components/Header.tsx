
import React from 'react';

type ViewType = 'wiki' | 'plan' | 'progress' | 'monteCarlo' | 'charter' | 'psychSafety' | 'coaching' | 'conflict';

interface HeaderProps {
    view: ViewType;
    onViewChange: (view: ViewType) => void;
}

export const Header: React.FC<HeaderProps> = ({ view, onViewChange }) => {
  
  const getButtonClass = (buttonView: ViewType) => {
    const baseClass = "px-4 py-2 rounded-md text-sm font-semibold transition-colors whitespace-nowrap";
    if(view === buttonView) {
        return `${baseClass} bg-brand-primary text-white shadow-sm`;
    }
    return `${baseClass} bg-slate-200 text-text-secondary hover:bg-slate-300`;
  };

  return (
    <header className="bg-card-bg shadow-sm p-4 md:px-6 border-b border-slate-200 h-auto md:h-auto flex flex-col md:flex-row md:items-center md:justify-between sticky top-0 z-20">
      <div className="flex-shrink-0 mb-4 md:mb-0">
        <h1 className="text-3xl font-extrabold text-brand-primary">
          ADM Career GPS
        </h1>
        <p className="text-text-secondary mt-1 text-sm md:text-base">
          راهنمای تعاملی شما برای تسلط بر مدیریت تحویل چابک
        </p>
      </div>
      
      <div className="flex items-center gap-4">
         <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-lg flex-wrap justify-start md:justify-end">
           <button onClick={() => onViewChange('wiki')} className={getButtonClass('wiki')}>ویکی مهارت‌ها</button>
           <button onClick={() => onViewChange('charter')} className={getButtonClass('charter')}>منشور چابک</button>
           <button onClick={() => onViewChange('plan')} className={getButtonClass('plan')}>نمونه برنامه تحویل</button>
           <button onClick={() => onViewChange('progress')} className={getButtonClass('progress')}>پیگیری پیشرفت</button>
           <button onClick={() => onViewChange('monteCarlo')} className={getButtonClass('monteCarlo')}>شبیه‌ساز مونت کارلو</button>
           <button onClick={() => onViewChange('psychSafety')} className={getButtonClass('psychSafety')}>ایجاد امنیت روانی</button>
           <button onClick={() => onViewChange('coaching')} className={getButtonClass('coaching')}>کوچینگ تیم‌ها</button>
           <button onClick={() => onViewChange('conflict')} className={getButtonClass('conflict')}>مدیریت تعارضات</button>
         </div>

        <div className="hidden lg:block text-right border-l border-slate-200 pl-4 ml-2" dir="rtl">
            <p className="text-xs text-text-secondary">
            پروژه‌ای از
            </p>
            <p className="text-sm font-semibold text-brand-secondary">
            <a href="https://scrum.ir" target="_blank" rel="noopener noreferrer" className="hover:underline">
                اسکرام ایران / اسد صفری
            </a>
            </p>
            <p className="text-xs text-text-secondary mt-1">
            منتشر شده تحت مجوز MIT.
            </p>
        </div>
      </div>
    </header>
  );
};
