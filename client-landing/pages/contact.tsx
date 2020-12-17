import Link from 'next/link';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';

import React, { useState } from 'react';
import Input from '../components/forms/Input';
import Select from '../components/forms/Select';
import TextArea from '../components/forms/TextArea';
import { yupResolver } from '@hookform/resolvers';
import { useRouter } from 'next/router';

interface IFormInputs {
  email: string;
  message: string;
  category: { value: string; label: string } | null;
}

const schema = yup.object().shape({
  email: yup.string().label('Email').email().required(),
  message: yup.string().label('Message').required()
});

const defaultValues = {
  email: '',
  message: '',
  category: null
};

const Contact = () => {
  const { handleSubmit, control, errors } = useForm<IFormInputs>({
    defaultValues,
    resolver: yupResolver(schema)
  });
  const [isRequestSuccessful, setIsRequestSuccessful] = useState(true);
  const router = useRouter();

  const handleValidSubmit = (inputs: IFormInputs, ev: React.BaseSyntheticEvent) => {
    const form = ev.target;
    const data = new FormData(form);

    // Spambot protection
    if (data.get('_gotcha')) return;

    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');

    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        router.push('/contact-sent');
      } else {
        setIsRequestSuccessful(false);
      }
    };

    xhr.send(data);
  };

  return (
    <div className="mx-auto max-w-3xl w-full text-center">
      <h2 className="font-bold mb-6 sm:mb-6 text-3xl sm:text-5xl">Get In Touch With Us</h2>
      <p className="text-2xl font-avenir-light text-black">
        Questions, bug reports, feature requests ⏤ we want to hear it all.
      </p>
      <Link href="/faq">
        <a className="text-2xl text-primary-3-shade hover:opacity-75 font-avenir-heavy">
          View frequently asked questions
        </a>
      </Link>
      {!isRequestSuccessful && (
        <div className="text-error font-bold text-center mt-4">Ooops! There was an error.</div>
      )}
      <form
        className="max-w-xl mx-auto text-left mt-16"
        action="https://formspree.io/f/mwkwodzz"
        method="POST"
        onSubmit={handleSubmit(handleValidSubmit)}
      >
        <Controller
          as={Input}
          id="email"
          name="email"
          label="Email"
          wrapperClassName="w-full"
          error={errors?.email?.message}
          control={control}
        />
        <Controller
          name="category"
          as={
            <Select
              id="candidateType"
              classNamePrefix="react-select"
              isSearchable={false}
              placeholder="What's this about?"
              options={[{ value: 'question', label: 'Question' }]}
            />
          }
          control={control}
        />
        <Controller
          as={TextArea}
          id="message"
          name="message"
          value=""
          wrapperClassName="w-full"
          rows={6}
          error={errors?.message?.message}
          control={control}
        />
        <input type="text" name="_gotcha" style={{ display: 'none' }} />
        <button className="text-center py-2 w-full font-medium text-white text-sm md:text-base rounded-full bg-accent-orange hover:bg-accent-shade border border-accent-orange">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
