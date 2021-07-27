"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProTodoApp = void 0;
class ProTodoApp {
    constructor(id, task, completion, bill) {
        this.id = id;
        this.task = task;
        this.completion = completion;
        this.bill = bill;
    }
    details() {
        console.log(`${this.id} \t ${this.task} \t ${this.completion} \t ${this.bill}}`);
    }
}
exports.ProTodoApp = ProTodoApp;
