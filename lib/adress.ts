export class AdressInformation {

    async getBitcoinBalance(address: String) {
        const data = await fetch(`https://chain.api.btc.com/v3/address/${address}`);
        const json = await data.json();
        return json.data.balance * Math.pow(10,-8)
    }

    async getAddressTransactions(address: String) {
        const data = await fetch(`https://chain.api.btc.com/v3/address/${address}/tx`);
        const json = await data.json();
        return json.data.list
    }

}