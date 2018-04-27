import UserCreateService from "../../../service/user/UserCreateService";
import UserUpdatePasswordService from "../../../service/user/UserUpdatePasswordService";

export default {

    /**
     *
     * @param {object} input
     * @param {string} input.email
     * @param {string} input.password
     * @param {object} context
     * @return {Promise<Promise<Promise<User>>>}
     */
    create: ({input}, context) => {
        const userCreateService = new UserCreateService(input.email, input.password);
        return userCreateService.save();
    },

    /**
     *
     * @param {object} input
     * @param {string} input.oldPassword
     * @param {string} input.newPassword
     * @param {object} context
     * @param {User} context.request.user
     * @return {Promise<Promise<Promise<User>>>}
     */
    updatePassword: ({input}, context) => {
        const userUpdatePasswordService = new UserUpdatePasswordService(context.request.user, input.oldPassword, input.newPassword);
        return userUpdatePasswordService.save();
    }
}