export class AdressInformation {

    async getBitcoinBalance(adress: String) {
        const data = await fetch(`https://chain.api.btc.com/v3/address/${adress}`);
        const json = await data.json();
        return json.data.balance * Math.pow(10,-8)
    }

    async getAdressTransactions(adress: String) {
        const data = await fetch(`https://chain.api.btc.com/v3/address/${adress}/tx`);
        const json = await data.json();
        return json
    }

}