import React from 'react';
import  type { Technology } from '../types/Technology';
import { toast } from 'react-toastify';




interface Props {
  tech: Technology;
  onAdd: (tech: Technology) => void;
  isAdded: boolean;
}


interface Props {
  tech: Technology;
  onAdd: (tech: Technology) => void;
  isAdded: boolean;
}

export default function TechnologyCard({ tech, onAdd, isAdded }: Props) {
  const handleAddClick = () => {
    onAdd(tech);
    toast.success(`${tech.name} added to your stack!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-center mb-3">
          <span className="text-2xl">{tech.icon}</span>
          {tech.badge && (
            <span className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full ${tech.badgeColor || 'bg-gray-100 text-gray-700'}`}>
              {tech.badge}
            </span>
          )}
        </div>
        <h3 className="font-bold text-gray-900 text-base mb-1">{tech.name}</h3>
        <p className="text-xs text-gray-500 mb-4 leading-relaxed">{tech.description}</p>
      </div>
      <div>
        <div className="flex justify-between items-center text-xs text-gray-500 pt-3 border-t border-gray-100 mb-4">
          <div className="flex gap-2">
            <span className="bg-gray-50 px-2 py-1 rounded text-gray-600">{tech.category}</span>
            <span className="bg-gray-50 px-2 py-1 rounded text-gray-600">{tech.difficulty}</span>
          </div>
          <span className="flex items-center gap-1 font-medium text-gray-700">
            <span className="text-amber-400">★</span> {tech.rating}
          </span>
        </div>
        <button
          onClick={handleAddClick}
          disabled={isAdded}
          className={`w-full py-2.5 rounded-xl text-xs font-medium transition ${
            isAdded 
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
              : 'bg-gray-900 text-white hover:bg-gray-800'
          }`}
        >
          {isAdded ? 'Added to Stack' : 'Add to Stack'}
        </button>
      </div>
    </div>
  );
}







