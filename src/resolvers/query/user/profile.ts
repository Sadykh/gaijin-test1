import * as casual from "casual";

export default function (input, context) {
    return {
        name: casual.first_name,
        surname: casual.last_name,
        email: casual.email,
        language: casual.language_code,
        currency: "RUB",
        emailConfirmed: casual.boolean,
        passwordChangedAt: casual.unix_time,
        googleAuthSecret: casual.password,
        googleAuthEnabled: casual.boolean
    }
}