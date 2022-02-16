export class CryptoBalanceApi {

    async getBitcoinBalance(adress: String) {
        const data = await fetch(`https://chain.api.btc.com/v3/address/${adress}`);
        const json = await data.json();
        return data
    }
    async adressTransactions(adress: String) {
        const data = await fetch(`https://chain.api.btc.com/v3/address/${adress}`);
        const json = await data.json();
        return data
    }

    async getSingleTransaction(transactionAdress: String) {
        const data = await fetch(`https://chain.api.btc.com/v3/tx/${transactionAdress}?verbose=3`);
        const json = await data.json();
        return json
    }

    async Block() {
        const data = await fetch(`https://chain.api.btc.com/v3/block/3`);
        const json =  await data.json();
        return json

    }

    async getBlockTransactions(block: String) {
        const data = await fetch(`https://chain.api.btc.com/v3/block/${block}/tx`);
        const json =  await data.json();
        return json.data.list[0]

    }

}