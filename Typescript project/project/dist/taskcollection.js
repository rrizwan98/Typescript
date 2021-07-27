"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskcollection = void 0;
const Task_1 = require("./Task");
class taskcollection {
    //private itemMap = new Map<number,Task>();
    constructor(userName, tasks = []) {
        this.userName = userName;
        this.tasks = tasks;
        this.nextid = 1;
        this.itemMap = new Map();
        tasks.forEach(item => this.itemMap.set(item.taskid, item));
    }
    addtodo(task) {
        let item = new Task_1.Task(this.nextid, task, false);
        //this.nextid=this.nextid + 1;
        this.nextid++;
        this.tasks.push(item);
        this.itemMap.set(this.nextid, new Task_1.Task(this.nextid, task));
    }
    printAll() {
        this.tasks.forEach((item) => item.printTask());
    }
    taskdone(taskid) {
        let item = this.tasks.find((item) => item.taskid == taskid);
        item.done = true;
    }
    gettodobyid(id) {
        return this.itemMap.get(id);
    }
    getTodoItems(includeComplete) {
        return [...this.itemMap.values()]
            .filter(item => includeComplete || !item.done);
    }
    getItemCounts() {
        return {
            total: this.itemMap.size,
            incomplete: this.getTodoItems(false).length
        };
    }
    markComplete(id, complete) {
        const todoItem = this.gettodobyid(id);
        if (todoItem) {
            todoItem.done = complete;
        }
    }
    removeComplete() {
        this.itemMap.forEach(item => {
            if (item.done) {
                this.itemMap.delete(item.taskid);
            }
        });
    }
}
exports.taskcollection = taskcollection;
