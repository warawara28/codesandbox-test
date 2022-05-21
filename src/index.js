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
const val5 = ['dog', 'cat'];
val5[0] = 'snake';
val5.push('monkey');
console.log(val5);