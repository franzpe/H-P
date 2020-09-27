import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';

import Input from '../../components/forms/Input';
import yup from '../../libs/yupMethods';
import { useHistory } from 'react-router';
import { routes } from '../../constants/routes';
import { useLogin } from '../../libs/auth/hooks';

interface IFormInputs {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().label('Email').email().required(),
  password: yup.string().label('Password').required().password()
});

const defaultValues = {
  email: '',
  password: ''
};

const LogIn = () => {
  const { handleSubmit, errors, control } = useForm<IFormInputs>({
    defaultValues,
    resolver: yupResolver(schema)
  });
  const history = useHistory();
  const [login, { error }] = useLogin();

  const handleValidFormSubmit = (data: IFormInputs) => {
    login(data.email, data.password).then(succ => succ && history.push(routes.DASHBOARD));
  };

  return (
    <div>
      {error && <div>Invalid email or password</div>}
      <form onSubmit={handleSubmit(handleValidFormSubmit)}>
        <Controller
          as={Input}
          name="email"
          label="Email"
          type="email"
          control={control}
          error={errors.email?.message}
        />
        <Controller
          as={Input}
          name="password"
          label="Password"
          type="password"
          control={control}
          error={errors.password?.message}
        />
        <button
          type="submit"
          className="block w-full py-2 text-center font-medium text-white rounded-full bg-accent-orange hover:bg-accent-shade"
        >
          Log in
        </button>
      </form>
    </div>
  );
};

export default LogIn;
