import React from 'react';
import copy from '@/data/copy.json';
import { H1, H2, P } from '@/components/ui/Typography';
import Card from '@/components/ui/Card';

export default function PlatformPage() {
  const data = copy.platform;

  return (
    <div className="space-y-16">
      {/* Page header */}
      <section>
        <H1>{data.title}</H1>
        <P className="mt-4 max-w-2xl text-slate-600">
          A system-level view of how Kasparro ingests data, applies AI context,
          and produces actionable audit outputs.
        </P>
      </section>

      {/* Audit pipeline */}
      <section className="space-y-4">
        <H2>{data.pipeline.heading}</H2>
        <Card>
          <ul className="list-disc pl-5 space-y-2">
            {data.pipeline.stages.map((stage: string, idx: number) => (
              <li key={idx} className="text-sm text-slate-700">
                {stage}
              </li>
            ))}
          </ul>
        </Card>
      </section>

      {/* Inputs and outputs */}
      <section className="grid gap-6 md:grid-cols-2">
        <Card>
          <H2 className="mb-3">What Kasparro consumes</H2>
          <ul className="list-disc pl-5 space-y-2">
            {data.consumes.map((item: string, idx: number) => (
              <li key={idx} className="text-sm text-slate-700">
                {item}
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <H2 className="mb-3">What brands receive</H2>
          <ul className="list-disc pl-5 space-y-2">
            {data.outputs.map((item: string, idx: number) => (
              <li key={idx} className="text-sm text-slate-700">
                {item}
              </li>
            ))}
          </ul>
        </Card>
      </section>

      {/* Comparison */}
      <section className="space-y-4">
        <H2>{data.comparison.heading}</H2>
        <Card>
          <ul className="list-disc pl-5 space-y-2">
            {data.comparison.points.map((p: string, idx: number) => (
              <li key={idx} className="text-sm text-slate-700">
                {p}
              </li>
            ))}
          </ul>
        </Card>
      </section>
    </div>
  );
}
