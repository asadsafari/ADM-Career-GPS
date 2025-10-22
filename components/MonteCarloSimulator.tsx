import React, { useState, useMemo, useCallback } from 'react';
import { CubeIcon, ChartBarIcon } from './Icons';

type SimulationType = 'storyPoints' | 'throughput';

interface SimulationResult {
  histogram: Record<number, number>;
  probabilities: { sprints: number; probability: number }[];
  totalSimulations: number;
}

const runMonteCarloSimulation = (work: number, data: number[], iterations: number): SimulationResult => {
  const outcomes: number[] = [];
  for (let i = 0; i < iterations; i++) {
    let remainingWork = work;
    let sprints = 0;
    while (remainingWork > 0) {
      sprints++;
      const randomIndex = Math.floor(Math.random() * data.length);
      remainingWork -= data[randomIndex];
       if (sprints > 1000) break; // Safety break
    }
    outcomes.push(sprints);
  }

  const histogram: Record<number, number> = {};
  outcomes.forEach(sprintCount => {
    histogram[sprintCount] = (histogram[sprintCount] || 0) + 1;
  });

  const sortedKeys = Object.keys(histogram).map(Number).sort((a, b) => a - b);
  const probabilities: { sprints: number; probability: number }[] = [];
  let cumulativeCount = 0;
  sortedKeys.forEach(key => {
    cumulativeCount += histogram[key];
    probabilities.push({
      sprints: key,
      probability: Math.round((cumulativeCount / iterations) * 100),
    });
  });

  return { histogram, probabilities, totalSimulations: iterations };
};

const defaultData = {
    storyPoints: {
        work: '85',
        history: '18, 25, 15, 21, 23, 12, 19, 28, 17, 20',
        unit: 'sprints'
    },
    throughput: {
        work: '40',
        history: '5, 8, 4, 7, 5, 9, 6, 8, 4, 6',
        unit: 'weeks'
    }
}

export const MonteCarloSimulator: React.FC = () => {
    const [simulationType, setSimulationType] = useState<SimulationType>('storyPoints');
    const [workRemaining, setWorkRemaining] = useState(defaultData.storyPoints.work);
    const [historicalData, setHistoricalData] = useState(defaultData.storyPoints.history);
    const [numSimulations, setNumSimulations] = useState(10000);
    const [result, setResult] = useState<SimulationResult | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleTypeChange = (type: SimulationType) => {
        setSimulationType(type);
        setWorkRemaining(defaultData[type].work);
        setHistoricalData(defaultData[type].history);
        setResult(null);
    };

    const parsedData = useMemo(() => {
        return historicalData
            .split(',')
            .map(s => s.trim())
            .filter(Boolean)
            .map(Number)
            .filter(n => !isNaN(n) && n > 0);
    }, [historicalData]);

    const isValid = useMemo(() => {
        const work = Number(workRemaining);
        return !isNaN(work) && work > 0 && parsedData.length > 0;
    }, [workRemaining, parsedData]);
    
    const handleRunSimulation = useCallback(() => {
        if (!isValid) return;
        setIsLoading(true);
        setResult(null);
        // Use setTimeout to allow UI to update to loading state before blocking
        setTimeout(() => {
            const simulationResult = runMonteCarloSimulation(Number(workRemaining), parsedData, numSimulations);
            setResult(simulationResult);
            setIsLoading(false);
        }, 50);
    }, [isValid, workRemaining, parsedData, numSimulations]);

    return (
        <div className="grid lg:grid-cols-5 gap-8">
            <article className="prose prose-slate lg:col-span-3 max-w-none prose-h2:text-brand-primary prose-h3:text-brand-secondary prose-code:bg-slate-100 prose-code:p-1 prose-code:rounded prose-code:font-mono prose-blockquote:border-l-brand-primary">
               <h2>Beyond the Guess: Answering "When Will It Be Done?"</h2>
               <p>As an Agile Delivery Manager, you constantly face the question: <strong>“When will it be done?”</strong> Traditional single-point estimates (e.g., "5 sprints") are fragile because they ignore variability. Monte Carlo simulation offers a data-driven way to embrace this uncertainty and produce a probabilistic forecast.</p>
                
               <h3>What is Monte Carlo Simulation?</h3>
               <p>Imagine your team's historical performance is a multi-sided dice. Each face shows the work completed in a past sprint/week. A Monte Carlo simulation "rolls this dice" thousands of times to simulate thousands of possible futures, giving you a statistical range of outcomes instead of a single, risky guess.</p>

               <h4>Example 1: Using Story Points</h4>
               <blockquote>
                 <p><strong>Project Phoenix:</strong> 85 story points remaining.</p>
                 <p><strong>Historical Data (10 sprints):</strong> <code>18, 25, 15, 21, 23, 12, 19, 28, 17, 20</code></p>
               </blockquote>
               <p>Instead of just using the average (20 points), the simulation randomly samples from this *actual* data. In one run, it might take 5 sprints. In another, a lucky streak might finish it in 4. After 10,000 runs, we can see which outcomes are most likely.</p>

               <hr className="my-8" />
               
               <h3>What If We Don't Use Story Points? The Power of Throughput</h3>
                <p>You don't need story points. You can simply count the number of work items (tasks, stories, bugs) your team completes in a time period. This is called <strong>Throughput</strong>. It's objective and requires no estimation meetings.</p>
                
                <h4>Example 2: Using Throughput</h4>
                <blockquote>
                 <p><strong>Project Eagle:</strong> 40 work items remaining.</p>
                 <p><strong>Historical Data (10 weeks):</strong> <code>5, 8, 4, 7, 5, 9, 6, 8, 4, 6</code></p>
               </blockquote>
                <p>The logic is identical. The simulation randomly picks a weekly throughput from your history and repeats until the 40 items are complete. This generates a forecast in weeks, based on the pure count of delivered items.</p>
                
                <h3>The New, Data-Driven Conversation</h3>
                <p>This method transforms your conversations with stakeholders. Instead of a fragile date, you can present a confident, statistical forecast:</p>
                <p><em>"Based on our team's actual performance, there is a <strong>85% confidence level</strong> of finishing in <strong>6 sprints or less.</strong>"</em></p>
                <p>This is honest, defensible, and enables better business decisions by making risk transparent.</p>
            </article>

            <div className="lg:col-span-2">
                <div className="sticky top-28 bg-white rounded-lg shadow-lg border border-slate-200 p-6">
                    <h3 className="text-xl font-bold text-text-primary flex items-center mb-4"><CubeIcon className="w-6 h-6 mr-2 text-brand-primary" /> Interactive Simulator</h3>

                    {/* Controls */}
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-text-secondary">1. Select Forecast Model</label>
                            <div className="mt-1 grid grid-cols-2 gap-2 rounded-lg bg-slate-100 p-1">
                                <button onClick={() => handleTypeChange('storyPoints')} className={`px-3 py-1.5 text-sm font-semibold rounded-md transition-colors ${simulationType === 'storyPoints' ? 'bg-brand-primary text-white shadow' : 'text-slate-600 hover:bg-white/60'}`}>Story Points</button>
                                <button onClick={() => handleTypeChange('throughput')} className={`px-3 py-1.5 text-sm font-semibold rounded-md transition-colors ${simulationType === 'throughput' ? 'bg-brand-primary text-white shadow' : 'text-slate-600 hover:bg-white/60'}`}>Throughput</button>
                            </div>
                        </div>

                        <div>
                           <label htmlFor="work" className="block text-sm font-medium text-text-secondary">2. Work Remaining ({simulationType === 'storyPoints' ? 'Story Points' : 'Items'})</label>
                           <input type="number" id="work" value={workRemaining} onChange={e => setWorkRemaining(e.target.value)} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary" />
                        </div>
                        
                        <div>
                           <label htmlFor="data" className="block text-sm font-medium text-text-secondary">3. Historical Data (comma-separated)</label>
                           <textarea id="data" value={historicalData} onChange={e => setHistoricalData(e.target.value)} rows={3} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary" />
                           {parsedData.length === 0 && historicalData.trim().length > 0 && <p className="text-xs text-red-600 mt-1">Please enter valid, comma-separated numbers.</p>}
                        </div>

                        <button onClick={handleRunSimulation} disabled={!isValid || isLoading} className="w-full bg-brand-secondary text-white font-bold py-2 px-4 rounded-lg hover:bg-brand-primary transition-colors disabled:bg-slate-300 disabled:cursor-not-allowed flex items-center justify-center">
                            {isLoading ? 'Simulating...' : `Run ${numSimulations.toLocaleString()} Simulations`}
                        </button>
                    </div>

                    {/* Results */}
                    {isLoading && <div className="text-center p-8 text-text-secondary">Running simulations...</div>}
                    
                    {result && (
                        <div className="mt-6 pt-6 border-t border-slate-200">
                             <h4 className="text-lg font-bold text-text-primary flex items-center mb-4"><ChartBarIcon className="w-5 h-5 mr-2 text-brand-primary"/>Results</h4>
                            
                             {/* Chart */}
                             <div>
                                 <p className="text-sm font-semibold text-text-secondary mb-1">Outcome Distribution</p>
                                 <div className="w-full bg-slate-50 p-4 rounded-lg border border-slate-200 flex items-end justify-around h-40">
                                     {Object.entries(result.histogram).sort(([a], [b]) => Number(a) - Number(b)).map(([sprints, count]) => {
                                         // FIX: Ensure values passed to Math.max are numbers and that count is treated as a number for arithmetic operations to resolve TypeScript errors.
                                         const maxCount = Math.max(...Object.values(result.histogram).map(Number));
                                         const height = maxCount > 0 ? (Number(count) / maxCount) * 100 : 0;
                                         return (
                                            <div key={sprints} className="flex flex-col items-center justify-end h-full w-full text-center group">
                                                 <div className="text-xs font-bold text-text-primary mb-1 opacity-0 group-hover:opacity-100 transition-opacity">{Number(count).toLocaleString()}</div>
                                                 <div style={{ height: `${height}%`}} className="w-3/4 bg-brand-primary/20 hover:bg-brand-primary/50 rounded-t-sm border-t-2 border-brand-primary" title={`${Number(count).toLocaleString()} simulations finished in ${sprints} ${defaultData[simulationType].unit}`}></div>
                                                 <div className="text-[10px] font-semibold text-text-secondary mt-1">{sprints}</div>
                                             </div>
                                         )
                                     })}
                                 </div>
                                  <p className="text-center text-xs text-text-secondary mt-1">X-axis: {defaultData[simulationType].unit} to complete</p>
                             </div>

                             {/* Table */}
                             <div className="mt-4">
                                <p className="text-sm font-semibold text-text-secondary mb-1">Probabilistic Forecast</p>
                                <div className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
                                     <table className="w-full">
                                         <thead className="bg-slate-50">
                                             <tr>
                                                 <th className="p-2 text-left font-semibold text-text-primary">Confidence</th>
                                                 <th className="p-2 text-left font-semibold text-text-primary">Time to Complete</th>
                                             </tr>
                                         </thead>
                                         <tbody>
                                             {result.probabilities.map(({sprints, probability}) => (
                                                <tr key={sprints} className={`border-t border-slate-200 ${[85, 95].includes(probability) ? 'bg-green-50' : ''}`}>
                                                     <td className="p-2">
                                                        <span className={`font-bold ${probability >= 85 ? 'text-green-700' : 'text-text-secondary'}`}>{probability}%</span>
                                                        <span className="text-text-secondary"> chance</span>
                                                     </td>
                                                     <td className="p-2 text-text-secondary">within <span className="font-bold text-text-primary">{sprints}</span> {defaultData[simulationType].unit}</td>
                                                 </tr>
                                             ))}
                                         </tbody>
                                     </table>
                                </div>
                             </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};