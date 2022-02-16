import { CryptoBalanceApi } from '../lib/btc.com_api.ts'



let test 

//test 1
// test = new CryptoBalanceApi();
// console.log(await test.getBitcoinBalance( '1P5ZEDWTKTFGxQjZphgWPQUpe554WKDfHQ'));

test = new CryptoBalanceApi();
console.log(await test.adressTransactions( '1P5ZEDWTKTFGxQjZphgWPQUpe554WKDfHQ'));

// //test 2
// test = new CryptoBalanceApi();
// console.log(await test.Block());

// //test 3
// test = new CryptoBalanceApi();
// console.log(await test.getSingleTransaction('439615ea31e1535023caad657042e8a413a05322947ef92c6665cd01ea66f4f3'));

//test 3
// test = new CryptoBalanceApi();
// console.log(await test.getBlockTransactions('50'));


