'use client';

export default function ReviewForm() {
  return (
    <form className="flex flex-1 flex-col gap-2 items-stretch lg:max-w-[700px]">
      <p className="text-xl md:text-3xl">Name: </p>
      <p className="font-light text-white/90">
        Link:{' '}
        <a
          href={''}
          target="_blank"
          rel="noreferrer"
          className="font-normal underline hover:text-teal-500"
        >
          Link
        </a>
      </p>
      <p className="text-white/90">Coupon:</p>
      <p className="text-white/90">Discount:</p>
      <p className="text-white/90">Contact Name:</p>
      <p className="text-white/90">Contact Email:</p>
    </form>
  );
}
