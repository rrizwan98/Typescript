import { Task } from "./Task";

type ItemCounts = {
    total: number,
    incomplete: number
   }

export class taskcollection{
    private nextid: number =1;
    protected itemMap = new Map<number, Task>();
    //private itemMap = new Map<number,Task>();

    constructor(public userName: string, public tasks: Task[]=[]){
        tasks.forEach(item => this.itemMap.set(item.taskid, item));

    }

    public addtodo(task: string):void{
        let item: Task = new Task(this.nextid , task, false);
        //this.nextid=this.nextid + 1;
        this.nextid++;
        this.tasks.push(item);
        this.itemMap.set(this.nextid, new Task(this.nextid,task));
    }
    public printAll(){
        this.tasks.forEach((item: Task)=> item.printTask());
    }
    public taskdone(taskid: number){
        let item: Task =this.tasks.find((item)=>item.taskid==taskid);
        item.done=true;
    }
    gettodobyid(id:number):Task{
        return this.itemMap.get(id);
    }
    getTodoItems(includeComplete: boolean): Task[] {
        return [...this.itemMap.values()]
        .filter(item => includeComplete || !item.done);
    }

    getItemCounts(): ItemCounts {
        return {
        total: this.itemMap.size,
        incomplete: this.getTodoItems(false).length
        };
        }
    markComplete(id: number, complete: boolean) {
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
    })
    }
    
}