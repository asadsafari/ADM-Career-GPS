
import React from 'react';
import { Skill } from '../types';
import { CheckCircleIcon } from './Icons';
import { Accordion } from './Accordion';
import { NoteTaker } from './NoteTaker';

interface SkillModalProps {
  skill: Skill | null;
}

const getSkillTypeColor = (type: string) => {
  if (type.toLowerCase().includes('ضروری')) return 'bg-red-100 text-red-800';
  if (type.toLowerCase().includes('اصلی')) return 'bg-blue-100 text-blue-800';
  if (type.toLowerCase().includes('ارزشمند')) return 'bg-yellow-100 text-yellow-800';
  if (type.toLowerCase().includes('متمایز')) return 'bg-purple-100 text-purple-800';
  return 'bg-slate-100 text-slate-800';
};

export const SkillModal: React.FC<SkillModalProps> = ({ skill }) => {
  if (!skill) {
    return (
      <div className="flex items-center justify-center h-full p-8 bg-white rounded-lg shadow-sm" dir="rtl">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-brand-primary">به راهنمای شغلی ADM خوش آمدید</h2>
          <p className="mt-2 text-text-secondary">لطفاً برای مشاهده جزئیات، یک مهارت را از نوار کناری انتخاب کنید.</p>
        </div>
      </div>
    );
  }

  return (
    <article className="bg-white rounded-lg shadow-sm p-6 md:p-8 text-right" dir="rtl">
      <header className="pb-6 border-b border-slate-200 mb-6">
        <p className="text-brand-secondary font-semibold mb-2">{skill.category}</p>
        <h1 className="text-4xl font-bold text-brand-primary">{skill.skillName}</h1>
        <div className="flex flex-wrap items-center gap-4 mt-4">
           <span className={`text-sm font-medium px-3 py-1 rounded-full ${getSkillTypeColor(skill.skillType)}`}>
            {skill.skillType}
          </span>
          <span className="text-sm font-medium px-3 py-1 rounded-full bg-green-100 text-green-800">
            تقاضای بازار: {skill.marketDemand}
          </span>
        </div>
      </header>
      
      <section className="space-y-6">
          <Accordion title="در عمل چگونه است؟ (نمونه‌ها)" defaultOpen={true}>
              <ul className="list-disc pr-5 space-y-2 text-text-secondary">
                  {skill.whatItLooksLike.map((item, index) => <li key={index}>{item}</li>)}
              </ul>
              <NoteTaker noteKey={`${skill.skillName}::What It Looks Like (Exemplars)`} />
          </Accordion>
          
          <Accordion title="نشانه‌های تسلط (شواهد)" defaultOpen={true}>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 text-text-secondary">
                  {skill.proofPoints.map((point, index) => (
                      <li key={index} className="flex items-start">
                          <CheckCircleIcon className="w-5 h-5 text-green-500 ml-2 mt-0.5 flex-shrink-0" />
                          <span>{point}</span>
                      </li>
                  ))}
              </ul>
              <NoteTaker noteKey={`${skill.skillName}::Proof Points (Evidence of Mastery)`} />
          </Accordion>

          <Accordion title="داستان واقعی" defaultOpen={true}>
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <p className="font-semibold text-text-primary">{skill.realStoryExample.persona}</p>
                  <blockquote className="mt-2 pr-4 border-r-4 border-l-0 border-brand-secondary/50 space-y-2 text-text-secondary">
                      <p><strong className="text-slate-600">چالش:</strong> {skill.realStoryExample.challenge}</p>
                      <p><strong className="text-slate-600">اقدام:</strong> {skill.realStoryExample.action}</p>
                      <p><strong className="text-slate-600">نتیجه:</strong> {skill.realStoryExample.result}</p>
                  </blockquote>
                  <div className="mt-4">
                      <strong className="text-slate-600">مهارت‌های استفاده شده:</strong>
                      <div className="flex flex-wrap gap-2 mt-1">
                          {skill.realStoryExample.skillsUsed.map(s => <span key={s} className="text-xs bg-brand-primary text-white px-2 py-1 rounded-full font-medium">{s}</span>)}
                      </div>
                  </div>
              </div>
              <NoteTaker noteKey={`${skill.skillName}::Real Story Example`} />
          </Accordion>
           
          <Accordion title="اشتباهات رایج" defaultOpen={true}>
              <ul className="space-y-4 text-text-secondary">
                  {skill.commonMistakes.map((item, index) => (
                      <li key={index}>
                          <p className="font-semibold text-text-primary">❌ {item.mistake}</p>
                          <p className="pr-6 mt-1 text-sm">{item.explanation}</p>
                      </li>
                  ))}
              </ul>
              <NoteTaker noteKey={`${skill.skillName}::Common Mistakes to Avoid`} />
          </Accordion>
          
          <Accordion title="سؤالات مصاحبه" defaultOpen={true}>
              <ul className="list-disc pr-5 space-y-2 text-text-secondary">
                  {skill.interviewQuestions.map((question, index) => <li key={index}>{question}</li>)}
              </ul>
              <NoteTaker noteKey={`${skill.skillName}::Interview Questions`} />
          </Accordion>
      </section>
    </article>
  );
};