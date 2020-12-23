"use strict";
console.log("=========================");
console.log("現在持っているタスク一覧");
console.log("=========================");
const lists = [
  { task: "机を片付ける", genre: "掃除" },
  { task: "牛乳を買う", genre: "買い物" },
  { task: "散歩する", genre: "運動" },
];
lists.forEach((list, index) => {
  console.log(`${index} : [内容] ${list.task}、[ジャンル] ${list.genre}`);
})

const task = prompt("タスクを入力してください");
const genre = prompt("ジャンルを入力してください");
lists.push({ task: task, genre: genre });

function addList() {
  console.log("=========================");
  console.log("現在持っているタスク一覧");
  console.log("=========================");
  lists.forEach(
    function (list, index) {
      console.log(`${index} : [内容] ${list.task}、[ジャンル] ${list.genre}`);
    }
  );
}
addList();
prompt("「確認、追加、削除、終了」の4つのいずれかを入力してください");
