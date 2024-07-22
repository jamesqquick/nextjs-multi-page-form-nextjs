import z from 'zod';

export const stepOneSchema = z.object({
  name: z.string().min(1, 'Please enter a name for the product.'),
  link: z
    .string()
    .url('Please enter a valid URL including starting with https://'),
});

export const stepTwoSchema = z.object({
  coupon: z.string().min(5, 'Coupon code must be at least 5 characters long'),
  discount: z.coerce
    .number()
    .min(1, 'Discount must be at least 1%')
    .max(100, 'Discount must be at most 100%'),
});

export const stepThreeSchema = z.object({
  contactName: z
    .string()
    .min(5, 'Please enter a contact name of at least 5 characters long'),
  contactEmail: z.string().email('Please enter a valid email'),
});

export const newDealSchema = z.object({
  ...stepOneSchema.shape,
  ...stepTwoSchema.shape,
  ...stepThreeSchema.shape,
});

export const newDealInitialValuesSchema = z.object({
  name: z.string().optional(),
  link: z.string().optional(),
  coupon: z.string().optional(),
  discount: z.coerce.number().optional(),
  contactName: z.string().optional(),
  contactEmail: z.string().optional(),
});

export type NewDealType = z.infer<typeof newDealSchema>;
export type NewDealInitialValuesType = z.infer<
  typeof newDealInitialValuesSchema
>;
