import React from 'react';
import cx from 'classnames';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import { useHistory } from 'react-router';

import Input from '../../components/forms/Input';
import yup from '../../libs/yupMethods';
import { Routes } from '../../constants/routes';
import { useLogin } from '../../libs/auth/useLogin';
import styles from './Login.module.css';

import { ReactComponent as Logo } from '../../assets/images/logo.svg';

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

const LoginPage = () => {
  const { handleSubmit, errors, control } = useForm<IFormInputs>({
    defaultValues,
    resolver: yupResolver(schema)
  });
  const history = useHistory();
  const [login, { error }] = useLogin();

  const handleValidFormSubmit = (data: IFormInputs) => {
    login(data.email, data.password)
      .then(succ => succ && history.push(Routes.DASHBOARD))
      .catch(() => {});
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <div className={styles.signin}>
          <Logo className={styles.logo} />
          <p className="text-2xl text-primary-2-tint font-helvetica font-thin leading-very-tight my-12">
            Welcome back, please log in to your account.
          </p>
          {error && <div className={cx(styles.error, 'error-animation')}>Invalid email or password</div>}
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
            <div className="flex justify-between mb-8">
              <label htmlFor="remember" className="flex items-center">
                <input id="remember" type="checkbox" className="form-checkbox" />
                <span className="ml-2">Remember me</span>
              </label>
              <a href={Routes.FORGOT_PASSWORD} className="text-primary-3-shade font-bold hover:filter-darken-80 ">
                Forgot password
              </a>
            </div>
            <button
              type="submit"
              className="w-full py-2 text-center font-medium text-white rounded-full bg-accent-orange hover:bg-accent-shade"
            >
              Log in
            </button>
          </form>
          <hr className="border-primary-1-tint my-4" />
          <p>New to Hackers and Painters?</p>
          <a
            href="https://hackersandpainters.io/sign-up/waiting-list"
            className="text-primary-3-shade font-bold hover:filter-darken-80"
          >
            Create an account
          </a>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <h2 className="font-bold text-white ">Discover hidden talent.</h2>
        <button className="py-2 px-16 mt-8 text-center font-medium text-white rounded-full border border-white hover:bg-accent-shade">
          Sign up now
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
