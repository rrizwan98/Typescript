"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TodoApp_1 = require("./TodoApp");
console.clear();
let item1 = new TodoApp_1.TodoApp(1, "purchase Mango", false);
let item2 = new TodoApp_1.TodoApp(2, "eat biryani", false);
item1.printDetail();
item2.printDetail();
