import {Repository, EntityRepository} from "typeorm";
import {User, UserLanguageList, UserStatusList, UserTotpEnableList} from "../entity/User";
import * as md5 from "md5";
import * as moment from "moment";
import * as bcrypt from "bcryptjs";

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

@EntityRepository(User)
export default class UserRepository extends Repository<User> {

    /**
     * Обновление пароля пользователя
     * @param {User} user
     * @param {string} password
     * @return {Promise<User>}
     */
    async updatePassword(user: User, password: string) {
        user.passwordHash = await bcrypt.hash(password, 8);
        user.passwordUpdatedAt = moment().unix();
        user.updatedAt = moment().unix();
        return this.save(user);
    }

    /**
     * Создать и сохранить нового пользователя
     * @param {string} email
     * @param {string} password
     * @return {Promise<User>}
     */
    async createAndSave(email: string, password: string) {
        const user = new User();
        user.token = md5(email + getRandomArbitrary(0, 100));
        user.confirmEmailToken = md5(email + getRandomArbitrary(0, 100));
        user.passwordHash = await bcrypt.hash(password, 8);
        user.passwordResetToken = md5(email + getRandomArbitrary(0, 100));
        user.email = email;
        user.statusId = UserStatusList.new;
        user.languageId = UserLanguageList.ru;
        user.totpEnabled = UserTotpEnableList.isDisable;
        user.totpSecret = md5(email + getRandomArbitrary(0, 100));
        user.passwordUpdatedAt = moment().unix();
        user.createdAt = moment().unix();
        user.updatedAt = moment().unix();
        return this.save(user);
    }

    /**
     * Поиск пользователя по токену
     * @param {string} token
     * @return {Promise<User | undefined>}
     */
    async findByToken(token: string) {
        return this.findOne({where: {token: token}});
    }
}