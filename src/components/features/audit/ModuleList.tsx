"use client";
import React from 'react';
import useBrandStore from '../../../src/state/useBrandStore';

const ModuleList: React.FC = () => {
  const report = useBrandStore((s) => s.currentReport);
  const selectedModuleKey = useBrandStore((s) => s.selectedModuleKey);
  const setSelectedModule = useBrandStore((s) => s.setSelectedModule);

  if (!report) return <div className="text-sm text-slate-500">No report loaded</div>;

  return (
    <nav className="space-y-2">
      {report.modules.map((m) => (
        <button
          key={m.key}
          onClick={() => setSelectedModule(m.key)}
          className={`w-full text-left px-2 py-2 rounded ${selectedModuleKey === m.key ? 'bg-sky-50 border' : 'hover:bg-slate-50'}`}
        >
          <div className="flex items-center justify-between">
            <div className="font-medium text-sm">{m.name}</div>
            <div className="text-xs text-slate-600">{m.score.value}</div>
          </div>
          <div className="text-xs text-slate-500">{m.description}</div>
        </button>
      ))}
    </nav>
  );
};

export default ModuleList;
