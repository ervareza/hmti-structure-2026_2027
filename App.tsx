import React, { useState, useMemo } from 'react';
import { MEMBERS, ORGANIZATION_NAME, ORGANIZATION_YEAR, UNIVERSITY_NAME } from './constants';
import { DivisionType, Member } from './types';
import MemberCard from './components/MemberCard';
import SectionHeader from './components/SectionHeader';
import AboutSection from './components/AboutSection';
import EventsSection from './components/EventsSection';
import LegalSection from './components/LegalSection';
import { Search, Sparkles, LayoutGrid, Info, ArrowRight, Menu, X, Instagram, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type ViewState = 'structure' | 'about' | 'events' | 'privacy' | 'terms';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentView, setCurrentView] = useState<ViewState>('structure');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Filtering Logic
  const filteredMembers = useMemo(() => {
    if (!searchTerm) return MEMBERS;
    const lower = searchTerm.toLowerCase();
    return MEMBERS.filter(m => 
      m.name.toLowerCase().includes(lower) || 
      m.nim.toLowerCase().includes(lower) || 
      m.role.toLowerCase().includes(lower)
    );
  }, [searchTerm]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    if (currentView !== 'structure' && e.target.value.length > 0) {
      setCurrentView('structure');
    }
  };

  const getMembersByDivision = (division: DivisionType) => {
    return filteredMembers.filter(m => m.division === division);
  };

  const getBPH = () => {
    const allBPH = getMembersByDivision(DivisionType.EXECUTIVE);
    const direktur = allBPH.find(m => m.role === 'DIRECTOR');
    const wakil = allBPH.find(m => m.role === 'VICE DIRECTOR');
    const others = allBPH.filter(m => m.role !== 'DIRECTOR' && m.role !== 'VICE DIRECTOR');
    return { direktur, wakil, others };
  };

  const { direktur, wakil, others: bphOthers } = getBPH();
  const divisions = [DivisionType.INTEX, DivisionType.KOMINFO, DivisionType.RND, DivisionType.TALENT];
  const isSectionVisible = (members: Member[]) => members.length > 0;
  const hasAnyResults = filteredMembers.length > 0;

  const navigateTo = (view: ViewState) => {
    setCurrentView(view);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-900 font-sans grid-pattern">
      
      {/* Modern Navigation */}
      <header className="fixed top-0 inset-x-0 z-50 pt-6 px-4 md:px-8">
        <nav className="max-w-7xl mx-auto bg-white/90 backdrop-blur-xl border border-slate-200 rounded-full px-6 py-3 flex items-center justify-between shadow-lg shadow-slate-200/40">
           {/* Logo */}
           <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigateTo('structure')}>
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-bold">H</div>
              <span className="font-bold text-lg tracking-tight">HMPS-TI.</span>
           </div>

           {/* Desktop Links */}
           <div className="hidden md:flex items-center gap-1 bg-slate-100 p-1 rounded-full">
              <button 
                onClick={() => navigateTo('structure')}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${currentView === 'structure' ? 'bg-white shadow-sm text-black' : 'text-slate-500 hover:text-slate-800'}`}
              >
                Structure
              </button>
              <button 
                onClick={() => navigateTo('about')}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${currentView === 'about' ? 'bg-white shadow-sm text-black' : 'text-slate-500 hover:text-slate-800'}`}
              >
                About Us
              </button>
              <button 
                onClick={() => navigateTo('events')}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${currentView === 'events' ? 'bg-white shadow-sm text-black' : 'text-slate-500 hover:text-slate-800'}`}
              >
                Programs
              </button>
           </div>

           {/* Right Actions */}
           <div className="flex items-center gap-3">
             <div className="hidden md:flex relative group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="pl-9 pr-4 py-2 bg-slate-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-black/5 w-32 focus:w-48 transition-all"
                  value={searchTerm}
                  onChange={handleSearch}
                />
             </div>
             
             {/* Mobile Toggle */}
             <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 text-slate-700">
               {isMobileMenuOpen ? <X /> : <Menu />}
             </button>
           </div>
        </nav>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-24 left-4 right-4 bg-white rounded-3xl p-6 shadow-2xl border border-slate-100 md:hidden flex flex-col gap-4"
            >
              <button onClick={() => navigateTo('structure')} className="text-left font-semibold text-lg p-2">Structure</button>
              <button onClick={() => navigateTo('about')} className="text-left font-semibold text-lg p-2">About Us</button>
              <button onClick={() => navigateTo('events')} className="text-left font-semibold text-lg p-2">Programs</button>
              <input 
                  type="text" 
                  placeholder="Search member..." 
                  className="w-full p-3 bg-slate-100 rounded-xl text-sm"
                  value={searchTerm}
                  onChange={handleSearch}
                />
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 pt-32 pb-20">
         <AnimatePresence mode="wait">
            {currentView === 'structure' ? (
               <motion.div 
                 key="structure"
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 exit={{ opacity: 0 }}
                 className="space-y-20"
               >
                  {/* Hero Section */}
                  {!searchTerm && (
                    <section className="relative py-10 md:py-20 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12">
                       <div className="max-w-2xl space-y-6">
                          <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-lime-100 text-lime-800 rounded-full text-xs font-bold uppercase tracking-widest"
                          >
                             <Sparkles size={14} className="text-lime-600 fill-lime-600" />
                             UNISBANK SEMARANG
                          </motion.div>
                          <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.9] text-slate-900"
                          >
                            The Next Level <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-green-500">Structure</span> For <br/>
                            <span className="underline decoration-lime-400/50 decoration-4 underline-offset-4">HMPS-TI.</span>
                          </motion.h1>
                          <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-slate-500 max-w-lg leading-relaxed"
                          >
                            The official structural organization of Informatics Engineering Students at {UNIVERSITY_NAME} {ORGANIZATION_YEAR}.
                          </motion.p>
                          
                          <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex items-center gap-4 pt-4 justify-center md:justify-start"
                          >
                             <button onClick={() => navigateTo('events')} className="bg-black text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-slate-800 transition-all">
                               View Programs <ArrowRight size={18} />
                             </button>
                             <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 cursor-pointer">
                                <Sparkles size={20} className="text-black" />
                             </div>
                          </motion.div>
                       </div>

                       {/* Hero Abstract Visuals */}
                       <div className="relative w-full md:w-1/2 h-[400px] md:h-[500px]">
                          <div className="absolute top-10 right-10 w-64 h-80 bg-slate-900 rounded-[2rem] rotate-3 z-10 overflow-hidden shadow-2xl">
                             {/* Abstract Gradient Art */}
                             <div className="w-full h-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-80" />
                             <div className="absolute bottom-6 left-6 text-white font-bold text-xl">We Build<br/>Future.</div>
                          </div>
                          <div className="absolute top-20 right-40 w-64 h-80 bg-lime-400 rounded-[2rem] -rotate-6 z-0 overflow-hidden">
                              <div className="w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-yellow-200 to-lime-500" />
                          </div>
                          <div className="absolute bottom-20 right-0 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-4 animate-bounce duration-[3000ms]">
                             <div className="flex -space-x-3">
                                {[1,2,3].map(i => (
                                  <div key={i} className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white" />
                                ))}
                             </div>
                             <div>
                                <p className="font-bold text-sm">29+ Members</p>
                                <p className="text-xs text-slate-400">Active Contributors</p>
                             </div>
                          </div>
                       </div>
                    </section>
                  )}

                  {/* BPH Section */}
                  {(direktur || wakil) && hasAnyResults && (
                    <section>
                      <SectionHeader title="Leadership" subtitle="The visionaries guiding our path forward." />
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                         {direktur && <MemberCard member={direktur} variant="primary" />}
                         {wakil && <MemberCard member={wakil} variant="secondary" />}
                      </div>
                      
                      {isSectionVisible(bphOthers) && (
                         <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {bphOthers.map(m => <MemberCard key={m.no} member={m} />)}
                         </div>
                      )}
                    </section>
                  )}

                  {/* Division Sections */}
                  {hasAnyResults && divisions.map(div => {
                     const divMembers = getMembersByDivision(div);
                     if (!isSectionVisible(divMembers)) return null;
                     
                     const koor = divMembers.find(m => m.role.includes('COORDINATOR'));
                     const members = divMembers.filter(m => !m.role.includes('COORDINATOR'));

                     return (
                        <section key={div} className="relative">
                           <SectionHeader title={div} subtitle={`Dedicated team for ${div} excellence.`} />
                           
                           {/* Layout: Coordinator prominent, members grid */}
                           <div className="flex flex-col lg:flex-row gap-8">
                              {koor && (
                                 <div className="lg:w-1/3">
                                    <div className="sticky top-32">
                                       <MemberCard member={koor} />
                                       <div className="mt-6 p-6 bg-slate-900 rounded-3xl text-white">
                                          <h4 className="font-bold text-xl mb-2">About {div}</h4>
                                          <p className="text-slate-400 text-sm leading-relaxed">
                                             Focusing on strategic initiatives and operational excellence within the {div.toLowerCase()} domain of HMPS-TI.
                                          </p>
                                       </div>
                                    </div>
                                 </div>
                              )}
                              
                              <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 ${koor ? 'lg:w-2/3' : 'w-full lg:grid-cols-3'}`}>
                                 {members.map(m => (
                                    <MemberCard key={m.no} member={m} />
                                 ))}
                              </div>
                           </div>
                        </section>
                     )
                  })}

                  {/* Empty State */}
                  {!hasAnyResults && (
                     <div className="flex flex-col items-center justify-center h-64 text-slate-400">
                        <Info size={48} className="mb-4 text-slate-300" />
                        <h3 className="text-xl font-bold text-slate-700">No members found</h3>
                        <p>Try adjusting your search criteria</p>
                     </div>
                  )}
               </motion.div>
            ) : currentView === 'about' ? (
               <motion.div
                  key="about"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
               >
                  <AboutSection />
               </motion.div>
            ) : currentView === 'events' ? (
               <motion.div
                  key="events"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
               >
                  <EventsSection />
               </motion.div>
            ) : (
              <motion.div
                  key="legal"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
               >
                  <LegalSection type={currentView as 'privacy' | 'terms'} />
               </motion.div>
            )}
         </AnimatePresence>
      </main>

      {/* Modern Footer */}
      <footer className="bg-slate-900 text-white py-20 rounded-t-[3rem] mt-20 mx-2 md:mx-4">
         <div className="max-w-7xl mx-auto px-8">
            <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
               <div className="max-w-md">
                  <h2 className="text-4xl font-bold mb-6">HMPS-TI <br/> <span className="text-lime-400">UNISBANK</span></h2>
                  <div className="flex items-center gap-4">
                     <p className="text-slate-400 leading-relaxed">
                       Building the future of technology through student innovation and entrepreneurship in Semarang.
                     </p>
                  </div>
               </div>
               
               <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-sm text-slate-400">
                  <div className="space-y-4">
                     <h4 className="text-white font-bold text-base">Organization</h4>
                     <p onClick={() => navigateTo('about')} className="cursor-pointer hover:text-lime-400 transition-colors">About Us</p>
                     <p onClick={() => navigateTo('structure')} className="cursor-pointer hover:text-lime-400 transition-colors">Structure</p>
                     <p onClick={() => navigateTo('events')} className="cursor-pointer hover:text-lime-400 transition-colors">Programs</p>
                  </div>
                  <div className="space-y-4">
                     <h4 className="text-white font-bold text-base">Contact & Social</h4>
                     <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 cursor-pointer hover:text-lime-400 transition-colors">
                        <Instagram size={16} /> Instagram
                     </a>
                     <a href="https://wa.me/6285702816894" target="_blank" rel="noreferrer" className="flex items-center gap-2 cursor-pointer hover:text-lime-400 transition-colors">
                        <Phone size={16} /> +62 857-0281-6894 <br/> (Riris)
                     </a>
                  </div>
                  <div className="space-y-4">
                     <h4 className="text-white font-bold text-base">Legal</h4>
                     <p onClick={() => navigateTo('privacy')} className="cursor-pointer hover:text-lime-400 transition-colors">Privacy</p>
                     <p onClick={() => navigateTo('terms')} className="cursor-pointer hover:text-lime-400 transition-colors">Terms</p>
                  </div>
               </div>
            </div>
            
            <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
               <p>Made by <span className="text-white font-bold">New Saint Digital Solution</span>.</p>
               <div className="flex gap-6 mt-4 md:mt-0">
                  <span onClick={() => navigateTo('privacy')} className="cursor-pointer hover:text-white">Privacy Policy</span>
                  <span onClick={() => navigateTo('terms')} className="cursor-pointer hover:text-white">Terms of Service</span>
               </div>
            </div>
         </div>
      </footer>
    </div>
  );
};

export default App;