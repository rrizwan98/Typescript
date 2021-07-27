"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemCollection = void 0;
const ProTodoApp_1 = require("./ProTodoApp");
class ItemCollection {
    constructor(Items = []) {
        this.Items = Items;
        this.nextId = 1;
    }
    addtodo(task) {
        let item = new ProTodoApp_1.ProTodoApp(this.nextId, task, false);
        this.nextId++;
        this.Items.push(item);
    }
    printdetails() {
        this.Items.forEach((item) => item.details());
    }
    taskdone(taskId) {
        let item = this.Items.find((item) => item.id === taskId);
        item.completion = true;
    }
}
exports.ItemCollection = ItemCollection;
