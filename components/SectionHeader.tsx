import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  isDark?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, isDark = false }) => {
  return (
    <div className="mb-12 flex flex-col md:flex-row items-end justify-between gap-4 border-b pb-8 border-slate-200">
      <div className="max-w-2xl">
        <div className="flex items-center gap-2 mb-2">
           <span className="h-2 w-2 rounded-full bg-lime-400"></span>
           <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Department</span>
        </div>
        <h2 className={`text-4xl md:text-5xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className={`text-lg max-w-sm ${isDark ? 'text-slate-400' : 'text-slate-500'} font-medium`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;