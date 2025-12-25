"use client";
import React from 'react';
import type { Brand } from '../../../src/types/index';
import useBrandStore from '../../../src/state/useBrandStore';

export const BrandSelector: React.FC<{ brands?: Brand[] }> = ({ brands }) => {
  const selectedBrandId = useBrandStore((s) => s.selectedBrandId);
  const setSelectedBrand = useBrandStore((s) => s.setSelectedBrand);

  return (
    <div>
      <label className="block text-xs text-slate-500 mb-1">Brand</label>
      <select
        value={selectedBrandId}
        onChange={(e) => setSelectedBrand(e.target.value)}
        className="w-full border rounded px-2 py-1 text-sm"
      >
        {brands?.map((b) => (
          <option key={b.id} value={b.id}>{b.name}</option>
        ))}
      </select>
    </div>
  );
};

export default BrandSelector;
