export class ProTodoApp{
    public constructor(public id:number, public task:string, public completion:boolean){

    }
    details(): void{
        console.log(`${this.id} \t ${this.task} \t ${this.completion}`)
    }
}