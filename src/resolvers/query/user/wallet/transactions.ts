import * as casual from "casual";


export default function () {
    let items = [];
    for (let i = 0; i < 10; i++) {
        items.push({
            datetime: casual.unix_time,
            address: casual.uuid,
            amount: casual.double(0, 100),
            fee: casual.double(0, 0.02),
            hash: casual.uuid

        });
    }
    return {
        page: casual.integer(0, 10),
        count: casual.integer(10, 1234),
        items: items
    };
}