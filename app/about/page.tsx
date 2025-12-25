import React from 'react';
import copy from '../../src/data/copy.json';
import { H1, H2, P } from '../../src/components/ui/Typography';
import Card from '../../src/components/ui/Card';

export default function About() {
  const data = copy.about;

  return (
    <div className="space-y-16">
      {/* Page header */}
      <section>
        <H1>About Kasparro</H1>
        <P className="mt-4 max-w-2xl text-slate-600">
          Kasparro is built with a product-first mindset, focusing on how AI-first
          search systems evaluate brands rather than pages alone.
        </P>
      </section>

      {/* Mission & Philosophy */}
      <section className="grid gap-6 md:grid-cols-2">
        <Card>
          <H2 className="mb-2">Mission</H2>
          <P>{data.mission}</P>
        </Card>

        <Card>
          <H2 className="mb-2">Product philosophy</H2>
          <P>{data.philosophy}</P>
        </Card>
      </section>

      {/* Vision */}
      <section>
        <Card>
          <H2 className="mb-2">Vision</H2>
          <P>{data.vision}</P>
        </Card>
      </section>
    </div>
  );
}
