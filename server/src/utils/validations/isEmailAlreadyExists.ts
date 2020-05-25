import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface
} from 'class-validator';
import { User } from '../../services/user/UserEntity';

@ValidatorConstraint({ async: true })
export class IsEmailAlreadyExistsConstraint implements ValidatorConstraintInterface {
  validate(email: string) {
    return User.findOne({ where: { email } }).then(user => {
      return user ? false : true;
    });
  }
}

export function IsEmailAlreadyExists(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsEmailAlreadyExistsConstraint
    });
  };
}
