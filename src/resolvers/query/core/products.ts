import * as casual from "casual";


export default function (input, context) {
    let currency = ["RUB", "USD", "EUR"];


    let result = {
        symbol: "BTC",
        name: "Bitcoin",
        prices: []
    };
    currency.forEach(nameCurrency => {
        result.prices.push({
            currency: nameCurrency,
            buy: (casual.double(100, 15000)).toFixed(3),
            sell: (casual.double(100, 15000)).toFixed(3),
        })
    });
    return [result];

}