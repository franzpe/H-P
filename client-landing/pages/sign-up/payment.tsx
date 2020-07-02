import React from 'react';

import { getSignupStepperLayout } from '../../components/layouts/SignupStepperLayout';
import Link from 'next/link';

const Payment = () => {
  return (
    <div>
      <span className="text-lg text-primary-3-shade uppercase font-medium">payment method</span>
      <div className="flex flex-row">
        <div>
          <div>
            <div>credit card</div>
            <div>paypal</div>
          </div>
          <span className="text-lg text-primary-3-shade uppercase font-medium">card information</span>
          <div>inputs</div>
          <span className="text-lg text-primary-3-shade uppercase font-medium">billing information</span>
          <div>inputs</div>
        </div>
        <div className="w-1px bg-primary-1-tint mx-8" />
        <div>
          <span className="text-lg text-primary-3-shade uppercase font-medium">order summary</span>
          <div>image plan</div>
          <div>
            <span>Billed now</span>
            <span>$6000</span>
          </div>
          <div>
            <span>Billing cycle</span>
            <span>Yearly</span>
          </div>
          <div>
            <span>Next bill date</span>
            <span>30 May 2021</span>
          </div>
          <Link href="/sign-up/payment-complete">
            <button className="block w-full text-center py-2 font-medium text-white rounded-full bg-accent-orange mt-24 mb-6 hover:bg-accent-shade">
              Complete Purchase
            </button>
          </Link>
          <p>By completing the purchase, I agree to Hackers & Painter's Terms and & Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

(Payment as any).getLayout = getSignupStepperLayout;

export default Payment;
