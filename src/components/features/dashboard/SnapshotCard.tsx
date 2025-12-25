"use client";
import React from 'react';
import Card from '../../ui/Card';

type Props = { title: string; value: string | number; note?: string };

export const SnapshotCard: React.FC<Props> = ({ title, value, note }) => {
  return (
    <Card>
      <div className="text-xs text-slate-500">{title}</div>
      <div className="mt-2 text-2xl font-semibold">{value}</div>
      {note && <div className="text-sm text-slate-500 mt-1">{note}</div>}
    </Card>
  );
};

export default SnapshotCard;
