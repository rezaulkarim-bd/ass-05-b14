 import React, { use } from 'react';
import type { Technology } from '../types/Types';
import TechnologyCard from './TechnologyCard';

 interface TechnologiesProps{
  technologiesPromise : Promise<Technology[]>
 }
 const Technologies = ({technologiesPromise} :TechnologiesProps) => {
    const technologies = use(technologiesPromise);
    return (
        <div>
            <div>
                <h2 className="text-3xl font-bold">
                   Explore the{" "}
                      <span className="text-pink-500">Technologies</span>
                </h2>

                     <p className="text-gray-500">
                         Pick one technology per category to build your ideal stack.
                    </p>
           </div>
            
        
        <TechnologyCard></TechnologyCard>
        
        </div>
    )
 };
 
 export default Technologies;

// interface PlayersProps {
//     playersPromise : Promise<Iplayer[]>
//     coin : number
//     setCoin :Dispatch<SetStateAction<Iplayer[]>>
// }
// const Players = ({playersPromise,coin,setCoin} :PlayersProps) => {
    
//     const players = use(playersPromise);
