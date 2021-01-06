import React, { useState } from 'react';

import { ReactComponent as Logo } from 'assets/images/logo.svg';
import OrangeButton from 'components/buttons/OrangeButton';
import Button from 'components/buttons/Button';
import { Controller, useForm } from 'react-hook-form';
import Input from 'components/forms/Input';
import { yupResolver } from '@hookform/resolvers';
import yup from 'libs/yupMethods';
import { useHistory } from 'react-router';
import { Routes } from 'constants/routes';
import { useForgotPasswordMutation } from '_generated/graphql.output';

const schema = yup.object().shape({
  email: yup.string().label('Email').email().required()
});

const ForgotPasswordPage = () => {
  const history = useHistory();
  const [isSent, setIsSent] = useState(false);
  const [forgotPassword, { error, loading }] = useForgotPasswordMutation();
  const { handleSubmit, errors, control } = useForm<{ email: string }>({
    defaultValues: { email: '' },
    resolver: yupResolver(schema)
  });

  const handleValidFormSubmit = (data: { email: string }) => {
    forgotPassword({ variables: { email: data.email } })
      .then(() => setIsSent(true))
      .catch(() => {});
  };

  return (
    <div className="h-full flex justify-center items-center px-4">
      <div className="max-w-sm mb-20">
        <Logo preserveAspectRatio="xMidYMid" className="w-full h-16 -ml-2" />
        {!isSent && <h2 className="sm:text-4xl md:text-center font-avenir-heavy mt-8">Forgot Password</h2>}
        <p className="sm:text-center sm:text-xl text-2xl text-primary-2-tint font-helvetica font-thin mt-10 mb-6 leading-tight">
          {!isSent
            ? "Enter your email address and we'll send you a link to reset your password"
            : 'Email has been sent. Please check out your inbox'}
        </p>
        {error && <div className="text-error font-bold text-center mb-4 error-animation">{error.message}</div>}
        {!isSent && (
          <>
            <form onSubmit={handleSubmit(handleValidFormSubmit)}>
              <Controller
                as={Input}
                name="email"
                label="Email"
                type="email"
                control={control}
                error={errors.email?.message}
              />
              <OrangeButton type="submit" className="w-full" disabled={loading}>
                Send email
              </OrangeButton>
            </form>
            <Button
              className="border border-accent-orange w-full py-2 mt-4 text-accent-orange font-avenir-heavy hover:filter-darken-80"
              onClick={() => history.push(Routes.LOGIN)}
            >
              Cancel
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
