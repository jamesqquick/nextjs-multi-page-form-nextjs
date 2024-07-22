'use client';
import Input from '@/components/Input';
import SubmitButton from '../../../components/SubmitButton';
import { submitDealAction } from './actions';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { useAddDealContext } from '@/contexts/addDealContext';
import { NewDealType } from '@/schemas';

export default function ReviewForm() {
  const router = useRouter();
  const { newDealData, resetLocalStorage } = useAddDealContext();

  const { name, link, coupon, discount, contactName, contactEmail } =
    newDealData;

  const handleFormSubmit = async (formData: FormData) => {
    const res = await submitDealAction(newDealData as NewDealType);
    const { redirect, errorMsg, success } = res;

    if (success) {
      toast.success('Deal submitted successfully');
      resetLocalStorage();
    } else if (errorMsg) {
      toast.error(errorMsg);
    }
    if (redirect) {
      return router.push(redirect);
    }
  };

  return (
    <form
      action={handleFormSubmit}
      className="flex flex-1 flex-col gap-2 items-stretch lg:max-w-[700px]"
    >
      <p className="text-xl md:text-3xl">Name: {name}</p>
      <p className="font-light text-white/90">
        Link:{' '}
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="font-normal underline hover:text-teal-500"
        >
          {link}
        </a>
      </p>
      <p className="text-white/90">Coupon: {coupon}</p>
      <p className="text-white/90">Discount: {discount}%</p>
      <p className="text-white/90">Contact Name: {contactName}</p>
      <p className="text-white/90">Contact Email: {contactEmail}</p>
      <SubmitButton text="Submit" submittingText="Submitting..." />
    </form>
  );
}
