import ProductLayout from '../../src/components/layout/ProductLayout';

export default function AppAreaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-6xl mx-auto">
      <ProductLayout>{children}</ProductLayout>
    </div>
  );
}
