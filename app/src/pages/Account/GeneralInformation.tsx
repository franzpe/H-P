import Input from 'components/forms/Input';
import cx from 'classnames';
import React, { Fragment } from 'react';
import { Controller, useForm } from 'react-hook-form';

import accountStyles from './AccountPage.module.css';
import { Link } from 'react-router-dom';
import { Routes } from 'constants/routes';
import OrangeButton from 'components/buttons/OrangeButton';

const GeneralInformation = () => {
  const { control, errors } = useForm({});

  return (
    <Fragment>
      <section className="pb-2">
        <div className="mb-4">
          <h5 className={accountStyles.heading}>General Account Settings </h5>
          <button className={accountStyles.headingLink}>Edit</button>
        </div>
        <div className="leading-loose">
          <span className={cx(accountStyles.textStrong, accountStyles.textInfoLabel)}>Name</span>
          <span className={accountStyles.textWeak}>Jane Doe</span>
        </div>
        <div className="leading-loose">
          <span className={cx(accountStyles.textStrong, accountStyles.textInfoLabel)}>Company</span>
          <span className={accountStyles.textWeak}>Amazon</span>
        </div>
        <div className="leading-loose">
          <span className={cx(accountStyles.textStrong, accountStyles.textInfoLabel)}>Location</span>
          <span className={accountStyles.textWeak}>Palo Alto</span>
        </div>
        <div className="leading-loose">
          <span className={cx(accountStyles.textStrong, accountStyles.textInfoLabel)}>Email</span>
          <span className={accountStyles.textWeak}>pobocekfrantisek@gmail.com</span>
        </div>
        <div className="leading-loose">
          <span className={cx(accountStyles.textStrong, accountStyles.textInfoLabel)}>Phone Number</span>
          <span className={accountStyles.textWeak}>(650) 867 2345</span>
        </div>
      </section>
      <section className="py-4 max-w-sm">
        <h5 className={cx(accountStyles.heading, 'pb-3')}>Password Settings</h5>
        <p className={cx(accountStyles.textStrong, 'font-avenir-book')}>Current Password</p>
        <Controller
          as={Input}
          name="oldPassword"
          type="password"
          marginBottom={3}
          control={control}
          error={errors.oldPassword?.message}
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
        <OrangeButton className="block mt-4 px-16">Save Changes</OrangeButton>
      </section>
    </Fragment>
  );
};

export default GeneralInformation;
