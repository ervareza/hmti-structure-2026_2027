import React from 'react';
import SectionHeader from './SectionHeader';

interface LegalSectionProps {
  type: 'privacy' | 'terms';
}

const LegalSection: React.FC<LegalSectionProps> = ({ type }) => {
  const isPrivacy = type === 'privacy';
  const title = isPrivacy ? "Privacy Policy" : "Terms of Service";
  const subtitle = isPrivacy ? "How we handle your data." : "Rules and regulations.";

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <SectionHeader title={title} subtitle={subtitle} />
      
      <div className="bg-white p-10 md:p-14 rounded-[3rem] border border-slate-100 shadow-sm space-y-8 text-slate-600 leading-relaxed">
        <div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">1. Introduction</h3>
          <p>
            Welcome to the HMPS-TI UNISBANK website. 
            {isPrivacy 
              ? " We respect your privacy and are committed to protecting your personal data." 
              : " By accessing this website, you agree to be bound by these terms of service."}
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">
            {isPrivacy ? "2. Data We Collect" : "2. Use License"}
          </h3>
          <p>
            {isPrivacy 
              ? "We may collect personal identification information (Name, NIM, Email) only when you voluntarily submit such information to us via forms or event registrations." 
              : "Permission is granted to temporarily download one copy of the materials on HMPS-TI's website for personal, non-commercial transitory viewing only."}
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">
             {isPrivacy ? "3. How We Use Your Data" : "3. Disclaimer"}
          </h3>
          <p>
             {isPrivacy 
              ? "We use the collected data to manage memberships, organize events, and improve our organizational communication." 
              : "The materials on this website are provided on an 'as is' basis. HMPS-TI makes no warranties, expressed or implied."}
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">4. Contact Us</h3>
          <p>
            If you have any questions about this {title}, please contact us at hmpsti@edu.unisbank.ac.id.
          </p>
        </div>
        
        <div className="pt-8 border-t border-slate-100 text-sm text-slate-400">
          Last updated: January 2026
        </div>
      </div>
    </div>
  );
};

export default LegalSection;