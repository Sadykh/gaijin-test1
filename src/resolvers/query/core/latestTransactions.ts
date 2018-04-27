import * as casual from "casual";


export default function (input, context) {
    let result = [];
    for (let i = 0; i < 10; i++) {
        result.push({
            hash: casual.uuid,
            datetime: casual.unix_time,
            value: (casual.double(100, 15000)).toFixed(3),
        });

    }
    return result;

}