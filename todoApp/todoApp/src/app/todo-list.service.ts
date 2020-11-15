import { Injectable } from '@angular/core';
import { ITask } from './task';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  constructor() { }

  todos: ITask[] = [
    {
      id: 1,
      title: 'Todo A',
      project: 'Project A',
      done: false,
      editMode: false,
      deleted: false,
      details: 'First project needs to ...'
    },
    {
      id: 2,
      title: 'Todo B',
      project: 'Project B',
      done: false,
      editMode: false,
      deleted: false,
      details: 'Second project needs to ...'
    },
    {
      id: 3,
      title: 'Todo C',
      project: 'Project C',
      done: false,
      editMode: false,
      deleted: false,
      details: 'Third project needs to ...'
    }
 ]

  getTodos() {
    return this.todos;
  }

  getTaskById(id: number) {
    const taskCopy: ITask = this.getTodos().find(task => task.id === id);
    return taskCopy;
  }

  editTask(todoTask) {

    const elementsIndex = this.todos.findIndex(task => task.id === todoTask.id);

    this.todos[elementsIndex] = todoTask;

  }

  deleteTask (todoTask) {
    
    const elementsIndex = this.todos.findIndex(task => task.id === todoTask.id);

    this.todos.splice(elementsIndex, 1);

  }
  

}
