import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t py-6 px-6 bg-white mt-12">
      <div className="max-w-5xl mx-auto text-sm text-slate-500">
        © {new Date().getFullYear()} Kasparro — Mocked demo. All copy driven from JSON.
      </div>
    </footer>
  );
};

export default Footer;
