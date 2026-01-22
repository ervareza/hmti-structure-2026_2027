import React from 'react';
import { Member } from '../types';
import { motion } from 'framer-motion';

interface MemberCardProps {
  member: Member;
  variant?: 'primary' | 'secondary' | 'tertiary';
}

const MemberCard: React.FC<MemberCardProps> = ({ member }) => {
  // Generate a consistent avatar URL
  const avatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${member.name}&backgroundColor=transparent`;

  // Pastel colors matching the reference image style
  const bgColors = [
    'bg-[#EFEAFF]', // Purple-ish
    'bg-[#D8F3F6]', // Cyan-ish
    'bg-[#FFEBEB]', // Pink-ish
    'bg-[#E0F6E7]', // Green-ish
  ];

  // Select color based on member number to ensure variety but consistency
  const bgColor = bgColors[(member.no - 1) % bgColors.length];

  // Alternating border radius styles for organic feel (Top Left vs Top Right curves)
  const isEven = member.no % 2 === 0;
  const shapeClass = isEven 
    ? 'rounded-tl-[4rem] rounded-tr-[1rem]' 
    : 'rounded-tl-[1rem] rounded-tr-[4rem]';

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="flex flex-col w-full bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      {/* Pastel Background Shape Container */}
      <div className={`relative h-64 w-full ${bgColor} ${shapeClass} mx-auto mt-2 w-[95%] overflow-visible flex items-end justify-center`}>
        {/* Floating Tag for Leader */}
        {member.isLeader && (
           <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm text-slate-800 text-[10px] font-bold px-3 py-1 rounded-full z-10 shadow-sm uppercase tracking-wider">
             Lead
           </div>
        )}
        
        {/* Avatar Image */}
        <img 
          src={avatarUrl} 
          alt={member.name} 
          className="w-48 h-48 object-contain transform translate-y-2 drop-shadow-lg"
        />
      </div>

      {/* Info Container */}
      <div className="p-6 text-center">
        <h3 className="text-lg font-bold text-slate-900 leading-tight mb-1">
          {member.name}
        </h3>
        <p className="text-sm font-medium text-slate-400">{member.role}</p>
        
        {/* NIM (Optional/Subtle) */}
        <p className="text-[10px] text-slate-300 mt-2 font-mono">
          {member.nim}
        </p>
      </div>
    </motion.div>
  );
};

export default MemberCard;