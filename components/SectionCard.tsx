import React from 'react';

interface SectionCardProps {
  id: string;
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const SectionCard: React.FC<SectionCardProps> = ({ id, title, children, icon }) => {
  return (
    <section id={id} className="scroll-mt-24 mb-8 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-100 bg-slate-50 flex items-center gap-3">
        {icon && <div className="text-indigo-600">{icon}</div>}
        <h2 className="text-xl font-bold text-slate-800">{title}</h2>
      </div>
      <div className="p-6">
        {children}
      </div>
    </section>
  );
};