import Input from 'components/forms/Input';
import cx from 'classnames';
import React, { Fragment, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import accountStyles from '../AccountPage.module.css';
import { useProfileGeneralInfoQuery } from '_generated/graphql.output';
import styles from './GeneralInformation.module.css';
import PasswordSettingsForm from './PasswordSettingsForm';
import ChangeEmailModal from './ChangeEmailModal';

interface IFormInputs {
  name: string;
  company: string;
  location: string;
  phoneNumber: string;
}

const defaultValues = {
  name: '',
  company: '',
  location: '',
  phoneNumber: ''
};

const GeneralInformation = () => {
  const { data, loading: isProfileLoading } = useProfileGeneralInfoQuery();
  const [isEditEmailModalOpen, setIsEditEmailModalOpen] = useState(false);

  const { control: controlBasic, setValue } = useForm<IFormInputs>({ defaultValues: defaultValues });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (isEditing) {
      Object.keys(defaultValues).forEach(key => setValue(key, (data?.me.profile.basicSection as any)[key]));
    }
  }, [isEditing]);

  const handleBlur = () => (e: any) => {
    // TODO Save
  };

  if (isProfileLoading) return null;

  return (
    <Fragment>
      <ChangeEmailModal isOpen={isEditEmailModalOpen} onRequestClose={() => setIsEditEmailModalOpen(false)} />
      <section className="pb-2">
        <div className="mb-4">
          <h5 className={accountStyles.heading}>General Account Settings </h5>
          {!isEditing && (
            <button className={accountStyles.headingLink} onClick={() => setIsEditing(true)}>
              Edit
            </button>
          )}
        </div>
        <div className="leading-loose">
          <span className={cx(accountStyles.textStrong, accountStyles.textInfoLabel)}>Email</span>
          <span className={accountStyles.textWeak}>{data?.me.email}</span>
          <button className={accountStyles.headingLink} onClick={() => setIsEditEmailModalOpen(true)}>
            Change
          </button>
        </div>
        <div className="leading-loose ">
          <span className={cx(accountStyles.textStrong, accountStyles.textInfoLabel)}>Name</span>
          {!isEditing ? (
            <span className={accountStyles.textWeak}>{data?.me.profile.basicSection.name}</span>
          ) : (
            <Controller
              as={Input}
              name="name"
              type="text"
              wrapperClassName={styles.inputWrapper}
              marginBottom={3}
              control={controlBasic}
              onBlur={handleBlur}
            />
          )}
        </div>
        <div className="leading-loose ">
          <span className={cx(accountStyles.textStrong, accountStyles.textInfoLabel)}>Company</span>
          {!isEditing ? (
            <span className={accountStyles.textWeak}>{data?.me.profile.basicSection.company}</span>
          ) : (
            <Controller
              as={Input}
              name="company"
              type="text"
              wrapperClassName={styles.inputWrapper}
              marginBottom={3}
              control={controlBasic}
              onBlur={handleBlur}
            />
          )}
        </div>
        <div className="leading-loose ">
          <span className={cx(accountStyles.textStrong, accountStyles.textInfoLabel)}>Location</span>
          {!isEditing ? (
            <span className={accountStyles.textWeak}>{data?.me.profile.basicSection.location}</span>
          ) : (
            <Controller
              as={Input}
              name="location"
              type="text"
              wrapperClassName={styles.inputWrapper}
              marginBottom={3}
              control={controlBasic}
              onBlur={handleBlur}
            />
          )}
        </div>
        <div className="leading-loose ">
          <span className={cx(accountStyles.textStrong, accountStyles.textInfoLabel)}>Phone Number</span>
          {!isEditing ? (
            <span className={accountStyles.textWeak}>{data?.me.profile.basicSection.phoneNumber}</span>
          ) : (
            <Controller
              as={Input}
              name="phoneNumber"
              type="text"
              wrapperClassName={styles.inputWrapper}
              marginBottom={3}
              control={controlBasic}
              onBlur={handleBlur}
            />
          )}
        </div>
      </section>
      <section className="py-4 max-w-sm">
        <PasswordSettingsForm />
      </section>
    </Fragment>
  );
};

export default GeneralInformation;
