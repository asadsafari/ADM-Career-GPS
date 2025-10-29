
import React, { useState, useCallback, useRef, useEffect } from 'react';
import { GoogleGenAI, Type } from "@google/genai";
import { SparklesIcon, EyeIcon, FlagIcon, CheckCircleIcon, ScaleIcon, UserGroupIcon, ExclamationTriangleIcon } from './Icons';

interface CharterData {
    vision: string;
    mission: string;
    successCriteria: string[];
    scopeIn: string[];
    scopeOut: string[];
    stakeholders: { name: string; role: string }[];
    risks: string[];
}

const initialCharterData: CharterData = {
    vision: '',
    mission: '',
    successCriteria: [''],
    scopeIn: [''],
    scopeOut: [''],
    stakeholders: [{ name: '', role: '' }],
    risks: [''],
};

// Auto-resizing textarea hook
const useAutoResizeTextarea = (value: string) => {
    const ref = useRef<HTMLTextAreaElement>(null);
    useEffect(() => {
        const el = ref.current;
        if (el) {
            el.style.height = 'auto';
            el.style.height = `${el.scrollHeight}px`;
        }
    }, [value]);
    return ref;
};


interface EditableListProps {
    items: string[];
    onChange: (index: number, value: string) => void;
    onAdd: () => void;
    onRemove: (index: number) => void;
    placeholder: string;
}

const EditableList: React.FC<EditableListProps> = ({ items, onChange, onAdd, onRemove, placeholder }) => {
    return (
        <div className="space-y-2">
            {items.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                    <input
                        type="text"
                        value={item}
                        onChange={(e) => onChange(index, e.target.value)}
                        placeholder={placeholder}
                        className="w-full bg-slate-50 border border-slate-300 rounded-md text-sm p-2 focus:ring-1 focus:ring-brand-primary focus:border-brand-primary"
                    />
                    <button onClick={() => onRemove(index)} className="text-slate-400 hover:text-red-500" disabled={items.length <= 1}>&times;</button>
                </div>
            ))}
            <button onClick={onAdd} className="text-sm text-brand-primary font-semibold hover:underline">+ Add item</button>
        </div>
    );
};

interface StakeholderListProps {
    items: { name: string; role: string }[];
    onChange: (index: number, field: 'name' | 'role', value: string) => void;
    onAdd: () => void;
    onRemove: (index: number) => void;
}

const StakeholderList: React.FC<StakeholderListProps> = ({ items, onChange, onAdd, onRemove }) => {
     return (
        <div className="space-y-3">
            {items.map((item, index) => (
                <div key={index} className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
                    <input
                        type="text"
                        value={item.name}
                        onChange={(e) => onChange(index, 'name', e.target.value)}
                        placeholder="e.g., Jane Doe"
                        className="w-full sm:w-1/2 bg-slate-50 border border-slate-300 rounded-md text-sm p-2 focus:ring-1 focus:ring-brand-primary focus:border-brand-primary"
                    />
                     <input
                        type="text"
                        value={item.role}
                        onChange={(e) => onChange(index, 'role', e.target.value)}
                        placeholder="e.g., Product Owner"
                        className="w-full sm:w-1/2 bg-slate-50 border border-slate-300 rounded-md text-sm p-2 focus:ring-1 focus:ring-brand-primary focus:border-brand-primary"
                    />
                    <button onClick={() => onRemove(index)} className="text-slate-400 hover:text-red-500" disabled={items.length <= 1}>&times;</button>
                </div>
            ))}
            <button onClick={onAdd} className="text-sm text-brand-primary font-semibold hover:underline">+ Add stakeholder</button>
        </div>
    );
}

interface CharterSectionProps {
    icon: React.ElementType;
    title: string;
    description: string;
    children: React.ReactNode;
}

const CharterSection: React.FC<CharterSectionProps> = ({ icon: Icon, title, description, children }) => {
    return (
        <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
            <div className="flex items-center">
                <Icon className="w-7 h-7 mr-3 text-brand-secondary" />
                <h3 className="text-xl font-bold text-text-primary">{title}</h3>
            </div>
            <p className="text-sm text-text-secondary mt-1 ml-10">{description}</p>
            <div className="mt-4 ml-10">
                {children}
            </div>
        </div>
    )
}

const EditableTextarea: React.FC<{value: string, onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void, placeholder: string}> = ({ value, onChange, placeholder }) => {
    const textareaRef = useAutoResizeTextarea(value);
    return (
         <textarea
            ref={textareaRef}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full bg-slate-50 border border-slate-300 rounded-md text-sm p-2 focus:ring-1 focus:ring-brand-primary focus:border-brand-primary resize-none overflow-hidden"
            rows={1}
        />
    )
}

export const AgileCharter: React.FC = () => {
    const [projectIdea, setProjectIdea] = useState('');
    const [charterData, setCharterData] = useState<CharterData>(initialCharterData);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleGenerate = useCallback(async () => {
        if (!projectIdea) {
            setError('Please enter a project idea first.');
            return;
        }
        setIsLoading(true);
        setError(null);
        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: `Based on the following project idea, generate the content for each section of an Agile Project Charter. The idea is: "${projectIdea}".`,
                config: {
                    responseMimeType: "application/json",
                    responseSchema: {
                        type: Type.OBJECT,
                        properties: {
                            vision: { type: Type.STRING, description: "A concise, aspirational statement about the project's long-term impact." },
                            mission: { type: Type.STRING, description: "A clear, actionable statement of what the project will do to achieve the vision." },
                            successCriteria: { type: Type.ARRAY, items: { type: Type.STRING }, description: "3-5 specific, measurable outcomes that define success." },
                            scopeIn: { type: Type.ARRAY, items: { type: Type.STRING }, description: "A list of key features or functionalities that are definitely part of the project." },
                            scopeOut: { type: Type.ARRAY, items: { type: Type.STRING }, description: "A list of items that are explicitly not part of this project to manage expectations." },
                            stakeholders: { type: Type.ARRAY, items: { 
                                type: Type.OBJECT, 
                                properties: { 
                                    name: { type: Type.STRING }, 
                                    role: { type: Type.STRING } 
                                },
                                required: ['name', 'role']
                            }, description: "A list of key individuals or groups and their roles." },
                            risks: { type: Type.ARRAY, items: { type: Type.STRING }, description: "A list of potential risks or challenges for the project." },
                        },
                        required: ['vision', 'mission', 'successCriteria', 'scopeIn', 'scopeOut', 'stakeholders', 'risks']
                    }
                }
            });
            const parsed = JSON.parse(response.text);
            
            // Ensure arrays are not empty for the UI
            const sanitizedParsed = {
                ...parsed,
                successCriteria: parsed.successCriteria.length > 0 ? parsed.successCriteria : [''],
                scopeIn: parsed.scopeIn.length > 0 ? parsed.scopeIn : [''],
                scopeOut: parsed.scopeOut.length > 0 ? parsed.scopeOut : [''],
                stakeholders: parsed.stakeholders.length > 0 ? parsed.stakeholders : [{name: '', role: ''}],
                risks: parsed.risks.length > 0 ? parsed.risks : [''],
            }
            setCharterData(sanitizedParsed);
        } catch (e) {
            console.error(e);
            setError('Failed to generate charter. Please check your API key and try again.');
        } finally {
            setIsLoading(false);
        }
    }, [projectIdea]);

    // Handlers for list updates
    const handleListChange = (field: keyof CharterData, index: number, value: string) => {
        setCharterData(prev => {
            const newList = [...(prev[field] as string[])];
            newList[index] = value;
            return { ...prev, [field]: newList };
        });
    };
    const handleListAdd = (field: keyof CharterData) => {
        setCharterData(prev => ({ ...prev, [field]: [...(prev[field] as string[]), ''] }));
    };
    const handleListRemove = (field: keyof CharterData, index: number) => {
        setCharterData(prev => {
            const list = [...(prev[field] as string[])];
            if(list.length > 1) {
                list.splice(index, 1);
            }
            return { ...prev, [field]: list };
        });
    };
    
    // Handlers for stakeholder list updates
    const handleStakeholderChange = (index: number, subField: 'name' | 'role', value: string) => {
        setCharterData(prev => {
            const newStakeholders = [...prev.stakeholders];
            newStakeholders[index] = { ...newStakeholders[index], [subField]: value };
            return { ...prev, stakeholders: newStakeholders };
        });
    };
     const handleStakeholderAdd = () => {
        setCharterData(prev => ({ ...prev, stakeholders: [...prev.stakeholders, { name: '', role: '' }] }));
    };
    const handleStakeholderRemove = (index: number) => {
        setCharterData(prev => {
            const list = [...prev.stakeholders];
            if(list.length > 1) {
                list.splice(index, 1);
            }
            return { ...prev, stakeholders: list };
        });
    };

    return (
        <div className="space-y-8">
            <header className="pb-6 border-b border-slate-200">
                <h1 className="text-4xl font-bold text-brand-primary">ایجاد منشور پروژه (Agile Project Charter)</h1>
                <p className="mt-2 text-text-secondary max-w-4xl">Use this tool to create a lightweight, collaborative Agile Project Charter. It helps align stakeholders on the 'why', 'what', and 'who' before the first sprint begins.</p>
            </header>

            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
                 <h3 className="text-xl font-bold text-text-primary">Generate with AI</h3>
                 <p className="text-sm text-text-secondary mt-1 mb-4">Describe your project idea, and our AI assistant will draft a charter for you to refine.</p>
                <div className="flex flex-col sm:flex-row gap-2">
                    <input
                        type="text"
                        value={projectIdea}
                        onChange={(e) => setProjectIdea(e.target.value)}
                        placeholder="e.g., A mobile app for local gardeners to trade plants"
                        className="w-full bg-white border border-slate-300 rounded-md text-sm p-3 focus:ring-1 focus:ring-brand-primary focus:border-brand-primary"
                        disabled={isLoading}
                    />
                    <button onClick={handleGenerate} disabled={isLoading || !projectIdea} className="flex items-center justify-center gap-2 px-6 py-3 bg-brand-secondary text-white font-semibold rounded-md hover:bg-brand-primary transition-colors disabled:bg-slate-300 disabled:cursor-not-allowed whitespace-nowrap">
                        <SparklesIcon className="w-5 h-5" />
                        <span>{isLoading ? 'Generating...' : 'Generate Charter'}</span>
                    </button>
                </div>
                 {error && <p className="text-sm text-red-600 mt-2">{error}</p>}
            </div>

            <div className="space-y-6">
                <CharterSection icon={EyeIcon} title="Vision" description="The 'why'. A short, compelling statement about the ultimate purpose and impact of the project.">
                    <EditableTextarea value={charterData.vision} onChange={e => setCharterData({...charterData, vision: e.target.value})} placeholder="What is the North Star for this project?" />
                </CharterSection>
                <CharterSection icon={FlagIcon} title="Mission" description="The 'what'. What will the project team do to achieve the vision? Should be actionable and measurable.">
                    <EditableTextarea value={charterData.mission} onChange={e => setCharterData({...charterData, mission: e.target.value})} placeholder="What are we building, and for whom?" />
                </CharterSection>
                <CharterSection icon={CheckCircleIcon} title="Success Criteria" description="How we'll know we've won. What specific, measurable outcomes will prove this project was a success?">
                    <EditableList items={charterData.successCriteria} onChange={(i,v) => handleListChange('successCriteria', i, v)} onAdd={() => handleListAdd('successCriteria')} onRemove={(i) => handleListRemove('successCriteria', i)} placeholder="e.g., Achieve 1,000 active users in 3 months"/>
                </CharterSection>
                <CharterSection icon={ScaleIcon} title="Scope & Boundaries" description="Defining the edges of the project to manage expectations.">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                             <h4 className="font-semibold text-green-700 mb-2">In Scope</h4>
                             <EditableList items={charterData.scopeIn} onChange={(i,v) => handleListChange('scopeIn', i, v)} onAdd={() => handleListAdd('scopeIn')} onRemove={(i) => handleListRemove('scopeIn', i)} placeholder="e.g., User profiles and plant listings"/>
                        </div>
                         <div>
                             <h4 className="font-semibold text-red-700 mb-2">Out of Scope</h4>
                             <EditableList items={charterData.scopeOut} onChange={(i,v) => handleListChange('scopeOut', i, v)} onAdd={() => handleListAdd('scopeOut')} onRemove={(i) => handleListRemove('scopeOut', i)} placeholder="e.g., Real-time chat functionality (for V1)"/>
                        </div>
                    </div>
                </CharterSection>
                <CharterSection icon={UserGroupIcon} title="Stakeholders & Team" description="The 'who'. Identifying the key people involved in the project's success.">
                    <StakeholderList items={charterData.stakeholders} onChange={handleStakeholderChange} onAdd={handleStakeholderAdd} onRemove={handleStakeholderRemove} />
                </CharterSection>
                 <CharterSection icon={ExclamationTriangleIcon} title="Risks & Assumptions" description="What might go wrong, and what are we taking for granted? Identifying these early is key.">
                    <EditableList items={charterData.risks} onChange={(i,v) => handleListChange('risks', i, v)} onAdd={() => handleListAdd('risks')} onRemove={(i) => handleListRemove('risks', i)} placeholder="e.g., Dependency on a new third-party API"/>
                </CharterSection>
            </div>
        </div>
    );
};
