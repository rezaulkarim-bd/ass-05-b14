import  { useState } from 'react';

import { techList, type Technology } from '../types/Technology';


import StackPanel from '../stack/StackPanel';
import TechnologyCard from './TechnologyCard';

export default function TechnologiesPage() {
  
  const [stack, setStack] = useState<Technology[]>([techList[2], techList[6]]);

  const handleAdd = (tech: Technology) => {
    if (!stack.some((item) => item.id === tech.id)) {
      setStack([...stack, tech]);
    }
  };

  const handleRemove = (id: string) => {
    setStack(stack.filter((item) => item.id !== id));
  };

  const handleClearAll = () => {
    setStack([]);
  };

  return (
    <div className="min-h-screen bg-gray-200 py-10 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Explore the <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Technologies</span>
          </h1>
          <p className="text-sm text-gray-500 mt-1 ">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {techList.map((tech) => {
              const isAdded = stack.some((item) => item.id === tech.id);
              return (
                <TechnologyCard
                  key={tech.id}
                  tech={tech}
                  onAdd={handleAdd}
                  isAdded={isAdded}
                />
              );
            })}
          </div>

          <div className="lg:col-span-1">
            <StackPanel
              stack={stack}
              onRemove={handleRemove}
              onClearAll={handleClearAll}
            />
          </div>
        </div>
      </div>
    </div>
  );

}


