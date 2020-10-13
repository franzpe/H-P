import React from 'react';
import cx from 'classnames';

import { Link } from 'react-router-dom';
import { Routes } from 'constants/routes';
import OrangeButton from 'components/buttons/OrangeButton';
import yup from 'libs/yupMethods';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import { useChangePasswordMutation } from '_generated/graphql.output';
import { showErrorSnackbar, showSnackbar } from 'libs/snackbar';

import accountStyles from '../AccountPage.module.css';
import Input from 'components/forms/Input';

const schema = yup.object().shape({
  currentPassword: yup.string().label('Password').required().password(),
  newPassword: yup.string().label('Password').required().password(),
  confirmPassword: yup.string().oneOf([yup.ref('newPassword')], 'Passwords must match')
});

interface IFormInputs {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

const defaultValues = {
  currentPassword: '',
  newPassword: '',
  confirmPassword: ''
};

const PasswordSettingsForm = () => {
  const { control, errors, handleSubmit, reset } = useForm<IFormInputs>({
    defaultValues,
    resolver: yupResolver(schema)
  });
  const [changePassword, { loading }] = useChangePasswordMutation();

  const handleValidFormSubmit = (data: IFormInputs) => {
    changePassword({
      variables: { currentPassword: data.currentPassword, newPassword: data.newPassword }
    })
      .then(() => showSnackbar('Password has been changed'))
      .catch(err => showErrorSnackbar(err.message))
      .finally(() => reset());
  };

  return (
    <form onSubmit={handleSubmit(handleValidFormSubmit)}>
      <h5 className={cx(accountStyles.heading, 'pb-3')}>Password Settings</h5>
      <p className={cx(accountStyles.textStrong, 'font-avenir-book')}>Current Password</p>
      <Controller
        as={Input}
        name="currentPassword"
        type="password"
        marginBottom={3}
        control={control}
        error={errors.currentPassword?.message}
      />
      <p className={cx(accountStyles.textStrong, 'font-avenir-book')}>New Password</p>
      <Controller
        as={Input}
        name="newPassword"
        type="password"
        marginBottom={3}
        control={control}
        error={errors.newPassword?.message}
      />
      <p className={cx(accountStyles.textStrong, 'font-avenir-book')}>Confirm New Password</p>
      <Controller
        as={Input}
        name="confirmPassword"
        type="password"
        marginBottom={3}
        control={control}
        error={errors.confirmPassword?.message}
      />
      <Link to={Routes.FORGOT_PASSWORD} className="underlined-link">
        Forgot your password?
      </Link>
      <OrangeButton className="block mt-4 px-16" disabled={loading}>
        Change Password
      </OrangeButton>
    </form>
  );
};

export default React.memo(PasswordSettingsForm);
