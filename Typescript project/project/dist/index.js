"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const task_1 = require("./task");
const taskcollection_1 = require("./taskcollection");
const inquirer = require("inquirer");
//let task01: taskcollection=new taskcollection();
let todos = [
    new task_1.Task(1, "Buy Flowers"), new task_1.Task(2, "Get Shoes"),
    new task_1.Task(3, "Collect Tickets"), new task_1.Task(4, "Call Joe", true)
];
let collection = new taskcollection_1.taskcollection("Adam", todos);
// task01.addtodo("tikky bna lo");
// task01.addtodo("mango ley Aoo")
// task01.addtodo("janwar la ao")
// task01.taskdone(2)
// task01.printAll();
// task01.addtodo("ksai ko la aoo")
// task01.gettodobyid(3);
// task01.printAll();
let showCompleted = true;
function displayTodoList() {
    console.log(`${collection.userName}'s Todo List ` + `(${collection.getItemCounts().incomplete} items to do)`);
    collection.getTodoItems(showCompleted).forEach(item => item.printTask());
}
var Commands;
(function (Commands) {
    Commands["Add"] = "Add New Task";
    Commands["Complete"] = "Complete Task";
    Commands["Toggle"] = "Show/Hide Completed";
    Commands["Purge"] = "Remove Completed Tasks";
    Commands["Quit"] = "Quit";
})(Commands || (Commands = {}));
function promptAdd() {
    console.clear();
    inquirer.prompt({ type: "input", name: "add", message: "Enter task:" })
        .then(answers => {
        if (answers["add"] !== "") {
            collection.addtodo(answers["add"]);
        }
        promptUser();
    });
}
function promptComplete() {
    console.clear();
    inquirer.prompt({ type: "checkbox", name: "complete", message: "Mark Tasks Complete",
        choices: collection.getTodoItems(showCompleted).map(item => ({ name: item.task, value: item.taskid, checked: item.done })) }).then(answers => {
        let completedTasks = answers["complete"];
        collection.getTodoItems(true).forEach(item => collection.markComplete(item.taskid, completedTasks.find(id => id === item.taskid) != undefined));
        promptUser();
    });
}
function promptUser() {
    console.clear();
    displayTodoList();
    inquirer.prompt({ type: "list", name: "command", message: "Choose option", choices: Object.values(Commands),
        //badProperty: true
    }).then(answers => {
        switch (answers["command"]) {
            case Commands.Toggle:
                showCompleted = !showCompleted;
                promptUser();
                break;
            case Commands.Add:
                promptAdd();
                break;
            case Commands.Complete:
                if (collection.getItemCounts().incomplete > 0) {
                    promptComplete();
                }
                else {
                    promptUser();
                }
                break;
            case Commands.Purge:
                collection.removeComplete();
                promptUser();
                break;
        }
    });
}
promptUser();
