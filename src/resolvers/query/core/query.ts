import paymentGateways from "./paymentGateways";
import products from "./products";
import latestTransactions from "./latestTransactions";
import user from "./../user/user";

export default {
    paymentGateways,
    products,
    latestTransactions,
    user: () => user
}
