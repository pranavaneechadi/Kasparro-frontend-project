"use client";
import React from 'react';
import ModuleList from '../features/audit/ModuleList';
import BrandSelector from '../features/dashboard/BrandSelector';
import useBrandStore from '../../state/useBrandStore';

const ProductLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const brands = useBrandStore((s) => s.brands);
  return (
    <div className="min-h-screen bg-white shadow-sm rounded-lg p-4">
      <div className="flex gap-6">
        <aside className="w-64 border-r pr-4">
          <div className="mb-4">
            <BrandSelector brands={brands} />
          </div>
          <ModuleList />
        </aside>
        <section className="flex-1">
          {children}
        </section>
      </div>
    </div>
  );
};

export default ProductLayout;
