import { TodoApp } from "./TodoApp";

console.clear();

let item1: TodoApp = new TodoApp(1,"purchase Mango",false);
let item2: TodoApp = new TodoApp(2,"eat biryani",false);

item1.printDetail();
item2.printDetail();