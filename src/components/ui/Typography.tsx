import React from 'react';

export const H1: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <h1 className={`text-3xl font-bold leading-tight ${className}`}>{children}</h1>
);

export const H2: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <h2 className={`text-2xl font-semibold ${className}`}>{children}</h2>
);

export const P: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <p className={`text-sm text-slate-700 ${className}`}>{children}</p>
);

export default { H1, H2, P };
