import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface
} from 'class-validator';
import { inject, injectable } from 'tsyringe';
import { Connection, Repository } from 'typeorm';
import { User } from '../../modules/user/user.model';

@injectable()
@ValidatorConstraint({ async: true })
export class IsEmailAlreadyExistsConstraint implements ValidatorConstraintInterface {
  private userRepository: Repository<User>;

  constructor(@inject(Connection) connection: Connection) {
    this.userRepository = connection.getRepository(User);
  }

  async validate(email: string) {
    const user = await this.userRepository.findOne({ where: { email } });
    return !user;
  }
}

export function IsEmailAlreadyExists(validationOptions?: ValidationOptions) {
  return function (object: Record<string, any>, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsEmailAlreadyExistsConstraint
    });
  };
}
