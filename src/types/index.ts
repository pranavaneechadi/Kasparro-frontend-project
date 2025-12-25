// Central typed contracts for Kasparro mocked data
export type ID = string;

export interface Brand {
  id: ID;
  name: string;
  domain: string;
  logo?: string; // public asset path
  createdAt: string; // ISO
  lastAuditedAt?: string; // ISO
  summary?: {
    aiVisibilityScore: number; // 0-100
    eeatScore: number; // 0-100
    nonBrandedCoverage: number; // 0-100
  };
}

export type ScoreGrade = 'A' | 'B' | 'C' | 'D' | 'F';

export interface AuditScore {
  value: number; // 0-100
  grade: ScoreGrade;
  trend?: 'up' | 'down' | 'flat';
}

export type Impact = 'low' | 'medium' | 'high';

export interface AuditInsight {
  id: ID;
  title: string;
  detail: string;
  impact: Impact;
  evidence?: string[];
}

export interface AuditIssue {
  id: ID;
  title: string;
  description: string;
  severity: Impact;
  url?: string; // where issue was detected
  occurrences?: number;
}

export interface AuditRecommendation {
  id: ID;
  title: string;
  detail: string;
  effort: 'low' | 'medium' | 'high';
  priority: number; // 1 highest
}

export interface AuditModule {
  id: ID;
  key: string; // machine key e.g. 'technical'
  name: string; // human readable (copy comes from data)
  description: string;
  score: AuditScore;
  insights: AuditInsight[];
  issues: AuditIssue[];
  recommendations: AuditRecommendation[];
}

export interface BrandAuditReport {
  brandId: ID;
  generatedAt: string; // ISO
  modules: AuditModule[];
}

export interface AuditsData {
  reports: BrandAuditReport[];
}

export interface BrandsData {
  brands: Brand[];
}
