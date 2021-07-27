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


}