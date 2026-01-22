import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, ArrowRight, Briefcase } from 'lucide-react';
import SectionHeader from './SectionHeader';

const EventsSection: React.FC = () => {
  // Professionalized naming based on the user's "Proker" list
  const programs = [
    {
      id: 1,
      title: "Freshmen Orientation & MOU Signing", // Merged Ngumpulin Adek Adek & Penandatanganan MOU
      desc: "Welcoming new students, bonding sessions, introduction to campus culture, and formalizing partnerships with external organizations.",
      date: "TBA",
      time: "TBA",
      location: "TBA",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1000&auto=format&fit=crop",
      category: "Student Dev"
    },
    {
      id: 3,
      title: "Grand Gathering", // Gathering
      desc: "Strengthening internal bonds among HMPS-TI members and alumni.",
      date: "TBA",
      time: "TBA",
      location: "TBA",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1000&auto=format&fit=crop",
      category: "Community"
    },
    {
      id: 4,
      title: "Tech Goes To School", // Go to school + pelatihan
      desc: "Visiting high schools to provide technology workshops and training.",
      date: "TBA",
      time: "TBA",
      location: "TBA",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop",
      category: "Education"
    },
    {
      id: 5,
      title: "Industrial Visit", // Kunjungan industri
      desc: "Field trip to tech companies to gain real-world industry insights.",
      date: "TBA",
      time: "TBA",
      location: "TBA",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop",
      category: "Career"
    },
    {
      id: 6,
      title: "Informatics Engineering Fest", // Enginering Informatic Event
      desc: "A major event celebrating technology through competitions and exhibitions.",
      date: "TBA",
      time: "TBA",
      location: "TBA",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop",
      category: "Major Event"
    },
    {
      id: 7,
      title: "Staff Open Recruitment", // Open Recruitment
      desc: "Opening opportunities for students to join the HMPS-TI board.",
      date: "TBA",
      time: "TBA",
      location: "TBA",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1000&auto=format&fit=crop",
      category: "Regeneration"
    },
    {
      id: 8,
      title: "Leadership Succession Interviews", // Wawancara calon calon direk wadirek
      desc: "Selection process for the next Director and Vice Director candidates.",
      date: "TBA",
      time: "TBA",
      location: "TBA",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1000&auto=format&fit=crop",
      category: "Leadership"
    },
    {
      id: 9,
      title: "Grand Reorganization", // Reorganisasi
      desc: "Restructuring the organization for the next tenure.",
      date: "TBA",
      time: "TBA",
      location: "TBA",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop",
      category: "Organization"
    }
  ];

  return (
    <div className="space-y-12">
      <SectionHeader title="Work Programs 2026" subtitle="Our strategic roadmap and activities for the year." />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {programs.map((program) => (
          <motion.div 
            key={program.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col h-full"
          >
            <div className="h-48 overflow-hidden relative shrink-0">
              <img src={program.image} alt={program.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-slate-900">
                {program.category}
              </div>
            </div>
            
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex items-center gap-2 text-lime-600 mb-3 font-medium text-sm">
                <Briefcase size={16} />
                <span className="uppercase tracking-wide">Program Kerja</span>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{program.title}</h3>
              <p className="text-slate-500 text-sm mb-6 line-clamp-2">{program.desc}</p>
              
              <div className="mt-auto space-y-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-3 text-slate-500 text-sm">
                  <Calendar size={16} className="text-slate-400" />
                  <span className="font-medium text-slate-700">{program.date}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-500 text-sm">
                  <Clock size={16} className="text-slate-400" />
                  <span className="font-medium text-slate-700">{program.time}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-500 text-sm">
                  <MapPin size={16} className="text-slate-400" />
                  <span className="font-medium text-slate-700">{program.location}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EventsSection;