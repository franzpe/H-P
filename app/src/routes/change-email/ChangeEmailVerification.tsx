import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import cx from 'classnames';

import { MaterialIconType } from 'types';
import { useChangeEmailMutation } from '_generated/graphql.output';
import MaterialIcon from 'components/icons/MaterialIcon';
import { Routes } from 'constants/routes';

const ChangeEmailVerification = () => {
  const [changeEmail, { error, loading }] = useChangeEmailMutation();
  const { token } = useParams<{ token: string }>();
  const [countdown, setCountdown] = useState(3);
  const history = useHistory();

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (token) {
      changeEmail({ variables: { token } })
        .catch(() => {})
        .finally(() => {
          intervalId = setInterval(() => {
            setCountdown(prevCountdown => prevCountdown - 1);
          }, 1000);
        });
    } else {
      history.push(Routes.LOGIN);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      history.push(Routes.LOGIN);
    }
  }, [countdown]);

  if (loading) {
    return (
      <div className="h-full flex flex-col justify-center items-center px-4">
        <p className="max-w-md text-center sm:text-xl text-2xl text-primary-2-tint font-helvetica font-thin mt-2">
          Your email is being changed ...
        </p>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col justify-center items-center px-4">
      <MaterialIcon
        className={cx('text-8xl', { 'text-green-500': !error, 'text-error': error })}
        type={MaterialIconType.Round}
      >
        {!error ? 'check_circle' : 'cancel'}
      </MaterialIcon>
      <p className="max-w-md text-center sm:text-xl text-2xl text-primary-2-tint font-helvetica font-thin mt-2">
        {!error
          ? `Your email has been changed, you'll be redirected to the login page in ${countdown}`
          : `Your email has not been changed, the token is invalid or has expired. You'll be redirected to login page in ${countdown}`}
      </p>
    </div>
  );
};

export default ChangeEmailVerification;
