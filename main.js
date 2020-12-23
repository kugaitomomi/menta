"use strict";
console.log("=========================");
console.log("現在持っているタスク一覧");
console.log("=========================");
const list = [
  {task:"机を片付ける",genre:"掃除"},
  {task:"牛乳を買う",genre:"買い物"},
  {task:"散歩する",genre:"運動"},
];
  for (let i = 0; i < list.length; i++ ){
    console.log(`${i} : [内容] ${list[i].task}、[ジャンル] ${list[i].genre}`);
}
var c = list.length;
var a = prompt("タスクを入力してください");
var b = prompt("ジャンルを入力してください");
  if(a && b){
    list[c] = {task:a,genre:b};
  }

function addList() {
  console.log("=========================");
  console.log("現在持っているタスク一覧");
  console.log("=========================");
  for (let i = 0; i < list.length; i++) {
    console.log(`${i} : [内容] ${list[i].task}、[ジャンル] ${list[i].genre}`);

  }
}
addList();
  prompt("「確認、追加、削除、終了」の4つのいずれかを入力してください");
