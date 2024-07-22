'use client';
import clsx from 'clsx';
import Link from 'next/link';
import { AddDealRoutes } from '@/types';

const steps = [
  {
    title: 'Step One',
    route: 'step-one',
    link: AddDealRoutes.PRODUCT_INFO,
  },
  {
    title: 'Step Two',
    route: 'step-two',
    link: AddDealRoutes.COUPON_DETAILS,
  },
  {
    title: 'Step Three',
    route: 'step-three',
    link: AddDealRoutes.CONTACT_INFO,
  },
  { title: 'Review', route: 'review', link: AddDealRoutes.REVIEW_DEAL },
];

export default function StepNavigation() {
  const currentPath = '';

  return (
    <div className="mb-12 mt-4 lg:mb-0 min-w-60">
      {/* back button */}
      <Link
        href={'/add'}
        className="mb-4 flex items-center gap-2 text-xl disabled:text-white/50 lg:mb-12 lg:gap-5"
      >
        Back
      </Link>

      {/* list of form steps */}
      <div className="relative flex flex-row justify-between lg:flex-col lg:justify-start lg:gap-8">
        {steps.map((step, i) => (
          <Link
            href={step.link}
            key={step.link}
            className="group z-20 flex items-center gap-3 text-2xl"
            prefetch={true}
          >
            <span
              className={clsx(
                'flex h-10 w-10 items-center justify-center rounded-full border  text-sm  transition-colors duration-200  lg:h-12 lg:w-12 lg:text-lg',
                {
                  'border-none bg-teal-500 text-black group-hover:border-none group-hover:text-black':
                    currentPath === step.route,
                  'border-white/75 bg-gray-900 group-hover:border-white group-hover:text-white text-white/75':
                    currentPath !== step.route,
                }
              )}
            >
              {i + 1}
            </span>
            <span
              className={clsx(
                'hidden text-white/75 transition-colors duration-200 group-hover:text-white lg:block',
                {
                  'font-light': currentPath !== step.route,
                  'font-semibold text-white': currentPath === step.route,
                }
              )}
            >
              {step.title}
            </span>
          </Link>
        ))}
        {/* mobile background dashes */}
        <div className="absolute top-4 flex h-1 w-full border-b border-dashed lg:hidden" />
      </div>
    </div>
  );
}
