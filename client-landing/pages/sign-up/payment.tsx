import React, { useState } from 'react';
import cx from 'classnames';

import { getSignupStepperLayout } from '../../components/layouts/SignupStepperLayout';
import Link from 'next/link';
import Input from '../../components/forms/Input';
import RadioButton from '../../components/forms/RadioButton';
import MaterialIcon from '../../components/MaterialIcon';

import PuzzlePro from '../../assets/images/svgs/puzzle-pro.svg';
import PuzzleGrowth from '../../assets/images/svgs/puzzle-growth.svg';
import PuzzleEnterprise from '../../assets/images/svgs/puzzle-enterprise.svg';
import PaypalIcon from '../../assets/images/svgs/payment-method-paypal.svg';
import styles from './payment.module.css';

const Payment = () => {
  const [isCreditcardPayment, setIsCreditcardPayment] = useState(true);
  const [isAddress2Shown, setIsAddress2Shown] = useState(false);

  const handlePaymentClick = (isCreditCard: boolean) => e => {
    setIsCreditcardPayment(isCreditCard);
  };

  const handleToggleAddress2 = () => {
    setIsAddress2Shown(!isAddress2Shown);
  };

  return (
    <div className={cx('max-w-4xl', styles.wrapper)}>
      <span className="text-lg text-primary-3-shade uppercase font-medium">payment method</span>
      <div className="flex flex-row flex-wrap md:flex-no-wrap">
        <div className="flex-2.4">
          <div className="py-4 flex space-x-4 ">
            <button
              className={cx(
                'rounded-lg shadow-card border-1.5 border-transparent p-4 flex flex-1 text-left hover:shadow-card-medium-hov',
                {
                  [styles.active]: isCreditcardPayment
                }
              )}
              onClick={handlePaymentClick(true)}
            >
              <div>
                <RadioButton
                  id="creditCardRb"
                  checked={isCreditcardPayment}
                  label=" "
                  onClick={handlePaymentClick(true)}
                  onChange={() => {}}
                />
              </div>
              <div className="flex flex-col">
                <MaterialIcon className="text-4xl leading-6">credit_card</MaterialIcon>
                <span className="pt-3 pb-1 text-primary-1-shade font-bold">Credit Card</span>
                <span className="text-primary-2-tint text-xs">MasterCard, Visa, American Express</span>
              </div>
            </button>
            <button
              className={cx(
                'rounded-lg shadow-card border-1.5 border-transparent p-4 flex flex-1 text-left hover:shadow-card-medium-hov',
                {
                  [styles.active]: !isCreditcardPayment
                }
              )}
              onClick={handlePaymentClick(false)}
            >
              <div>
                <RadioButton
                  id="paypalRb"
                  checked={!isCreditcardPayment}
                  label=" "
                  onClick={handlePaymentClick(false)}
                  onChange={() => {}}
                />
              </div>
              <div className="flex flex-col items-start">
                <PaypalIcon className="h-8 leading-6"></PaypalIcon>
                <span className="pt-3 pb-1 text-primary-1-shade font-bold">Paypal</span>
                <span className="text-primary-2-tint text-xs">Safe payment online</span>
              </div>
            </button>
          </div>
          <span className="text-lg text-primary-3-shade uppercase font-medium">card information</span>
          <div className="py-4">
            <Input id="cardHolder" label="Name of Cardholder" />

            <div className="grid grid-cols-4 col-gap-4">
              <Input wrapperClassName="col-span-2" id="cardNumber" label="Card Number" />
              <Input wrapperClassName="col-span-1" id="expiry" placeholder="MM/YY" />
              <Input wrapperClassName="col-span-1" id="cvv" placeholder="CVV" />
            </div>
          </div>
          <span className="text-lg text-primary-3-shade uppercase font-medium">billing information</span>
          <div className="py-4">
            <div className="grid grid-cols-4 col-gap-4">
              <Input id="address1" label="Address 1" wrapperClassName="col-span-3" />
              {!isAddress2Shown ? (
                <button
                  className="text-primary-3-shade col-span-1 font-bold text-sm mb-6 flex justify-start items-center"
                  onClick={handleToggleAddress2}
                >
                  <MaterialIcon className="text-base mr-2">add_circle</MaterialIcon>
                  <span>Address 2</span>
                </button>
              ) : (
                <Input wrapperClassName="col-span-1" id="address2" placeholder="address 2" />
              )}
            </div>
            <div className="grid grid-cols-4 col-gap-4">
              <Input wrapperClassName="col-span-2" id="city" placeholder="City" />
              <Input wrapperClassName="col-span-1" id="state" placeholder="State" />
              <Input wrapperClassName="col-span-1" id="zipCode" placeholder="Zip Code" />
            </div>
          </div>
        </div>
        <div className="bg-primary-1-tint mx-8  w-full md:w-1px" />
        <div className="flex-1 shadow-card p-6 self-start">
          <span className="text-lg text-primary-3-shade uppercase font-medium">order summary</span>
          <div className="rounded-lg bg-accent-orange-7 flex items-center space-x-4 p-4 my-4">
            <PuzzlePro width="52" />
            <div className="flex flex-col justify-start">
              <span className="text-primary-1-shade font-bold">Pro Plan</span>
              <div className="text-sm">
                <span className="text-primary-1-shade">$500</span>{' '}
                <span className="text-primary-2-tint">/month</span>
              </div>
              <button className="text-accent-orange text-xs text-left font-bold">Change Plan</button>
            </div>
          </div>
          <div className="flex justify-between text-sm leading-loose">
            <span className="text-primary-2-tint">Billed now</span>
            <span className="text-primary-1shade">$6000</span>
          </div>
          <div className="flex justify-between text-sm leading-loose">
            <span className="text-primary-2-tint">Billing cycle</span>
            <span className="text-primary-1shade">Yearly</span>
          </div>
          <div className="flex justify-between text-sm leading-loose">
            <span className="text-primary-2-tint">Next bill date</span>
            <span className="text-primary-1shade">30 May 2021</span>
          </div>
          <hr className="border-primary-1-tint my-8" />
          <Link href="/sign-up/payment-complete">
            <button className="block w-full text-center py-3 font-medium text-white rounded-full bg-accent-orange mb-4 font-bold hover:bg-accent-shade">
              Complete Purchase
            </button>
          </Link>
          <p className="text-xs text-primary-2-shade text-center">
            By completing the purchase, I agree to Hackers & Painter's{' '}
            <span className="text-primary-3-shade">Terms</span> and &{' '}
            <span className="text-primary-3-shade"> Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

(Payment as any).getLayout = getSignupStepperLayout;

export default Payment;
