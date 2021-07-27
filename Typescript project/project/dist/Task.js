"use strict";
// export class Task {
//     public constructor(public taskid: number, public task:string, public done:boolean=true){
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
//     }
//     printTask():void{
//         console.log(`this is task Id: ${this.taskid}\n Task is: ${this.task}\n completed:${this.done}`);
//     }
// }
class Task {
    constructor(taskid, task, done = false) {
        this.taskid = taskid;
        this.task = task;
        this.done = done;
        // no statements required
    }
    printTask() {
        console.log(`${this.taskid}\t${this.task} ${this.done
            ? "\t(complete)" : ""}`);
    }
}
exports.Task = Task;
