import { AdressInformation } from '../lib/adress.ts'
import { BlockInformation } from '../lib/block.ts'
import { TransactionInformation } from '../lib/transaction.ts'



let test 

// //test 1
// test = new AdressInformation();
// console.log(await test.getBitcoinBalance( '1P5ZEDWTKTFGxQjZphgWPQUpe554WKDfHQ'));

// //test 2
// test = new AdressInformation();
// console.log(await test.getAdressTransactions( '1P5ZEDWTKTFGxQjZphgWPQUpe554WKDfHQ'));

// //test 3
// test = new BlockInformation();
// console.log(await test.getBlockInformation('10'));

// //test 4
// test = new BlockInformation();
// console.log(await test.getBlockList('20151215'));

//test 5
test = new TransactionInformation();
console.log(await test.getSingleTransaction('20ead992d1a58ee6f43eb18715ee8406d5a1a665cd8b896dca0b429f75dd881a'));

