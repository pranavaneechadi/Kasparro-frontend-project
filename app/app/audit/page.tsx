"use client";
import React from 'react';
import ModuleDetail from '@/components/features/audit/ModuleDetail';
import { H1, P } from '@/components/ui/Typography';

export default function AuditPage() {
  return (
    <div className="space-y-12">
      <section className="flex flex-col gap-2">
        <H1>Audit</H1>
        <P className="text-slate-600 max-w-2xl">
          Detailed analysis across individual audit modules, highlighting
          strengths, issues, and prioritized recommendations derived from
          AI-first search signals.
        </P>
      </section>

      <section className="min-h-[60vh]">
        <ModuleDetail />
      </section>
    </div>
  );
}
