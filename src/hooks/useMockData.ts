import brandsJson from '../data/brands.json';
import auditsJson from '../data/audits.json';
import type {
  BrandsData,
  AuditsData,
  Brand,
  BrandAuditReport,
} from '../types/index';

// Lightweight typed accessors for mocked JSON. Keeps components decoupled from raw imports.
export function getBrands(): BrandsData['brands'] {
  return (brandsJson as BrandsData).brands;
}

export function getReports(): AuditsData['reports'] {
  return (auditsJson as AuditsData).reports;
}

export function findReportForBrand(brandId: string): BrandAuditReport | undefined {
  return getReports().find((r) => r.brandId === brandId);
}

export function findBrand(brandId: string): Brand | undefined {
  return getBrands().find((b) => b.id === brandId);
}

export default {
  getBrands,
  getReports,
  findReportForBrand,
  findBrand,
};
