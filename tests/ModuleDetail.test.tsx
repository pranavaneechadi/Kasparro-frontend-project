import React from 'react';
import { render, screen } from '@testing-library/react';

// Mock the zustand hook used by the component to return no selected module
jest.mock('@/state/useBrandStore', () => {
  // mock a Zustand selector-aware hook: accept a selector and return selector(state)
  return (selector: any) => selector({ currentModule: null });
});

import ModuleDetail from '@/components/features/audit/ModuleDetail';

describe('ModuleDetail', () => {
  it('shows empty state when no module is selected', () => {
    render(<ModuleDetail />);
    expect(screen.getByText(/Select a module to view details/i)).toBeInTheDocument();
  });
});
