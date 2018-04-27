import {IsNotEmpty, IsString, Length} from "class-validator";
import ValidationError from "../../resolvers/ValidationError";
import {getCustomRepository} from "typeorm";
import UserRepository from "../../repository/UserRepository";
import {User} from "../../entity/User";
import {IsOldPasswordCorrect} from "../../validators/IsOldPasswordCorrect";

export default class UserUpdatePasswordService {

    user: User;

    @IsNotEmpty()
    @IsString()
    @IsOldPasswordCorrect({
        message: "Old password is incorrect."
    })
    oldPassword: string;

    @IsNotEmpty()
    @IsString()
    @Length(6, 255)
    newPassword: string;

    /**
     *
     * @param {User} user
     * @param {string} oldPassword
     * @param {string} newPassword
     */
    constructor(user: User, oldPassword: string, newPassword: string) {
        this.user = user;
        this.oldPassword = oldPassword;
        this.newPassword = newPassword;
    }

    /**
     *
     * @return {Promise<Promise<User>>}
     */
    async save() {
        await ValidationError.validateNotify(this);
        return getCustomRepository(UserRepository).updatePassword(this.user, this.newPassword);
    }
}
