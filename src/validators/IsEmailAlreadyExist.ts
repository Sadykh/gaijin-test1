import {
    registerDecorator,
    ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface,
    ValidationArguments
} from "class-validator";
import {getRepository} from "typeorm";
import {User} from "../entity/User";

@ValidatorConstraint({async: true})
export class IsEmailAlreadyExistConstraint implements ValidatorConstraintInterface {

    validate(email: any, args: ValidationArguments) {
        let UserRepository = getRepository(User);
        return UserRepository.findOne({where: {email: email}}).then(user => {
            if (user) return false;
            return true;
        });
    }

}

export function IsEmailAlreadyExist(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsEmailAlreadyExistConstraint
        });
    };
}