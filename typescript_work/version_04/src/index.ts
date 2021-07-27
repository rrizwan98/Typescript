import { ProTodoApp } from "./ProTodoApp";
import {ItemCollection} from "./ItemCollection";

console.clear();

let col1:ItemCollection = new ItemCollection();

col1.addtodo("Purchase CPU")
col1.addtodo("Purchase GPU")
col1.addtodo("Puchase RAM")

col1.taskdone(1);
col1.printdetails();