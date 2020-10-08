import React from 'react';

import { yupResolver } from '@hookform/resolvers';
import OrangeButton from 'components/buttons/OrangeButton';
import Input from 'components/forms/Input';
import { Routes } from 'constants/routes';
import yup from 'libs/yupMethods';
import { Controller, useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import { useResetPasswordMutation } from '_generated/graphql.output';

const schema = yup.object().shape({
  password: yup.string().label('Password').required().password(),
  confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match')
});

interface IFormInputs {
  password: string;
  confirmPassword: string;
}

const defaultValues = {
  password: '',
  confirmPassword: ''
};

const ResetPassword = () => {
  const { handleSubmit, errors, control } = useForm<IFormInputs>({
    defaultValues,
    resolver: yupResolver(schema)
  });
  const history = useHistory();
  const { token } = useParams<{ token: string }>();
  const [resetPassword, { error, loading }] = useResetPasswordMutation();

  const handleValidFormSubmit = (data: IFormInputs) => {
    resetPassword({ variables: { password: data.password, token } })
      .then(() => history.push(Routes.LOGIN))
      .catch(() => {});
  };

  return (
    <div className="h-full flex justify-center items-center px-4">
      <div className="max-w-sm mb-20">
        <p className="sm:text-center sm:text-xl text-2xl text-primary-2-tint font-helvetica font-thin mt-10 mb-6 leading-tight">
          Please enter your new password
        </p>
        {error && <div className="text-error font-bold text-center mb-4 error-animation">{error.message}</div>}
        <form onSubmit={handleSubmit(handleValidFormSubmit)}>
          <Controller
            as={Input}
            name="password"
            label="Password"
            type="password"
            control={control}
            error={errors.password?.message}
            marginBottom={errors.password ? 8 : 6}
          />
          <Controller
            as={Input}
            name="confirmPassword"
            label="confirmPassword"
            type="password"
            control={control}
            error={errors.confirmPassword?.message}
          />
          <OrangeButton type="submit" className="w-full" disabled={loading}>
            Send email
          </OrangeButton>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
