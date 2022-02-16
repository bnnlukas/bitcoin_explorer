export class GasTracker {

    async getGasPrice(apiKey: String) {

            const data = await fetch(`https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=${apiKey}`);
            const json = await data.json();
            return json.result

    }
}