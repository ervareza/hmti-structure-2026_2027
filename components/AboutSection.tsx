import React from 'react';
import { motion } from 'framer-motion';
import { Target, Flag, Building2, Users, Lightbulb, Handshake } from 'lucide-react';
import { ORGANIZATION_NAME, UNIVERSITY_NAME } from '../constants';
import SectionHeader from './SectionHeader';

const AboutSection: React.FC = () => {
  return (
    <div className="space-y-24">
      
      {/* Introduction */}
      <section className="flex flex-col md:flex-row gap-12 items-center">
         <div className="w-full md:w-1/2">
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               className="text-6xl md:text-8xl font-extrabold text-slate-900 leading-none mb-6"
            >
               We are <br/> <span className="text-lime-500">HMPS-TI.</span>
            </motion.div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">{UNIVERSITY_NAME}</h2>
            <p className="text-xl text-slate-500 leading-relaxed max-w-lg">
               The official student association for the Informatics Engineering Study Program at UNISBANK.
            </p>
         </div>
         <div className="w-full md:w-1/2 h-[400px] bg-slate-900 rounded-[3rem] relative overflow-hidden flex items-center justify-center p-12 group">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-slate-900 to-slate-900" />
             <div className="relative z-10 text-center space-y-4">
               <Building2 className="w-16 h-16 text-lime-400 mx-auto mb-4" />
               <h3 className="text-white text-3xl font-bold">
                 "Digital Campus,<br/>Entrepreneurial Spirit."
               </h3>
               <p className="text-slate-400">Semarang, Central Java</p>
             </div>
         </div>
      </section>

      {/* Director's Philosophy / Core Purpose */}
      <section className="bg-white border border-slate-100 rounded-[3rem] p-10 md:p-16 shadow-sm">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-slate-600 font-bold text-sm uppercase tracking-widest">
            <Lightbulb size={16} />
            Cabinet Philosophy 2026/2027
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            From "Walking Alone" to <span className="text-lime-500">"Moving Forward Together"</span>.
          </h3>
          <p className="text-lg text-slate-500 leading-relaxed">
            This vision and mission represent the commitment of the HMTI Director to transform the association into more than just a gathering place—it is an <strong>incubator for growth</strong>. We focus on active collaboration with other student associations and external organizations. Our goal is to create Informatics Engineering graduates who are not only technically skilled but also adaptable leaders with extensive networks.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section>
         <SectionHeader title="Strategic Plan" subtitle="Vision & Mission 2026/2027." />
         
         <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-lime-400 rounded-[2.5rem] p-10 md:p-14 relative overflow-hidden group">
               <div className="absolute top-10 right-10 p-4 bg-white/20 backdrop-blur-sm rounded-full">
                  <Target size={32} className="text-slate-900" />
               </div>
               <h3 className="text-3xl font-bold text-slate-900 mb-6">Vision</h3>
               <p className="text-slate-900 text-lg font-medium leading-relaxed">
                  Realizing HMPS Informatics Engineering of Stikubank University as an adaptive and achievement-oriented self-development ecosystem, and building collaborative connectivity across organizations to produce superior and competitive informatics graduates.
               </p>
            </div>

            {/* Mission */}
            <div className="bg-white border border-slate-200 rounded-[2.5rem] p-10 md:p-14 relative overflow-hidden">
               <div className="absolute top-10 right-10 p-4 bg-slate-100 rounded-full">
                  <Flag size={32} className="text-slate-900" />
               </div>
               <h3 className="text-3xl font-bold text-slate-900 mb-6">Mission</h3>
               <ul className="space-y-6">
                  <li className="flex items-start gap-4 text-slate-600 font-medium text-lg">
                    <span className="bg-lime-100 text-lime-700 p-2 rounded-lg shrink-0"><Users size={20} /></span>
                    <span>Facilitate an <strong>inclusive growth space</strong> for all members to hone technological hard skills and leadership soft skills.</span>
                  </li>
                  <li className="flex items-start gap-4 text-slate-600 font-medium text-lg">
                    <span className="bg-lime-100 text-lime-700 p-2 rounded-lg shrink-0"><Handshake size={20} /></span>
                    <span>Expand <strong>strategic cooperation networks</strong> with fellow HMPS, other student organizations, and IT communities.</span>
                  </li>
                  <li className="flex items-start gap-4 text-slate-600 font-medium text-lg">
                    <span className="bg-lime-100 text-lime-700 p-2 rounded-lg shrink-0"><Building2 size={20} /></span>
                    <span>Build a <strong>harmonious and supportive</strong> organizational climate, turning cohort differences into a complementary support system.</span>
                  </li>
                  <li className="flex items-start gap-4 text-slate-600 font-medium text-lg">
                    <span className="bg-lime-100 text-lime-700 p-2 rounded-lg shrink-0"><Lightbulb size={20} /></span>
                    <span>Present <strong>relevant, creative, and solution-oriented</strong> work programs beneficial to students and the campus environment.</span>
                  </li>
               </ul>
            </div>
         </div>
      </section>
    </div>
  );
};

export default AboutSection;