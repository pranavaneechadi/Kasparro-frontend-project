import create from 'zustand';
import type { Brand, BrandAuditReport, AuditModule } from '../types/index';
import { getBrands, getReports, findBrand, findReportForBrand } from '../hooks/useMockData';

type State = {
  brands: Brand[];
  reports: BrandAuditReport[];
  selectedBrandId?: string;
  selectedModuleKey?: string;
  setSelectedBrand: (brandId: string) => void;
  setSelectedModule: (moduleKey: string) => void;
  currentBrand?: Brand | null;
  currentReport?: BrandAuditReport | null;
  currentModule?: AuditModule | null;
};

// Reasoning: Zustand is minimal, predictable, and easy to adopt for this demo app.
// It keeps selection state global and decoupled from UI while avoiding Context re-renders complexity.

export const useBrandStore = create<State>((set, get) => {
  const brands = getBrands();
  const reports = getReports();

  return {
    brands,
    reports,
    selectedBrandId: brands[0]?.id,
    selectedModuleKey: undefined,
    setSelectedBrand: (brandId: string) => {
      const brand = findBrand(brandId);
      const report = findReportForBrand(brandId);
      set({ selectedBrandId: brandId, currentBrand: brand ?? null, currentReport: report ?? null, selectedModuleKey: report?.modules?.[0]?.key });
    },
    setSelectedModule: (moduleKey: string) => {
      const state = get();
      const report = state.reports.find((r) => r.brandId === state.selectedBrandId);
      const module = report?.modules.find((m) => m.key === moduleKey) ?? null;
      set({ selectedModuleKey: moduleKey, currentModule: module });
    },
    currentBrand: findBrand(brands[0]?.id ?? '' ) ?? null,
    currentReport: reports[0] ?? null,
    currentModule: (reports[0]?.modules?.[0] as AuditModule) ?? null,
  };
});

export default useBrandStore;
