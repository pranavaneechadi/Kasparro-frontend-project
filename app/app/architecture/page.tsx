import React from 'react';
import copy from '../../../src/data/copy.json';
import { H1, H2, P } from '../../../src/components/ui/Typography';
import Card from '../../../src/components/ui/Card';

export default function ArchitecturePage() {
  const data = copy.architecture;

  return (
    <div className="space-y-16">
      {/* Page header */}
      <section>
        <H1>{data.heading}</H1>
        <P className="mt-4 max-w-2xl text-slate-600">
          A high-level representation of how data flows through Kasparro’s
          frontend-facing architecture, from ingestion to actionable outputs.
        </P>
      </section>

      {/* Input & context */}
      <section className="grid gap-6 md:grid-cols-2">
        <Card>
          <H2 className="mb-2">Input Assembler</H2>
          <P>{data.inputAssembler}</P>
        </Card>

        <Card>
          <H2 className="mb-2">ContextPack</H2>
          <P>{data.contextPack}</P>
        </Card>
      </section>

      {/* Processing */}
      <section>
        <Card>
          <H2 className="mb-2">Audit Modules</H2>
          <P>{data.modules}</P>
        </Card>
      </section>

      {/* Outputs */}
      <section>
        <Card>
          <H2 className="mb-2">Output Surfaces</H2>
          <P>{data.outputs}</P>
        </Card>
      </section>
    </div>
  );
}
