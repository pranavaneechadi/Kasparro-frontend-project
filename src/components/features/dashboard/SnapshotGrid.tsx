"use client";
import React from 'react';
import SnapshotCard from './SnapshotCard';
import useBrandStore from '../../../src/state/useBrandStore';

export const SnapshotGrid: React.FC = () => {
  const currentBrand = useBrandStore((s) => s.currentBrand);

  if (!currentBrand) return null;

  const summary = currentBrand.summary;

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <SnapshotCard title="AI Visibility Score" value={summary?.aiVisibilityScore ?? '—'} note="0-100" />
      <SnapshotCard title="Trust / E-E-A-T" value={summary?.eeatScore ?? '—'} note="0-100" />
      <SnapshotCard title="Non-Branded Coverage" value={summary?.nonBrandedCoverage ?? '—'} note="% of intent coverage" />
      <SnapshotCard title="Last audit" value={currentBrand.lastAuditedAt ?? '—'} note="ISO timestamp" />
    </div>
  );
};

export default SnapshotGrid;
