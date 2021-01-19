import * as yup from 'yup';

const passwordRegex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d'{}[\]|\\;':",./`<>?^!@#$%&*()_+=~-]{0,}$/;

yup.addMethod<yup.StringSchema>(yup.string, 'password', function (msg?: string) {
  const message = msg || 'Password needs to contain atleast one capital and small letter';

  return this.test('password', message, function (value) {
    let valid = false;

    if (value && passwordRegex.test(value)) {
      valid = true;
    }

    return valid || this.createError({ path: this.path, message });
  });
});

export default yup;
