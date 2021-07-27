"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProTodoApp = void 0;
class ProTodoApp {
    constructor(id, task, completion) {
        this.id = id;
        this.task = task;
        this.completion = completion;
    }
    details() {
        console.log(`${this.id} \t ${this.task} \t ${this.completion}`);
    }
}
exports.ProTodoApp = ProTodoApp;
