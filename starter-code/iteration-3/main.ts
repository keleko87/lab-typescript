// Add the reference to the interface
import {TodoItemInterface, TodoInterface} from './interfaces';

// Create class TodoItem that implements the corresponding interface
class TodoItem implements TodoItemInterface {
  done: boolean;
  updateAt: Date;
  constructor(public title: string) {
    this.done = false;
    this.updateAt = new Date()
  }
  isDone() {
    this.done = this.done ? false : true;
  }
}
// Create class TodoList that implements the corresponding interface
class TodoList implements TodoInterface {

  tasks: Array<TodoItemInterface> = [];

  addTask(task: TodoItemInterface){
    this.tasks.push(task);
  }
  listAllTasks() {
    this.tasks.forEach( e => console.log(e));
  }
  deleteTask( task: TodoItemInterface){
    this.tasks.filter( e => e !== task);
  }
  listUncomplete(){
    this.tasks.filter( e => e.done == false );
  }

}
// Execution
let task1 = new TodoItem('This is our first task');
let task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
let task3 = new TodoItem('Finish this iteration 1!! 🤓');
let task4 = new TodoItem('Finish this iteration 2!! 🤓');
let task5 = new TodoItem('Finish this iteration 3!! 🤓');

let myTodos = new TodoList();

console.log("Number of items:", myTodos.addTask(task1));
console.log("Number of items:", myTodos.addTask(task2));
console.log("Number of items:", myTodos.addTask(task3));
console.log("Number of items:", myTodos.addTask(task4));
console.log("Number of items:", myTodos.addTask(task5));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask(task3));
console.log("Number of items:", myTodos.deleteTask(task4));
console.log("Number of items:", myTodos.deleteTask(task5));
myTodos.listUncomplete();
