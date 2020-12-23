console.log("=========================");
console.log("現在持っているタスク一覧");
console.log("=========================");
const task = ["掃除","買い物","散歩",];
  for (i = 0; i < task.length; i++ ){
    console.log(`${i} : ${task[i]}`);
}

const addTask = () => {
const  newArray = prompt("タスクを入力してください");
task.push(newArray);
console.log("=========================");
console.log("現在持っているタスク一覧");
console.log("=========================");
  for (i = 0; i < task.length; i++ ){
    console.log(`${i} : ${task[i]}`);
    }
  }
addTask();
prompt("「確認、追加、削除、終了」の4つのいずれかを入力してください");