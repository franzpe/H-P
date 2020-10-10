import Input from 'components/forms/Input';
import cx from 'classnames';
import React, { Fragment } from 'react';
import { Controller, useForm } from 'react-hook-form';

import accountStyles from './AccountPage.module.css';
import { Link } from 'react-router-dom';
import { Routes } from 'constants/routes';
import OrangeButton from 'components/buttons/OrangeButton';
import yup from 'libs/yupMethods';
import { yupResolver } from '@hookform/resolvers';
import { useChangePasswordMutation, useProfileGeneralInfoQuery } from '_generated/graphql.output';
import { showErrorSnackbar, showSnackbar } from 'libs/snackbar';

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

const GeneralInformation = () => {
  const { data, loading: isProfileLoading } = useProfileGeneralInfoQuery();
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

  if (isProfileLoading) return null;

  return (
    <Fragment>
      <section className="pb-2">
        <div className="mb-4">
          <h5 className={accountStyles.heading}>General Account Settings </h5>
          <button className={accountStyles.headingLink}>Edit</button>
        </div>
        <div className="leading-loose">
          <span className={cx(accountStyles.textStrong, accountStyles.textInfoLabel)}>Name</span>
          <span className={accountStyles.textWeak}>{data?.me.profile.basicSection.name}</span>
        </div>
        <div className="leading-loose">
          <span className={cx(accountStyles.textStrong, accountStyles.textInfoLabel)}>Company</span>
          <span className={accountStyles.textWeak}>{data?.me.profile.basicSection.company}</span>
        </div>
        <div className="leading-loose">
          <span className={cx(accountStyles.textStrong, accountStyles.textInfoLabel)}>Location</span>
          <span className={accountStyles.textWeak}>{data?.me.profile.basicSection.location}</span>
        </div>
        <div className="leading-loose">
          <span className={cx(accountStyles.textStrong, accountStyles.textInfoLabel)}>Email</span>
          <span className={accountStyles.textWeak}>{data?.me.email}</span>
        </div>
        <div className="leading-loose">
          <span className={cx(accountStyles.textStrong, accountStyles.textInfoLabel)}>Phone Number</span>
          <span className={accountStyles.textWeak}>{data?.me.profile.basicSection.phoneNumber}</span>
        </div>
      </section>
      <section className="py-4 max-w-sm">
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
            Save Changes
          </OrangeButton>
        </form>
      </section>
    </Fragment>
  );
};

export default GeneralInformation;
