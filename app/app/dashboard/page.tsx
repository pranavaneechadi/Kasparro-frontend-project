"use client";
import React from 'react';
import { H1, P } from '@/components/ui/Typography';
import SnapshotGrid from '@/components/features/dashboard/SnapshotGrid';
import useBrandStore from '@/state/useBrandStore';

export default function DashboardPage() {
  const currentBrand = useBrandStore((s) => s.currentBrand);

  return (
    <div className="space-y-12">
      <section className="flex flex-col gap-2">
        <H1>Dashboard</H1>
        <P className="text-slate-600 max-w-2xl">
          A high-level snapshot of how your brand currently performs across
          AI-first search visibility, trust, and non-branded coverage.
        </P>
      </section>

      <section>
        <SnapshotGrid />
      </section>

      <section className="pt-4 border-t">
        <div className="text-sm text-slate-600">
          Viewing data for:{' '}
          <span className="font-medium text-slate-900">
            {currentBrand?.name ?? '—'}
          </span>
        </div>
      </section>
    </div>
  );
}
