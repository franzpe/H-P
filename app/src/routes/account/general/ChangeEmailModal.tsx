import { yupResolver } from '@hookform/resolvers';
import Input from 'components/forms/Input';
import MaterialIcon from 'components/icons/MaterialIcon';
import { showErrorSnackbar, showSnackbar } from 'components/snackbar/snackbar';
import yup from 'utils/yupMethods';
import React, { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Modal from 'react-modal';
import { useChangeEmailRequestMutation } from '_generated/graphql.output';

interface IFormInputs {
  email: string;
}

const schema = yup.object().shape({
  email: yup.string().label('Email').email().required()
});

const defaultValues = {
  email: ''
};

const ChangeEmailModal: FC<{
  isOpen: boolean;
  onRequestClose(event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>): void;
}> = ({ isOpen, onRequestClose }) => {
  const { handleSubmit, errors, control } = useForm<IFormInputs>({
    defaultValues,
    resolver: yupResolver(schema)
  });
  const [changeEmailRequest] = useChangeEmailRequestMutation();

  const handleValidFormSubmit = (data: IFormInputs) => {
    changeEmailRequest({ variables: { email: data.email } })
      .then(() => {
        showSnackbar('Verification email has been sent');
        onRequestClose({} as any);
      })
      .catch(() => {
        showErrorSnackbar('Something went wrong, please try again or contact the adminstrator');
        onRequestClose({} as any);
      });
  };

  return (
    <Modal
      closeTimeoutMS={250}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="override"
      contentLabel="Example Modal"
      appElement={document.getElementById('root')!}
    >
      <button className="text-gray-500 absolute top-0 right-0 mt-3 mr-3" onClick={onRequestClose}>
        <MaterialIcon>close </MaterialIcon>
      </button>
      &#8203;
      <form onSubmit={handleSubmit(handleValidFormSubmit)}>
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10 sm:hidden ">
              <svg
                className="h-6 w-6 text-yellow-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3
                className="font-avenir-medium text-primary-2-shade text-2xl leading-6 font-medium "
                id="modal-headline"
              >
                Change email
              </h3>
              <div className="mt-2 mb-3">
                <p className="text-sm leading-5 text-gray-500">Are you sure you want to change your email?.</p>
              </div>
              <div>
                <Controller
                  as={Input}
                  name="email"
                  placeholder="New Email"
                  type="email"
                  control={control}
                  marginBottom={0}
                  error={errors.email?.message}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 flex sm:px-6 space-x-2 sm:flex sm:flex-row-reverse">
          <span className="mt-3 flex w-full rounded-md shadow-sm sm:ml-3 sm:mt-0 sm:w-auto">
            <button
              type="submit"
              className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-accent-orange text-base leading-6 font-medium text-white shadow-sm hover:bg-accent-shade focus:outline-none focus:bg-accent-shade focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5"
            >
              Send verification
            </button>
          </span>
          <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
            <button
              type="button"
              className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
              onClick={onRequestClose}
            >
              Cancel
            </button>
          </span>
        </div>
      </form>
    </Modal>
  );
};

export default ChangeEmailModal;
