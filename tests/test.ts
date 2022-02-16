import { CryptoBalanceApi } from '../crypto_balance_api.ts'
import { GasTracker } from '../gas_tracker.ts'


let test 

//test 1
test = new CryptoBalanceApi();
console.log(await test.getEtherBalance('HMRY7C2DJ52DJQ3NK5P3IFU4WBX7MPCCNG', '0xd205130D6a6727e69f669C809689778c93BEaf21', 'rinkeby'));


//test 2
test = new GasTracker();
console.log(await test.getGasPrice('HMRY7C2DJ52DJQ3NK5P3IFU4WBX7MPCCNG'));