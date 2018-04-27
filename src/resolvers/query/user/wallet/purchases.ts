import * as casual from "casual";


export default function () {
    let gatewayTitle = ["yandex", "qiwi", "visa", "mastercard", "paypal"];

    let items = [];
    for (let i = 0; i < 10; i++) {
        items.push({
            datetime: casual.unix_time,
            paymentGateway: gatewayTitle[casual.integer(0, 4)],
            amount: casual.double(0, 100),
            rate: casual.double(123, 123122),
            hash: casual.uuid

        });
    }
    return {
        page: casual.integer(0, 10),
        count: casual.integer(10, 1234),
        items: items
    };
}