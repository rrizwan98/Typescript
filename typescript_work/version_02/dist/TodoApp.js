"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoApp = void 0;
class TodoApp {
    constructor(id, task, complete) {
        this.id = id;
        this.task = task;
        this.complete = complete;
    }
    printDetail() {
        console.log(`${this.id} \t ${this.task} \t ${this.complete}`);
    }
}
exports.TodoApp = TodoApp;
