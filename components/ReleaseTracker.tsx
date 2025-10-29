
import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { ChartPieIcon, ClockIcon, TargetIcon, BeakerIcon, ArrowTrendingUpIcon, ArrowTrendingDownIcon, ExclamationTriangleIcon, CheckCircleIcon, CubeIcon, ChartBarIcon } from './Icons';

// --- UTILITY FUNCTIONS ---

const runMonteCarlo = (work: number, data: number[], iterations: number): Record<number, number> => {
    if (data.length === 0) return {};
    const outcomes: number[] = [];
    for (let i = 0; i < iterations; i++) {
        let remainingWork = work;
        let sprints = 0;
        while (remainingWork > 0) {
            sprints++;
            const randomIndex = Math.floor(Math.random() * data.length);
            remainingWork -= data[randomIndex];
            if (sprints > 200) break; // Safety break
        }
        outcomes.push(sprints);
    }
    const histogram: Record<number, number> = {};
    outcomes.forEach(sprintCount => {
        histogram[sprintCount] = (histogram[sprintCount] || 0) + 1;
    });
    return histogram;
};

const getProbabilitiesFromHistogram = (histogram: Record<number, number>, totalSimulations: number) => {
    const sortedKeys = Object.keys(histogram).map(Number).sort((a, b) => a - b);
    const probabilities: { sprints: number; probability: number }[] = [];
    let cumulativeCount = 0;
    sortedKeys.forEach(key => {
        cumulativeCount += histogram[key];
        probabilities.push({
            sprints: key,
            probability: Math.round((cumulativeCount / totalSimulations) * 100),
        });
    });
    return probabilities;
};


// --- SUB-COMPONENTS ---

interface BurndownChartProps {
    data: {
        ideal: { x: number; y: number }[];
        actual: { x: number; y: number }[];
        cone: { x: number; p15: number; p85: number }[];
    };
    totalSprints: number;
    totalScope: number;
}

const BurndownChart: React.FC<BurndownChartProps> = ({ data, totalSprints, totalScope }) => {
    const width = 800;
    const height = 400;
    const margin = { top: 20, right: 20, bottom: 40, left: 60 };
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;

    const xScale = (sprint: number) => margin.left + (sprint / totalSprints) * chartWidth;
    const yScale = (scope: number) => margin.top + chartHeight - (scope / totalScope) * chartHeight;

    const toPath = (points: { x: number, y: number }[]) => points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${xScale(p.x)} ${yScale(p.y)}`).join(' ');

    const conePath = `${toPath(data.cone.map(p => ({ x: p.x, y: p.p85 })))} ${toPath(data.cone.map(p => ({ x: p.x, y: p.p15 })).reverse()).replace('M', 'L')} Z`;

    return (
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto" aria-labelledby="chart-title" role="img">
            <title id="chart-title">Release Burndown Chart</title>
            {/* Axes */}
            <line x1={margin.left} y1={margin.top} x2={margin.left} y2={margin.top + chartHeight} stroke="#94a3b8" />
            <line x1={margin.left} y1={margin.top + chartHeight} x2={margin.left + chartWidth} y2={margin.top + chartHeight} stroke="#94a3b8" />
            
            {/* Y-Axis Labels */}
            {Array.from({ length: 5 }).map((_, i) => {
                const y = margin.top + (i / 4) * chartHeight;
                const value = Math.round(totalScope * (1 - i / 4));
                return (
                    <g key={i}>
                        <text x={margin.left - 8} y={y} textAnchor="end" dominantBaseline="middle" fontSize="12" fill="#64748b">{value}</text>
                        <line x1={margin.left} y1={y} x2={margin.left + chartWidth} y2={y} stroke="#e2e8f0" strokeDasharray="2,2"/>
                    </g>
                );
            })}
            <text transform={`translate(${margin.left-45}, ${margin.top + chartHeight/2}) rotate(-90)`} textAnchor="middle" fontSize="12" fill="#64748b" fontWeight="bold">Story Points</text>

            {/* X-Axis Labels */}
            {Array.from({ length: totalSprints + 1 }).map((_, i) => (
                 <g key={i}>
                    <text x={xScale(i)} y={margin.top + chartHeight + 16} textAnchor="middle" fontSize="12" fill="#64748b">{`S${i}`}</text>
                </g>
            ))}
             <text x={margin.left + chartWidth/2} y={margin.top + chartHeight + 35} textAnchor="middle" fontSize="12" fill="#64748b" fontWeight="bold">Sprints</text>

            {/* Data Paths */}
            {data.cone.length > 0 && <path d={conePath} fill="#4f46e5" fillOpacity="0.1" />}
            <path d={toPath(data.ideal)} stroke="#a78bfa" strokeWidth="2" strokeDasharray="4,4" fill="none" />
            <path d={toPath(data.actual)} stroke="#4f46e5" strokeWidth="3" fill="none" />
            {data.actual.map(p => <circle key={`p-${p.x}`} cx={xScale(p.x)} cy={yScale(p.y)} r="4" fill="#4f46e5" />)}
        </svg>
    );
};

// --- MAIN COMPONENT ---

export const ReleaseTracker: React.FC = () => {
    const [totalScope, setTotalScope] = useState(200);
    const [totalSprints, setTotalSprints] = useState(10);
    const [sprintData, setSprintData] = useState<{ sprint: number, completed: string }[]>(
        Array.from({ length: 10 }, (_, i) => ({ sprint: i + 1, completed: i < 4 ? String(Math.round(15 + Math.random() * 10)) : '' }))
    );

    const [forecastState, setForecastState] = useState({
        initialScope: '200',
        completedSoFar: '0',
        scopeCreep: '0',
        historicalVelocities: ''
    });

    const [forecastResult, setForecastResult] = useState<{histogram: Record<number, number>, probabilities: {sprints: number, probability: number}[]} | null>(null);

    // Memoized calculation for burndown data and projections
    const burndownAnalysis = useMemo(() => {
        const actualPoints: { x: number, y: number }[] = [{ x: 0, y: totalScope }];
        let remainingScope = totalScope;
        const completedVelocities: number[] = [];

        sprintData.slice(0, totalSprints).forEach(s => {
            const completed = Number(s.completed);
            if (!isNaN(completed) && s.completed.trim() !== '') {
                remainingScope -= completed;
                actualPoints.push({ x: s.sprint, y: Math.max(0, remainingScope) });
                completedVelocities.push(completed);
            }
        });

        const lastCompletedSprint = actualPoints[actualPoints.length - 1];

        // Projection Simulation
        const cone: { x: number, p15: number, p85: number }[] = [ { x: lastCompletedSprint.x, p15: lastCompletedSprint.y, p85: lastCompletedSprint.y } ];
        let finalSprint85p = -1;

        if (completedVelocities.length >= 3) {
            const iterations = 5000;
            const remainingSprints = totalSprints - lastCompletedSprint.x;
            const simulationResults: number[][] = [];
            
            for (let i = 0; i < iterations; i++) {
                let currentWork = lastCompletedSprint.y;
                const run: number[] = [];
                for (let s = 0; s < remainingSprints; s++) {
                    const randomIndex = Math.floor(Math.random() * completedVelocities.length);
                    currentWork -= completedVelocities[randomIndex];
                    run.push(Math.max(0, currentWork));
                }
                simulationResults.push(run);
            }

            for (let s = 0; s < remainingSprints; s++) {
                const sprintOutcomes = simulationResults.map(run => run[s]).sort((a, b) => a - b);
                cone.push({
                    x: lastCompletedSprint.x + s + 1,
                    p15: sprintOutcomes[Math.floor(iterations * 0.15)],
                    p85: sprintOutcomes[Math.floor(iterations * 0.85)]
                });
            }
            
            const completionSprints = simulationResults.map(run => {
                const sprintIndex = run.findIndex(work => work === 0);
                return sprintIndex === -1 ? Infinity : lastCompletedSprint.x + sprintIndex + 1;
            }).sort((a,b)=> a-b);
            
            finalSprint85p = completionSprints[Math.floor(iterations * 0.85)];
        }
        
        const isAtRisk = finalSprint85p > totalSprints;
        const isOnTrack = finalSprint85p > 0 && finalSprint85p <= totalSprints;

        return {
            chartData: {
                ideal: [{ x: 0, y: totalScope }, { x: totalSprints, y: 0 }],
                actual: actualPoints,
                cone: cone,
            },
            completedVelocities,
            remainingScope: lastCompletedSprint.y,
            lastSprintNum: lastCompletedSprint.x,
            finalSprint85p,
            isAtRisk,
            isOnTrack
        };
    }, [totalScope, totalSprints, sprintData]);

    // Sync Burndown data to Forecast tool
    useEffect(() => {
        const completedSoFar = totalScope - burndownAnalysis.remainingScope;
        setForecastState(prev => ({
            ...prev,
            initialScope: String(totalScope),
            completedSoFar: String(completedSoFar),
            historicalVelocities: burndownAnalysis.completedVelocities.join(', ')
        }));
    }, [totalScope, burndownAnalysis]);


    const handleSprintDataChange = (index: number, value: string) => {
        const newData = [...sprintData];
        newData[index].completed = value.replace(/[^0-9]/g, '');
        setSprintData(newData);
    };

    const handleRunForecast = useCallback(() => {
        const work = Number(forecastState.initialScope) - Number(forecastState.completedSoFar) + Number(forecastState.scopeCreep);
        const velocities = forecastState.historicalVelocities.split(',').map(s=>s.trim()).map(Number).filter(n => n > 0);
        
        if (work > 0 && velocities.length > 0) {
            const iterations = 10000;
            const histogram = runMonteCarlo(work, velocities, iterations);
            const probabilities = getProbabilitiesFromHistogram(histogram, iterations);
            setForecastResult({ histogram, probabilities });
        } else {
            setForecastResult(null);
        }
    }, [forecastState]);


    return (
        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 space-y-12">
            {/* --- Section 1: Release Burndown --- */}
            <section>
                <header className="pb-6 border-b border-slate-200 mb-8">
                    <h2 className="text-3xl font-bold text-brand-primary flex items-center"><ChartPieIcon className="w-8 h-8 mr-3"/>Release Burndown Simulation</h2>
                    <p className="mt-2 text-text-secondary max-w-4xl">Visualize your release progress against an ideal path and see a data-driven forecast of your completion date based on your team's actual performance.</p>
                </header>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1 space-y-4">
                        <h3 className="text-lg font-semibold text-text-primary">Configuration</h3>
                        <div>
                           <label htmlFor="totalScope" className="block text-sm font-medium text-text-secondary">Total Release Scope (Story Points)</label>
                           <input id="totalScope" type="number" value={totalScope} onChange={e => setTotalScope(Number(e.target.value))} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"/>
                        </div>
                         <div>
                           <label htmlFor="totalSprints" className="block text-sm font-medium text-text-secondary">Total Sprints Planned</label>
                           <input id="totalSprints" type="number" value={totalSprints} onChange={e => setTotalSprints(Number(e.target.value))} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"/>
                        </div>
                        
                        <h3 className="text-lg font-semibold text-text-primary pt-4">Sprint Progress</h3>
                        <div className="max-h-80 overflow-y-auto pr-2 space-y-2">
                            {sprintData.slice(0, totalSprints).map((s, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <label className="w-16 text-sm text-text-secondary">Sprint {s.sprint}</label>
                                    <input type="text" value={s.completed} onChange={e => handleSprintDataChange(i, e.target.value)} placeholder="Points" className="block w-full px-3 py-1.5 bg-white border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"/>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                       <div className="bg-slate-50/50 border border-slate-200 rounded-lg p-4">
                            <BurndownChart data={burndownAnalysis.chartData} totalSprints={totalSprints} totalScope={totalScope} />
                            <div className="flex justify-center space-x-6 text-sm text-text-secondary mt-2">
                                <div className="flex items-center"><span className="w-4 h-0.5 bg-brand-primary inline-block mr-2"></span>Actual</div>
                                <div className="flex items-center"><span className="w-4 h-0.5 border-t-2 border-dashed border-purple-400 inline-block mr-2"></span>Ideal</div>
                                <div className="flex items-center"><span className="w-4 h-4 bg-brand-primary/10 inline-block mr-2"></span>Forecast Range (15-85%)</div>
                            </div>
                       </div>
                       <div className="mt-4">
                           {burndownAnalysis.isAtRisk && (
                               <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 flex items-start">
                                   <ExclamationTriangleIcon className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                                   <div>
                                       <h4 className="font-bold">At Risk</h4>
                                       <p className="text-sm">The 85th percentile forecast (worst-case) of <span className="font-bold">Sprint {burndownAnalysis.finalSprint85p.toFixed(0)}</span> is beyond your planned <span className="font-bold">{totalSprints} sprints</span>. Consider discussing scope or timeline with stakeholders.</p>
                                   </div>
                               </div>
                           )}
                           {burndownAnalysis.isOnTrack && (
                               <div className="p-4 bg-green-50 border-l-4 border-green-400 text-green-800 flex items-start">
                                   <CheckCircleIcon className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                                   <div>
                                       <h4 className="font-bold">On Track</h4>
                                       <p className="text-sm">The 85th percentile forecast suggests completion by <span className="font-bold">Sprint {burndownAnalysis.finalSprint85p.toFixed(0)}</span>, which is within your planned <span className="font-bold">{totalSprints} sprints</span>.</p>
                                   </div>
                               </div>
                           )}
                       </div>
                    </div>
                </div>

            </section>
            
             {/* --- Section 2: In-flight Forecast --- */}
            <section>
                 <header className="pb-6 border-b border-slate-200 mb-8">
                    <h2 className="text-3xl font-bold text-brand-primary flex items-center"><BeakerIcon className="w-8 h-8 mr-3"/>In-Flight Monte Carlo Forecast</h2>
                    <p className="mt-2 text-text-secondary max-w-4xl">Your release is already in progress. Use this tool to re-forecast the completion date for the *remaining* work, accounting for scope changes and using your team's most recent performance data.</p>
                </header>

                <div className="grid lg:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-text-primary">Forecast Inputs</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                               <label htmlFor="f-initial" className="block text-sm font-medium text-text-secondary">Initial Scope</label>
                               <input id="f-initial" type="number" value={forecastState.initialScope} onChange={e => setForecastState({...forecastState, initialScope: e.target.value})} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"/>
                            </div>
                             <div>
                               <label htmlFor="f-completed" className="block text-sm font-medium text-text-secondary">Completed So Far</label>
                               <input id="f-completed" type="number" value={forecastState.completedSoFar} onChange={e => setForecastState({...forecastState, completedSoFar: e.target.value})} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"/>
                            </div>
                        </div>
                         <div>
                           <label htmlFor="f-creep" className="block text-sm font-medium text-text-secondary">Work Added (Scope Creep)</label>
                           <input id="f-creep" type="number" value={forecastState.scopeCreep} onChange={e => setForecastState({...forecastState, scopeCreep: e.target.value})} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"/>
                        </div>
                        <div>
                           <label htmlFor="f-data" className="block text-sm font-medium text-text-secondary">Historical Sprint Velocities (comma-separated)</label>
                           <textarea id="f-data" value={forecastState.historicalVelocities} onChange={e => setForecastState({...forecastState, historicalVelocities: e.target.value})} rows={3} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary" />
                        </div>
                        <button onClick={handleRunForecast} className="w-full bg-brand-secondary text-white font-bold py-2.5 px-4 rounded-lg hover:bg-brand-primary transition-colors flex items-center justify-center">Run Forecast</button>
                    </div>

                    <div className="bg-slate-50/50 border border-slate-200 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-text-primary">Forecast Results</h3>
                        {!forecastResult && <p className="mt-4 text-center text-text-secondary py-16">Run the forecast to see the results.</p>}
                        {forecastResult && (
                             <div className="mt-4">
                                <p className="text-sm font-semibold text-text-secondary mb-1">How many MORE sprints to finish?</p>
                                <div className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden bg-white">
                                     <table className="w-full">
                                         <thead className="bg-slate-100">
                                             <tr>
                                                 <th className="p-2 text-left font-semibold text-text-primary">Confidence</th>
                                                 <th className="p-2 text-left font-semibold text-text-primary">Time to Complete</th>
                                             </tr>
                                         </thead>
                                         <tbody>
                                             {forecastResult.probabilities.map(({sprints, probability}) => (
                                                <tr key={sprints} className={`border-t border-slate-200 ${[50, 85, 95].includes(probability) ? 'bg-green-50' : ''}`}>
                                                     <td className="p-2"><span className={`font-bold ${probability >= 85 ? 'text-green-700' : 'text-text-secondary'}`}>{probability}%</span></td>
                                                     <td className="p-2 text-text-secondary">within <span className="font-bold text-text-primary">{sprints}</span> more sprints</td>
                                                 </tr>
                                             ))}
                                         </tbody>
                                     </table>
                                </div>
                             </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};
