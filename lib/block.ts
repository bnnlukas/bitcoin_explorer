export class BlockInformation {

    async getBlockInformation(blocknumber: String) {
        const data = await fetch(`https://chain.api.btc.com/v3/block/3`);
        const json =  await data.json();
        return json

    }

    async getBlockList(date: string) {
        const data = await fetch(`https://chain.api.btc.com/v3/block/date/${date}`);
        const json =  await data.json();
        return json

    }

}