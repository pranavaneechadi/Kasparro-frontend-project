import React from 'react';

export const VStack: React.FC<{ gap?: number; children: React.ReactNode; className?: string }> = ({ gap = 4, children, className = '' }) => (
  <div className={`flex flex-col gap-${gap} ${className}`}>{children}</div>
);

export const HStack: React.FC<{ gap?: number; children: React.ReactNode; className?: string }> = ({ gap = 4, children, className = '' }) => (
  <div className={`flex flex-row gap-${gap} ${className}`}>{children}</div>
);

export default { VStack, HStack };
