import React, { useState } from 'react';
import axios from 'axios';
import Input from '../../components/forms/Input';
import * as yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import { useRouter } from 'next/router';
import qs from 'querystring';
import Link from 'next/link';

interface IFormInputs {
  name: string;
  email: string;
}

const schema = yup.object().shape({
  email: yup.string().label('Email').email().required()
});

const defaultValues = {
  name: '',
  email: ''
};

// TODO: Protection against robot
const WaitingList = () => {
  const { handleSubmit, control, errors } = useForm<IFormInputs>({
    defaultValues,
    resolver: yupResolver(schema)
  });
  const [subscribeError, setSubscribeError] = useState('');
  const router = useRouter();

  const handleValidFormSubmit = async (data: IFormInputs) => {
    const res = await axios.post(
      'https://www.lunetalabs.com/sendy/subscribe',
      qs.stringify({
        api_key: 'Ccb7TPCDWj572g2JtZlx',
        list: 'n5zsD7kB46eI7MKWOWSO0g',
        name: data.name,
        email: data.email,
        boolean: true
      })
    );

    if (res.data !== 1) {
      setSubscribeError(res.data);
      return;
    }

    router.push('/sign-up/waiting-list-subscribed');
  };

  return (
    <>
      <h3 className="text-center font-semibold mb-20 text-2xl md:text-4xl">Sign up for waiting list</h3>
      <div className="max-w-sm mx-auto">
        {subscribeError && <div className="text-error font-bold text-center mb-4">{subscribeError}</div>}
        <form onSubmit={handleSubmit(handleValidFormSubmit)}>
          <Controller
            as={Input}
            name="name"
            label="Name"
            type="text"
            control={control}
            wrapperClassName="w-full"
          />
          <Controller
            as={Input}
            name="email"
            label="Email"
            type="email"
            control={control}
            wrapperClassName="w-full"
            error={errors.email?.message}
          />
          <p className="text-xs">
            After signing up for wait list, you will also receive occasional surveys, newsletters and special
            offers from Talentito via email. We will not sell or distribute your email address to any third party
            at any time. View our Privacy Policy{' '}
            <Link href="/privacy-policy">
              <a className="underline font-semibold hover:opacity-75">here</a>
            </Link>
            .
          </p>
          <button className="block w-full text-center py-2 font-medium text-white rounded-full bg-accent-orange mt-8 mb-6 hover:bg-accent-shade">
            Sign up
          </button>
        </form>
      </div>
    </>
  );
};

export default WaitingList;
