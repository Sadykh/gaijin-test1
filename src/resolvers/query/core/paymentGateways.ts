import * as casual from "casual";


export default function (input, context) {
    let gatewayTitle = ["yandex", "qiwi", "visa", "mastercard", "paypal"];
    let currency = ["RUB", "USD", "EUR"];

    let result = [];
    gatewayTitle.forEach((item, key) => {
        result[key] = {};
        result[key]['symbol'] = item;
        result[key]['fees'] = [];
        currency.forEach(nameCurrency => {
            result[key]['fees'].push({
                currency: nameCurrency,
                value: (casual.double(0.005, 0.2)).toFixed(3)
            })
        });
    });
    return result;

}