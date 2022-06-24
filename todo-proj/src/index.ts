import TodoItem from "./TodoItem";
import {data} from "./data";
import TodoCollection from "./TodoCollection";

const sampleTodos : TodoItem[] = data.map(
    (item) => new TodoItem(item.id, item.task, item.complete)
);

const myTodoCollection = new TodoCollection("My Todo List", sampleTodos);

myTodoCollection.addTodo("JavaScript 학습하기");
myTodoCollection.addTodo("친구 만나기");

myTodoCollection.markComplete(3, true);

console.log(`${myTodoCollection.userName}`);
myTodoCollection.todoItem.forEach((item) => {item.printDetails();});

