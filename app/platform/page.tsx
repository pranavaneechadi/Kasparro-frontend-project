import React from 'react';
import copy from '../../src/data/copy.json';
import { H1, H2, P } from '../../src/components/ui/Typography';
import Card from '../../src/components/ui/Card';

export default function Platform() {
  const data = copy.platform;
  return (
    <div className="space-y-8">
      <section>
        <H1>{data.title}</H1>
        <P className="mt-2">{data.pipeline.heading}</P>
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        <Card>
          <H2 className="mb-2">{data.pipeline.heading}</H2>
          <ul className="list-disc pl-5">
            {data.pipeline.stages.map((s: string, i: number) => (
              <li key={i} className="text-sm text-slate-700">{s}</li>
            ))}
          </ul>
        </Card>

        <Card>
          <H2 className="mb-2">What Kasparro consumes</H2>
          <ul className="list-disc pl-5">
            {data.consumes.map((c: string, i: number) => (
              <li key={i} className="text-sm text-slate-700">{c}</li>
            ))}
          </ul>
        </Card>
      </section>

      <section>
        <Card>
          <H2 className="mb-2">{data.comparison.heading}</H2>
          <ul className="list-disc pl-5">
            {data.comparison.points.map((p: string, i: number) => (
              <li key={i} className="text-sm text-slate-700">{p}</li>
            ))}
          </ul>
        </Card>
      </section>
    </div>
  );
}
