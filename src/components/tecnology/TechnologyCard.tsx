import React from 'react';
import  type { Technology } from '../types/Technology';

interface Props {
  tech: Technology;
  onAdd: (tech: Technology) => void;
  isAdded: boolean;
}

export default function TechnologyCard({ tech, onAdd, isAdded }: Props) {
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
          onClick={() => onAdd(tech)}
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




// interface TechnologyCardProps {
//   technology: Itechnology;

// }

//    const Technology = ({technology}:TechnologyCardProps)  => {
//      return (
//          <div className=" mt-3 rounded-2xl border border-gray-200 bg-yellow-50 p-8 shadow-sm ">

      
//       <div className="flex items-center justify-between">
//         <div className="text-4xl text-cyan-400">
//           ⚛
//         </div>

//         <span className="rounded-full bg-cyan-50 px-4 py-1.5 text-sm font-medium text-cyan-500">
//           Popular
//         </span>
//       </div>

//       {/* Content */}
//       <h2 className="mt-6 text-2xl font-bold text-slate-900">
//         React
//       </h2>

//       <p className="mt-2 min-h-[72px] text-sm leading-6 text-slate-500">
//         A declarative, component-based JavaScript library for building
//         modern user interfaces.
//       </p>

//       {/* Info */}
//       <div className="my-5 flex items-center justify-between border-t border-gray-100 pt-4">
//         <span className="rounded-md bg-gray-100 px-3 py-1 text-sm text-gray-500">
//           Frontend
//         </span>

//         <span className="text-sm text-gray-500">
//           Beginner-Friendly
//         </span>

//         <span className="text-sm font-semibold">
//           <span className="text-yellow-400">★</span> 4.9
//         </span>
//       </div>

//       {/* Button */}
//       <button className="w-full rounded-lg bg-slate-950 py-3 text-sm font-medium text-white transition hover:bg-slate-800">
//         Add to Stack
//       </button>
//     </div>
//   );
// };

// export default Technology;


