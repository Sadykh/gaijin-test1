import {GraphQLError} from 'graphql';
import {ValidatorOptions} from "class-validator/validation/ValidatorOptions";
import {validate} from "class-validator";

export class ValidationError extends GraphQLError {
    validation: any;

    static async validateNotify(object: Object, validatorOptions?: ValidatorOptions) {
        return ValidationError.convertValidateToArray(await validate(object, validatorOptions));
    }

    static convertValidateToArray(validationErrors) {
        return new Promise(resolve => {
            let errors = [];
            validationErrors.forEach(item => {
                errors.push({
                    key: item.property,
                    message: item.constraints
                });
            });
            if (errors.length > 0) {
                throw new ValidationError(errors);
            } else {
                resolve();
            }
        })
    }

    constructor(errors) {
        super('The request is invalid.');
        this.validation = errors.reduce((result, error) => {
            if (Object.prototype.hasOwnProperty.call(result, error.key)) {
                result[error.key].push(error.message);
            } else {
                result[error.key] = [error.message];
            }
            return result;
        }, {});
    }
}

export default ValidationError;