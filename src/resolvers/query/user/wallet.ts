import list from "./wallet/list";
import purchases from "./wallet/purchases";
import transactions from "./wallet/transactions";
import * as casual from "casual";

export default {
    list,
    balanceHistory: () => {
        return casual.array_of_integers(10).map(Math.abs);
    },
    purchases,
    transactions
}