/**
 * const, letなどの変数宣言
 */

// var var1 = "var変数";
// console.log(var1);

// // var変数は上書き可能
// var1 = "var変数を上書き";
// console.log(var1);

// // var変数は再宣言可能
// var var1 = "var変数を再宣言";
// console.log(var1);

// let var2 = 'let変数';
// console.log(var2);

// // letは上書き可能
// var2 = "let変数を上書き";
// console.log(var2);

// letは再宣言不可能
// let var2 = "let変数を再宣言";

// const var3 = "const変数";

// constは上書き不可能
// var3 = "const変数を上書き";

// constは再宣言不可能
// var3 = "const変数を再宣言";

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "Yamada",
//   age: 24,
// }
// val4.name = "hogehoge";
// val4.address = "Tokyo";
// console.log(val4);

// constで定義した配列はプロパティの変更が可能
// const val5 = ['dog', 'cat'];
// val5[0] = 'snake';
// val5.push('monkey');
// console.log(val5);

/**
 * テンプレート文字列
 */

// const name = '山田';
// const age = 28;

// // 「私の名前は山田です。年齢は28歳です。」

// // 従来の方法
// const message1 = "私の名前は"　+ name + "です。年齢は" + age + "歳です。";
// console.log(message1);

// // テンプレート文字列
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

/**
 * アロー関数
 */
// 従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function(str) {
//   return str;
// }
// console.log(func1("func1です。"));

// // アロー関数
// // const func2 = (str) => {
// //   return str
// // };
// const func2 = (str) => str;
// console.log(func2("func2です。"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 20));

/**
 * 分割代入
 */

// const myProfile = {
//   name: "山田",
//   age: 28,
// }
// const message1 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// const {name, age} = myProfile;
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// const myProfile = ['山田', 28];
// const message3 = `私の名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */

// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayHello('山田');
// sayHello();

/**
 * スプレッド構文 ...
 */
// 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];
// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// 参照先が同じなのでコピー先の要素が変更されるとコピー元も変更される
// const arr8 = arr4;
// console.log(arr8);

// arr8[0] = 100;
// console.log(arr4);

/**
 * mapやfilterを使った配列の処理
 */
// const nameArr = ["田中", "山田", "岡村"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// })
// console.log(nameArr2);

// nameArr.map((name) => console.log(name));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

/**
 * 三項演算子
 */
// 条件文 ? 条件がtrueの時 : 条件がfalseの時
// const val1 = 1 > 0 ? 'trueです' : 'falseです';
// const val2 = 1 < 0 ? 'trueです' : 'falseです';
// console.log(val1);
// console.log(val2);

// const num = "1300";

// const formattedNum = typeof num === 'number' ? num.toLocaleString() :  '数値を入力してください' ;
// console.log(formattedNum);