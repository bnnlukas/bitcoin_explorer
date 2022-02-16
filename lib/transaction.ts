export class TransactionInformation {
    
    async getSingleTransaction(transactionAdress: String) {
        const data = await fetch(`https://chain.api.btc.com/v3/tx/${transactionAdress}?verbose=3`);
        const json = await data.json();
        return json
    }

}