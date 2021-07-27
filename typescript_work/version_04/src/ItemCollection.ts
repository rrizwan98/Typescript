import { ProTodoApp } from "./ProTodoApp";

export class ItemCollection{
    private nextId: number = 1;
    public constructor(public Items: ProTodoApp[]=[]){

    }

    public addtodo(task:string):void{
        let item: ProTodoApp=new ProTodoApp(this.nextId, task, false);
        this.nextId++;
        this.Items.push(item);

    }
    printdetails():void{
        this.Items.forEach((item:ProTodoApp)=>item.details());
    }
    public taskdone(taskId:number){
        let item: ProTodoApp=this.Items.find((item)=>item.id === taskId);
        item.completion=true;
    }


}