export interface FormErrors {
  [key: string]: string | undefined;
}

export enum AddDealRoutes {
  PRODUCT_INFO = '/add/step-one',
  COUPON_DETAILS = '/add/step-two',
  CONTACT_INFO = '/add/step-three',
  REVIEW_DEAL = '/add/review',
}
