import React, { useRef, useEffect, useState, useMemo } from 'react';
import { deliveryPlanData } from '../deliveryPlanData';
import { PlanItem, Swimlane, RaidItem, RaidType, RagStatus } from '../types';
import { FlagIcon, ShieldCheckIcon, RocketLaunchIcon, ExclamationTriangleIcon, LayersIcon, ClipboardDocumentCheckIcon, UserGroupIcon, LightBulbIcon, FireIcon, LinkIcon, CalendarDaysIcon, QuestionMarkCircleIcon, CheckCircleIcon } from './Icons';

const swimlaneConfig: Record<Swimlane, { title: string; base: string; progress: string; }> = {
  'Governance & Approvals': { title: 'Governance & Approvals', base: 'bg-purple-100 border-purple-300', progress: 'bg-purple-400' },
  'UX & Design': { title: 'UX & Design', base: 'bg-pink-100 border-pink-300', progress: 'bg-pink-400' },
  'Dependencies': { title: 'Dependencies', base: 'bg-yellow-100 border-yellow-300', progress: 'bg-yellow-400' },
  'Squad A: Accounts & Payments': { title: 'Squad A', base: 'bg-blue-100 border-blue-300', progress: 'bg-blue-400' },
  'Squad B: Onboarding & Profile': { title: 'Squad B', base: 'bg-green-100 border-green-300', progress: 'bg-green-400' },
};

const swimlanes: Swimlane[] = [
  'Governance & Approvals',
  'UX & Design',
  'Dependencies',
  'Squad A: Accounts & Payments',
  'Squad B: Onboarding & Profile',
];

const totalSprints = 12;
const currentSprint = 8; // Updated current sprint to match latest SteerCo update

const getRaidStatusColor = (status: RaidItem['status']) => {
    const statusMap: { [key in RaidItem['status']]: string } = {
        'Active': 'bg-yellow-100 text-yellow-800',
        'In Progress': 'bg-orange-100 text-orange-800',
        'Mitigated': 'bg-blue-100 text-blue-800',
        'Validated': 'bg-blue-100 text-blue-800',
        'Done': 'bg-green-100 text-green-800',
        'Closed': 'bg-green-100 text-green-800',
        'Invalidated': 'bg-slate-100 text-slate-800',
    };
    return statusMap[status] || 'bg-slate-100 text-slate-800';
}

const raidConfig: Record<RaidType, { icon: React.FC<{className?: string}>; color: string; description: string }> = {
    'Risk': { icon: ExclamationTriangleIcon, color: 'text-red-500', description: 'A potential problem that has not happened yet but might adversely impact the project.' },
    'Assumption': { icon: LightBulbIcon, color: 'text-blue-500', description: 'Something believed to be true without proof. If it proves false, it typically becomes a risk or an issue.' },
    'Issue': { icon: FireIcon, color: 'text-orange-500', description: 'A problem or blocker that is actively happening now and needs to be addressed.' },
    'Dependency': { icon: LinkIcon, color: 'text-purple-500', description: 'A task or deliverable that your team needs from another team, or vice versa, to proceed.' },
};

const ItemIcon: React.FC<{ type: PlanItem['type'] }> = ({ type }) => {
    const iconClass = "w-4 h-4 mr-2 flex-shrink-0";
    if (type === 'Epic') return <LayersIcon className={`${iconClass} text-indigo-500`} />;
    if (type === 'Task') return <ClipboardDocumentCheckIcon className={`${iconClass} text-slate-500`} />;
    return null;
};

const MilestoneIcon: React.FC<{ name: string }> = ({ name }) => {
    const iconClass = "w-8 h-8";
    if (name.includes('Approval')) return <ShieldCheckIcon className={`${iconClass} text-purple-600`} />;
    if (name.includes('Go-Live')) return <RocketLaunchIcon className={`${iconClass} text-pink-600`} />;
    if (name.includes('Sign-off')) return <FlagIcon className={`${iconClass} text-red-600`} />;
    return <FlagIcon className={`${iconClass} text-indigo-600`} />;
};

export const DeliveryPlan: React.FC = () => {
  const { title, description, items, raidLog, steerCoUpdates } = deliveryPlanData;
  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const containerRef = useRef<HTMLDivElement>(null);
  const [lines, setLines] = useState<string[]>([]);
  const [hoveredItemId, setHoveredItemId] = useState<string | null>(null);
  const [activeRaidTab, setActiveRaidTab] = useState<RaidType>('Risk');

  const getRagColor = (status: RagStatus) => {
    switch (status) {
        case 'Green': return { bg: 'bg-green-100', text: 'text-green-800', border: 'border-green-300' };
        case 'Amber': return { bg: 'bg-yellow-100', text: 'text-yellow-800', border: 'border-yellow-300' };
        case 'Red': return { bg: 'bg-red-100', text: 'text-red-800', border: 'border-red-300' };
        default: return { bg: 'bg-slate-100', text: 'text-slate-800', border: 'border-slate-300' };
    }
  }

  const dependencyMap = useMemo(() => {
    const map: Record<string, { predecessors: string[], successors: string[] }> = {};
    items.forEach(item => {
        if (!map[item.id]) map[item.id] = { predecessors: [], successors: [] };
        map[item.id].predecessors = [...item.dependencies];
        item.dependencies.forEach(depId => {
            if (!map[depId]) map[depId] = { predecessors: [], successors: [] };
            map[depId].successors.push(item.id);
        });
    });
    return map;
  }, [items]);

  const getRelatedIds = (id: string | null): Set<string> => {
    if (!id) return new Set();
    const related = new Set<string>([id]);
    const toProcess = [id];
    const processed = new Set<string>();

    while (toProcess.length > 0) {
        const currentId = toProcess.shift();
        if (currentId && !processed.has(currentId)) {
            processed.add(currentId);
            const deps = dependencyMap[currentId];
            if (deps) {
                deps.predecessors.forEach(p => { related.add(p); toProcess.push(p); });
                deps.successors.forEach(s => { related.add(s); toProcess.push(s); });
            }
        }
    }
    return related;
  };
  
  const relatedIds = getRelatedIds(hoveredItemId);

  useEffect(() => {
    const calculateLines = () => {
      if (!containerRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();
      const newLines: string[] = [];

      items.forEach(item => {
        if (item.dependencies.length > 0) {
          const toRef = itemRefs.current[item.id];
          if (!toRef) return;
          const toRect = toRef.getBoundingClientRect();
          const toX = toRect.left - containerRect.left + 2;
          const toY = toRect.top - containerRect.top + toRect.height / 2;

          item.dependencies.forEach(depId => {
            const fromRef = itemRefs.current[depId];
            if (!fromRef) return;
            const fromRect = fromRef.getBoundingClientRect();
            let fromX = fromRect.right - containerRect.left - 2;
            const fromY = fromRect.top - containerRect.top + fromRect.height / 2;
            
            const fromItem = items.find(i => i.id === depId);
            if(fromItem?.type === 'Milestone') {
              fromX = fromRect.left - containerRect.left + fromRect.width / 2;
            }

            const path = `M ${fromX} ${fromY} C ${fromX + 50} ${fromY}, ${toX - 50} ${toY}, ${toX} ${toY}`;
            newLines.push(path);
          });
        }
      });
      setLines(newLines);
    };

    calculateLines();
    const observer = new ResizeObserver(calculateLines);
    if(containerRef.current) observer.observe(containerRef.current);
    
    return () => observer.disconnect();
  }, [items]);
  
  const filteredRaidItems = raidLog.filter(item => item.type === activeRaidTab);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
      <header className="pb-6 border-b border-slate-200 mb-8">
        <h1 className="text-4xl font-bold text-brand-primary">{title}</h1>
        <p className="mt-2 text-text-secondary max-w-4xl">{description}</p>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-slate-50 p-3 rounded-lg"><p className="text-2xl font-bold text-brand-secondary">{totalSprints}</p><p className="text-sm text-text-secondary">Total Sprints</p></div>
            <div className="bg-slate-50 p-3 rounded-lg"><p className="text-2xl font-bold text-brand-secondary">{items.filter(i=>i.type === 'Milestone').length}</p><p className="text-sm text-text-secondary">Key Milestones</p></div>
            <div className="bg-slate-50 p-3 rounded-lg"><p className="text-2xl font-bold text-brand-secondary">{items.filter(i=>i.type === 'Epic').length}</p><p className="text-sm text-text-secondary">Epics</p></div>
            <div className="bg-slate-50 p-3 rounded-lg"><p className="text-2xl font-bold text-brand-secondary">{raidLog.filter(r=>r.impact === 'High').length}</p><p className="text-sm text-text-secondary">High-Impact RAID Items</p></div>
        </div>
      </header>

      <div className="overflow-x-auto pb-4">
        <div ref={containerRef} className="relative" style={{ minWidth: '1400px' }}>
          {/* Timeline Header */}
          <div className="grid grid-cols-12 gap-2 text-center text-sm font-semibold text-text-secondary sticky top-0 bg-white/80 backdrop-blur-sm z-10 py-2 border-b">
            {Array.from({ length: totalSprints }, (_, i) => (
              <div key={i}>
                <p>Sprint {i + 1}</p>
                { (i) % 3 === 0 && <p className="text-xs font-bold text-brand-secondary mt-1">Q{Math.floor(i/3)+3} `24</p> }
              </div>
            ))}
          </div>

          {/* Swimlanes */}
          <div className="mt-2 space-y-2">
            {swimlanes.map((swimlane) => (
              <div key={swimlane} className="flex items-center min-h-[5rem] border-t border-slate-100 pt-2">
                <div className="w-40 text-right pr-4 font-bold text-text-primary text-xs sticky left-0 bg-white">
                  {swimlaneConfig[swimlane].title}
                </div>
                <div className="flex-1 grid grid-cols-12 gap-2 h-full relative">
                  {items.filter(item => item.swimlane === swimlane).map(item => (
                    <div
                      key={item.id}
                      ref={el => itemRefs.current[item.id] = el}
                      onMouseEnter={() => setHoveredItemId(item.id)}
                      onMouseLeave={() => setHoveredItemId(null)}
                      className={`h-full transition-all duration-300 ${hoveredItemId && !relatedIds.has(item.id) ? 'opacity-30' : 'opacity-100'}`}
                      style={{ gridColumn: `${item.startSprint} / span ${item.sprints}` }}
                    >
                      {item.type === 'Milestone' ? (
                        <div className={`flex flex-col items-center justify-center h-full group cursor-pointer ${item.startSprint > currentSprint ? 'opacity-75' : ''}`}>
                            <MilestoneIcon name={item.name} />
                            <p className="text-[10px] text-center mt-1 font-semibold text-text-secondary group-hover:text-brand-primary">{item.name}</p>
                        </div>
                      ) : (
                        <div title={`${item.name} - ${item.progress}% complete`} className={`relative p-2 rounded-md h-full flex items-center justify-start text-left text-xs font-semibold shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer border ${swimlaneConfig[item.swimlane].base} text-slate-800 overflow-hidden ${item.startSprint > currentSprint ? 'opacity-75' : ''}`}>
                            <div className="absolute top-0 left-0 h-full bg-black/5" style={{width: `${item.progress}%`}} />
                            <div className={`absolute top-0 left-0 h-full ${swimlaneConfig[item.swimlane].progress}`} style={{width: `${item.progress}%`, opacity: 0.5}} />
                            <ItemIcon type={item.type} />
                            <span className="relative z-10">{item.name}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Today Marker */}
          <div className="absolute top-0 bottom-0 border-r-2 border-red-500 border-dashed z-20 pointer-events-none" style={{ left: `${(currentSprint - 1) / totalSprints * 100}%`, marginLeft: `${100 / totalSprints / 2}%` }}>
             <div className="absolute -top-5 -right-3 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">TODAY</div>
          </div>


          <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0" aria-hidden="true">
            <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto" className="transition-colors duration-300 text-slate-400"><polygon points="0 0, 10 3.5, 0 7" /></marker>
                <marker id="arrowhead-active" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto" className="text-brand-primary"><polygon points="0 0, 10 3.5, 0 7" fill="currentColor"/></marker>
            </defs>
            {items.flatMap(item => item.dependencies.map(depId => {
                 const isRelated = relatedIds.has(item.id) && relatedIds.has(depId);
                 return { from: depId, to: item.id, isRelated };
            })).map(({from, to, isRelated}, i) => {
                 const fromRef = itemRefs.current[from];
                 const toRef = itemRefs.current[to];
                 const containerRect = containerRef.current?.getBoundingClientRect();
                 if (!fromRef || !toRef || !containerRect) return null;

                 const fromRect = fromRef.getBoundingClientRect();
                 const toRect = toRef.getBoundingClientRect();
                 const toX = toRect.left - containerRect.left;
                 const toY = toRect.top - containerRect.top + toRect.height / 2;
                 let fromX = fromRect.right - containerRect.left;
                 const fromY = fromRect.top - containerRect.top + fromRect.height / 2;
                 
                 const fromItem = items.find(i => i.id === from);
                 if(fromItem?.type === 'Milestone') {
                   fromX = fromRect.left - containerRect.left + fromRect.width / 2;
                 }


                 const path = `M ${fromX} ${fromY} C ${fromX + 50} ${fromY}, ${toX - 50} ${toY}, ${toX} ${toY}`;

                 return <path key={i} d={path} strokeWidth={isRelated ? "2.5" : "1.5"} fill="none" className={`transition-all duration-300 ${isRelated ? 'stroke-brand-primary z-10' : 'stroke-slate-400 stroke-dasharray-2,4'}`} markerEnd={`url(#${isRelated ? 'arrowhead-active' : 'arrowhead'})`} />;
            })}
          </svg>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-brand-primary mb-2">RAID Log</h2>
        <p className="text-text-secondary mb-4 max-w-3xl">A RAID log is a key governance tool for tracking Risks, Assumptions, Issues, and Dependencies. It provides a central place to manage uncertainty and blockers.</p>
        
        <div className="border-b border-slate-200 flex space-x-4">
            {(Object.keys(raidConfig) as RaidType[]).map(tab => (
                 <button 
                    key={tab} 
                    onClick={() => setActiveRaidTab(tab)}
                    className={`flex items-center space-x-2 py-2 px-3 text-sm font-semibold border-b-2 transition-all ${activeRaidTab === tab ? `border-brand-primary ${raidConfig[tab].color}`: 'border-transparent text-text-secondary hover:text-text-primary'}`}
                >
                    {React.createElement(raidConfig[tab].icon, { className: 'w-5 h-5' })}
                    <span>{tab}s</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${activeRaidTab === tab ? 'bg-brand-primary/10' : 'bg-slate-200'}`}>{raidLog.filter(i => i.type === tab).length}</span>
                </button>
            ))}
        </div>

        <div className="mt-4">
             <p className="text-sm text-text-secondary p-4 bg-slate-50 rounded-lg border border-slate-200">{raidConfig[activeRaidTab].description}</p>
        </div>

        <div className="bg-white rounded-lg border border-slate-200 mt-4">
          <div className="hidden md:grid grid-cols-12 gap-4 p-4 font-bold text-sm text-text-primary border-b bg-slate-100 rounded-t-lg">
              <div className="col-span-1">Impact</div>
              <div className="col-span-4">Description</div>
              <div className="col-span-4">Action / Mitigation</div>
              <div className="col-span-2">Owner</div>
              <div className="col-span-1">Status</div>
          </div>
          {filteredRaidItems.map(item => (
            <div key={item.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 border-b last:border-b-0 items-start md:items-center">
              <div className="col-span-1 md:col-span-1 flex items-center">
                <span className="md:hidden font-bold text-xs mr-2">Impact:</span>
                <span className={`px-2 py-1 text-xs font-bold rounded-full ${item.impact === 'High' ? 'bg-red-100 text-red-800' : item.impact === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}>
                    {item.impact}
                </span>
              </div>
              <p className="col-span-1 md:col-span-4 text-sm text-text-secondary"><span className="md:hidden font-bold text-xs">Description: </span>{item.description}</p>
              <p className="col-span-1 md:col-span-4 text-sm text-text-secondary"><span className="md:hidden font-bold text-xs">Action: </span>{item.action}</p>
              <div className="col-span-1 md:col-span-2 text-sm text-text-secondary flex items-center">
                <span className="md:hidden font-bold text-xs mr-2">Owner:</span>
                <UserGroupIcon className="w-4 h-4 mr-2 text-slate-400 flex-shrink-0"/>
                {item.owner}
              </div>
              <div className="col-span-1 md:col-span-1">
                 <span className="md:hidden font-bold text-xs mr-2">Status:</span>
                 <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getRaidStatusColor(item.status)}`}>
                    {item.status}
                 </span>
              </div>
            </div>
          ))}
          {filteredRaidItems.length === 0 && (
             <p className="text-center text-text-secondary p-8">No {activeRaidTab}s logged at this time.</p>
          )}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-brand-primary mb-2">Weekly SteerCo Update Timeline</h2>
        <p className="text-text-secondary mb-8 max-w-3xl">A chronological record of weekly status reports presented to the steering committee, tracking progress, risks, and key decisions over time.</p>
        
        <div className="relative pl-6 border-l-2 border-slate-200">
          <div className="space-y-12">
              {steerCoUpdates && steerCoUpdates.slice().reverse().map((update, index) => (
                  <div key={index} className="relative">
                      <div className={`absolute -left-[3.3rem] top-1 w-8 h-8 rounded-full flex items-center justify-center shadow-sm ring-4 ring-white ${getRagColor(update.ragStatus).bg}`}>
                          {update.ragStatus === 'Green' && <CheckCircleIcon className={`w-6 h-6 ${getRagColor(update.ragStatus).text}`} />}
                          {update.ragStatus === 'Amber' && <ExclamationTriangleIcon className={`w-5 h-5 ${getRagColor(update.ragStatus).text}`} />}
                          {update.ragStatus === 'Red' && <FireIcon className={`w-5 h-5 ${getRagColor(update.ragStatus).text}`} />}
                      </div>
                      
                      <div className="pl-6">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                            <div className="flex items-center text-md font-semibold text-text-primary">
                              <CalendarDaysIcon className="w-5 h-5 mr-2 text-text-secondary" />
                              <span>{update.date}</span>
                            </div>
                            <span className={`mt-2 sm:mt-0 px-3 py-1 text-xs font-bold rounded-full border ${getRagColor(update.ragStatus).border} bg-white shadow-sm ${getRagColor(update.ragStatus).text}`}>
                              STATUS: {update.ragStatus.toUpperCase()}
                            </span>
                          </div>
                          
                          <div className={`p-4 rounded-lg border-l-4 ${getRagColor(update.ragStatus).border} bg-slate-50`}>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                                  <div>
                                      <h4 className="flex items-center text-md font-semibold text-green-800 mb-2">
                                          <CheckCircleIcon className="w-5 h-5 mr-2" />
                                          Highlights
                                      </h4>
                                      <ul className="list-disc pl-6 space-y-1.5 text-sm text-text-secondary">
                                          {update.highlights.map((item, idx) => <li key={`h-${index}-${idx}`}>{item}</li>)}
                                      </ul>
                                  </div>
                                  <div>
                                      <h4 className="flex items-center text-md font-semibold text-red-800 mb-2">
                                          <ExclamationTriangleIcon className="w-5 h-5 mr-2" />
                                          Lowlights / Challenges
                                      </h4>
                                      <ul className="list-disc pl-6 space-y-1.5 text-sm text-text-secondary">
                                          {update.lowlights.map((item, idx) => <li key={`l-${index}-${idx}`}>{item}</li>)}
                                      </ul>
                                  </div>
                                  <div>
                                      <h4 className="flex items-center text-md font-semibold text-orange-800 mb-2">
                                          <FireIcon className="w-5 h-5 mr-2" />
                                          New / Escalated RAID Items
                                      </h4>
                                      <ul className="list-disc pl-6 space-y-1.5 text-sm text-text-secondary">
                                          {update.newRisks.length > 0 ? update.newRisks.map((item, idx) => <li key={`r-${index}-${idx}`}>{item}</li>) : <li>N/A</li>}
                                      </ul>
                                  </div>
                                  <div>
                                      <h4 className="flex items-center text-md font-semibold text-blue-800 mb-2">
                                          <QuestionMarkCircleIcon className="w-5 h-5 mr-2" />
                                          Asks for Help
                                      </h4>
                                      <ul className="list-disc pl-6 space-y-1.5 text-sm text-text-secondary">
                                          {update.asks.length > 0 ? update.asks.map((item, idx) => <li key={`a-${index}-${idx}`}>{item}</li>) : <li>N/A</li>}
                                      </ul>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              ))}
          </div>
      </div>
      </section>
    </div>
  );
};