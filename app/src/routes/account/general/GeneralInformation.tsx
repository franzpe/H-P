import cx from 'classnames';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { useUserGeneralInfoQuery, useUpdateUserBasicInfoMutation } from '_generated/graphql.output';
import { showErrorSnackbar, showSnackbar } from 'components/snackbar/snackbar';
import ControllerInput from 'components/forms/ControllerInput';

import accountStyles from '../Account.module.css';
import styles from './GeneralInformation.module.css';
import PasswordSettingsForm from './PasswordSettingsForm';
import ChangeEmailModal from './ChangeEmailModal';

interface IFormInputs {
  name: string | null;
  company: string | null;
  location: string | null;
  phoneNumber: string | null;
}

const defaultValues = {
  name: '',
  company: '',
  location: '',
  phoneNumber: ''
};

const GeneralInformation = () => {
  const { data, loading: isProfileLoading } = useUserGeneralInfoQuery();
  const [isEditEmailModalOpen, setIsEditEmailModalOpen] = useState(false);

  const {
    control: controlBasic,
    setValue,
    reset,
    watch,
    formState: { isDirty }
  } = useForm<IFormInputs>({
    defaultValues,
    mode: 'onBlur'
  });
  const [isEditing, setIsEditing] = useState(false);

  const [updateBasicInfo] = useUpdateUserBasicInfoMutation();
  const values = watch();

  useEffect(() => {
    if (isEditing) {
      Object.keys(defaultValues).forEach(key => setValue(key, (data?.me as any)[key]));
    }
  }, [isEditing]);

  const handleBlur = (label: string) => (event: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;

    if (!isDirty) return;

    updateBasicInfo({
      variables: {
        info: { [name]: value }
      }
    })
      .then(() => showSnackbar(`${label} has been updated`))
      .catch(() => showErrorSnackbar('Error occured while updating'))
      .finally(() => reset(values));
  };

  if (isProfileLoading) return null;

  return (
    <>
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
            <span className={accountStyles.textWeak}>{data?.me.name}</span>
          ) : (
            <ControllerInput
              name="name"
              control={controlBasic}
              type="text"
              wrapperClassName={styles.inputWrapper}
              marginBottom={3}
              onBlur={handleBlur('Name')}
            />
          )}
        </div>
        <div className="leading-loose ">
          <span className={cx(accountStyles.textStrong, accountStyles.textInfoLabel)}>Company</span>
          {!isEditing ? (
            <span className={accountStyles.textWeak}>{data?.me.company}</span>
          ) : (
            <ControllerInput
              name="company"
              control={controlBasic}
              type="text"
              wrapperClassName={styles.inputWrapper}
              marginBottom={3}
              onBlur={handleBlur('Company')}
            />
          )}
        </div>
        <div className="leading-loose ">
          <span className={cx(accountStyles.textStrong, accountStyles.textInfoLabel)}>Location</span>
          {!isEditing ? (
            <span className={accountStyles.textWeak}>{data?.me.location}</span>
          ) : (
            <ControllerInput
              name="location"
              control={controlBasic}
              type="text"
              wrapperClassName={styles.inputWrapper}
              marginBottom={3}
              onBlur={handleBlur('Location')}
            />
          )}
        </div>
        <div className="leading-loose ">
          <span className={cx(accountStyles.textStrong, accountStyles.textInfoLabel)}>Phone Number</span>
          {!isEditing ? (
            <span className={accountStyles.textWeak}>{data?.me.phoneNumber}</span>
          ) : (
            <ControllerInput
              name="phoneNumber"
              control={controlBasic}
              type="text"
              wrapperClassName={styles.inputWrapper}
              marginBottom={3}
              onBlur={handleBlur('Phone number')}
            />
          )}
        </div>
      </section>
      <section className="py-4 max-w-sm">
        <PasswordSettingsForm />
      </section>
    </>
  );
};

export default GeneralInformation;
