import React from 'react';
import Header from './Header';
import Footer from './Footer';

export const AppShell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main className="max-w-5xl mx-auto px-6 py-10">{children}</main>
      <Footer />
    </div>
  );
};

export default AppShell;
