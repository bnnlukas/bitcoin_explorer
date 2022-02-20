import { UnitConverter } from "https://deno.land/x/units/mod-bitcoin.ts.ts";

const testData: any[] = []

export class AdressInformation {

    async getBitcoinBalance(address: String) {
        const data = await fetch(`https://chain.api.btc.com/v3/address/${address}`);
        const json = await data.json();

        testData.push({ from: 'Satoshi', amount: json.data.balance, to: 'Bitcoin', expected: 1 })


        for (const entry of testData) {
            const result = UnitConverter.convert(entry.from, entry.amount, entry.to)
            return result
        }
    }

    async getAddressTransactions(address: String) {
        const data = await fetch(`https://chain.api.btc.com/v3/address/${address}/tx`);
        const json = await data.json();
        return json.data.list
    }

}