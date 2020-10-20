import React, { Fragment } from 'react';
import axios from 'axios';
import Input from '../../components/forms/Input';
import * as yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import { useRouter } from 'next/router';
import qs from 'querystring';

interface IFormInputs {
  name: string;
  email: string;
  isNewsletterChecked: boolean;
}

const schema = yup.object().shape({
  email: yup.string().label('Email').email().required()
});

const defaultValues = {
  name: '',
  email: '',
  isNewsletterChecked: false
};

const WaitingList = () => {
  const { handleSubmit, control, errors, register } = useForm<IFormInputs>({
    defaultValues,
    resolver: yupResolver(schema)
  });
  const router = useRouter();

  const handleValidFormSubmit = async (data: IFormInputs) => {
    const waitingListRequest = axios.post(
      'https://www.lunetalabs.com/sendy/subscribe',
      qs.stringify({
        api_key: 'Ccb7TPCDWj572g2JtZlx',
        list: 'n5zsD7kB46eI7MKWOWSO0g',
        name: data.name,
        email: data.email,
        boolean: true
      })
    );

    let newsletterRequest = null;
    if (data.isNewsletterChecked) {
      newsletterRequest = axios.post(
        'https://www.lunetalabs.com/sendy/subscribe',
        qs.stringify({
          api_key: 'Ccb7TPCDWj572g2JtZlx',
          list: '9vMQgdw7ujANN9wgDCuyOw',
          name: data.name,
          email: data.email,
          boolean: true
        })
      );
    }

    await Promise.all([waitingListRequest, newsletterRequest]);

    router.push('/sign-up/waiting-list-subscribed');
  };

  return (
    <Fragment>
      <h3 className="text-center font-semibold mb-20 text-2xl md:text-4xl">Sign up for waiting list</h3>
      <div className="max-w-sm mx-auto">
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
          <label className="flex items-center -mt-2">
            <input name="isNewsletterChecked" ref={register} type="checkbox" className="form-checkbox" />
            <span className="ml-2 text-sm text-primary-2-tint">
              Send me <b>Hackers & Painters</b> news, events and offers
            </span>
          </label>
          <button className="block w-full text-center py-2 font-medium text-white rounded-full bg-accent-orange mt-8 mb-6 hover:bg-accent-shade">
            Sign up
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default WaitingList;
