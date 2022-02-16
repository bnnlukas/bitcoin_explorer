export class TransactionInformation {

    async getSingleTransaction(transactionAddress: String) {
        const data = await fetch(`https://chain.api.btc.com/v3/tx/${transactionAddress}?verbose=3`);
        const json = await data.json();
        return json.data
    }

}