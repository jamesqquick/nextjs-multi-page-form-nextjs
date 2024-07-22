import React from 'react';
import PageHeader from '@/components/PageHeader';
import StepNavigation from '@/components/StepNavigation';
import { AddDealContextProvider } from '@/contexts/addDealContext';

export default function DealsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full px-2 lg:px-0">
      <PageHeader
        title="Share a Deal"
        subtitle="Have an amazing deal or discount tailored for developers? Let us know!"
      />

      <div className="mt-20 mb-28 flex flex-col gap-x-16 text-white lg:flex-row">
        <StepNavigation />
        <AddDealContextProvider>
          <div className="w-full">{children}</div>
        </AddDealContextProvider>
      </div>
    </div>
  );
}
