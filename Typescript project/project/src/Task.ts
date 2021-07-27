// export class Task {
//     public constructor(public taskid: number, public task:string, public done:boolean=true){

//     }
//     printTask():void{
//         console.log(`this is task Id: ${this.taskid}\n Task is: ${this.task}\n completed:${this.done}`);
//     }
// }

export class Task {
    constructor(public taskid: number,
    public task: string,
    public done: boolean = false) {
    // no statements required
    }
    printTask() : void {
    console.log(`${this.taskid}\t${this.task} ${this.done
    ? "\t(complete)": ""}`);
    }
   }