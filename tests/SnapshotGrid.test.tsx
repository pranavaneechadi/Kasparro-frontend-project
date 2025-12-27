import React from 'react';
import { render } from '@testing-library/react';

// Mock the zustand hook used by the component to return no selected brand
jest.mock('@/state/useBrandStore', () => {
  // mock a Zustand selector-aware hook: accept a selector and return selector(state)
  return (selector: any) => selector({ currentBrand: null });
});

import SnapshotGrid from '@/components/features/dashboard/SnapshotGrid';

describe('SnapshotGrid', () => {
  it('renders nothing when no brand is selected', () => {
    const { container } = render(<SnapshotGrid />);
    expect(container).toBeEmptyDOMElement();
  });
});
