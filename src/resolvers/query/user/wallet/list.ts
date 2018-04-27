import * as casual from "casual";


export default function (input, context) {
    let result = {
        symbol: "BTC",
        name: "Bitcoin",
        value: (casual.double(0, 2)).toFixed(3),
        address: casual.uuid,
    };
    return [result];

}