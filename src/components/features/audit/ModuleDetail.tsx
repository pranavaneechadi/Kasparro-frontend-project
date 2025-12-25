"use client";
import React from 'react';
import useBrandStore from '@/state/useBrandStore';
import Card from '@/components/ui/Card';

const ModuleDetail: React.FC = () => {
  const module = useBrandStore((s) => s.currentModule);

  if (!module) {
    return (
      <div className="text-sm text-slate-500">
        Select a module to view details
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <Card>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-slate-500">{module.name}</div>
            <div className="text-lg font-semibold mt-1">
              Score: {module.score.value} ({module.score.grade})
            </div>
          </div>
          <div className="text-sm text-slate-500">
            Trend: {module.score.trend ?? 'flat'}
          </div>
        </div>

        <div className="mt-3 text-sm text-slate-600">
          {module.description}
        </div>
      </Card>

      <div className="grid md:grid-cols-3 gap-4">
        <Card>
          <div className="font-semibold">Key Insights</div>
          <ul className="list-disc pl-5 mt-2 text-sm text-slate-700">
            {module.insights.map((i) => (
              <li key={i.id}>
                <div className="font-medium">{i.title}</div>
                <div className="text-xs text-slate-500">{i.detail}</div>
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <div className="font-semibold">Issues</div>
          <ul className="list-disc pl-5 mt-2 text-sm text-slate-700">
            {module.issues.map((iss) => (
              <li key={iss.id}>
                <div className="font-medium">
                  {iss.title}{' '}
                  <span className="text-xs text-slate-500">
                    ({iss.severity})
                  </span>
                </div>
                <div className="text-xs text-slate-500">
                  {iss.description}
                </div>
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <div className="font-semibold">Recommendations</div>
          <ol className="list-decimal pl-5 mt-2 text-sm text-slate-700">
            {module.recommendations.map((r) => (
              <li key={r.id}>
                <div className="font-medium">{r.title}</div>
                <div className="text-xs text-slate-500">
                  {r.detail} — effort: {r.effort}
                </div>
              </li>
            ))}
          </ol>
        </Card>
      </div>
    </div>
  );
};

export default ModuleDetail;
