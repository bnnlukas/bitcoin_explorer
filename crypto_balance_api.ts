export class CryptoBalanceApi {

    async getEtherBalance(apiKey:String, adress: String, network?: String) {
        if (typeof network == 'undefined') {
            const data = await fetch(`https://api.etherscan.io/api?module=account&action=balance&address=${adress}&tag=latest&apikey=${apiKey}`);
            const json = await data.json();
            return json.result * Math.pow(10,-18);
        }
        else{
            const data = await fetch(`https://api-${network}.etherscan.io/api?module=account&action=balance&address=${adress}&tag=latest&apikey=${apiKey}`);
            const json = await data.json();
            return json.result * Math.pow(10,-18);
        }
    }

    // async getMultipleEtherBalance(apiKey:String, adresses: String, network?: String) {
    //     if (typeof network == 'undefined') {
    //         const data = await fetch(`https://api.etherscan.io/api?module=account&action=balance&address=${adress}&tag=latest&apikey=${apiKey}`);
    //         const json = await data.json();
    //         return json.result * Math.pow(10,-18);
    //     }
    //     else{
    //         const data = await fetch(`https://api-${network}.etherscan.io/api?module=account&action=balance&address=${adress}&tag=latest&apikey=${apiKey}`);
    //         const json = await data.json();
    //         return json.result * Math.pow(10,-18);
    //     }
    // }

}