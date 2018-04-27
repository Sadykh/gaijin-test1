import {IsEmail, IsNotEmpty, IsString, Length} from "class-validator";
import ValidationError from "../../resolvers/ValidationError";
import {getCustomRepository} from "typeorm";
import UserRepository from "../../repository/UserRepository";
import {IsEmailAlreadyExist} from "../../validators/IsEmailAlreadyExist";

export default class UserCreateService {

    @IsNotEmpty()
    @IsEmail()
    @IsString()
    @IsEmailAlreadyExist({
        message: "Email $value already exists. Choose another email."
    })
    email: string;

    @IsNotEmpty()
    @IsString()
    @Length(6, 255)
    password: string;

    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }

    async save() {
        await ValidationError.validateNotify(this);
        return getCustomRepository(UserRepository).createAndSave(this.email, this.password);
    }
}
