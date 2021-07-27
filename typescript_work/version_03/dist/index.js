"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ProTodoApp_1 = require("./ProTodoApp");
console.clear();
let item1 = new ProTodoApp_1.ProTodoApp(1, "eat biryani", false, "No eating food");
let item2 = new ProTodoApp_1.ProTodoApp(2, "eat sweet dish", false, "No eating food");
item1.details();
item2.details();
