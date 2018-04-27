import {getCustomRepository} from "typeorm";
import UserRepository from "../repository/UserRepository";

/**
 * Функция проверяет http authorization заголовок и пытается найти пользователя в базе
 * Если пользователь найден, то сохраняем его как request.user
 * @param req
 * @param res
 * @param next
 * @return {Promise<void>}
 */
export async function getUser(req, res, next) {
    let token = null;
    if (req.headers && req.headers.authorization) {
        let parts = req.headers.authorization.split(' ');
        if (parts.length == 2) {
            let scheme = parts[0], credentials = parts[1];
            if (/^Bearer$/i.test(scheme)) {
                token = credentials;
            }
        } else {
            return this.fail(400);
        }
    }

    if (token) {
        const user = await getCustomRepository(UserRepository).findByToken(token);
        if (user) {
            req.user = user;
        }
    }
    next()
}