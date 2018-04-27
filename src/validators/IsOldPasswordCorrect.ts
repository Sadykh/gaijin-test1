import {
    registerDecorator,
    ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface,
    ValidationArguments
} from "class-validator";
import * as bcrypt from "bcryptjs";

@ValidatorConstraint({async: true})
export class IsOldPasswordCorrectConstraint implements ValidatorConstraintInterface {

    async validate(oldPassword: string, args: ValidationArguments) {
        const currentPasswordHash = (args.object as any)['user']['passwordHash'];
        return await bcrypt.compare(oldPassword, currentPasswordHash);
    }

}

export function IsOldPasswordCorrect(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsOldPasswordCorrectConstraint
        });
    };
}