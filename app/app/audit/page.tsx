"use client";
import React from 'react';
import ModuleDetail from '../../../../src/components/features/audit/ModuleDetail';
import { H1 } from '../../../../src/components/ui/Typography';

export default function AuditPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <H1>Audit</H1>
      </div>

      <ModuleDetail />
    </div>
  );
}
