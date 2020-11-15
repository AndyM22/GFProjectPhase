import { Component, Input, OnInit } from '@angular/core';
import { TodoListService } from 'src/app/todo-list.service';
import { ITask } from '../../task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  
  todos: ITask[];

  currentTask: ITask;
  
  constructor( private _todoListService: TodoListService ) { }
  
  onSelect(task) {
    this.currentTask = this._todoListService.getTaskById(task.id);
    task.editMode = true;
  }

  onClick(task) {
    this._todoListService.editTask(this.currentTask);
    task.editMode = false;
  }

  delete(task) {
    this._todoListService.deleteTask(task);
  }

  ngOnInit(): void {
    this.todos = this._todoListService.getTodos();
  }

}