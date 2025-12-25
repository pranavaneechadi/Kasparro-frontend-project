import React from 'react';
import Link from 'next/link';
import { H1 } from '../ui/Typography';

const Header: React.FC = () => {
  return (
    <header className="w-full border-b bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-md bg-sky-600 flex items-center justify-center text-white text-sm font-semibold">
            K
          </div>
          <H1 className="text-lg font-semibold tracking-tight group-hover:text-sky-700">
            Kasparro
          </H1>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6 text-sm">
          <Link
            href="/platform"
            className="text-slate-600 hover:text-slate-900 transition-colors"
          >
            Platform
          </Link>

          <Link
            href="/about"
            className="text-slate-600 hover:text-slate-900 transition-colors"
          >
            About
          </Link>

          <Link
            href="/app/dashboard"
            className="inline-flex items-center rounded-md bg-sky-600 px-4 py-2 text-white font-medium hover:bg-sky-700 transition-colors"
          >
            Open app
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
