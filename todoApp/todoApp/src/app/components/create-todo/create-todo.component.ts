import { Component, OnInit } from '@angular/core';
import { TodoListService } from 'src/app/todo-list.service';
import { ITask } from '../../task';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {

  constructor(private _todoListService : TodoListService) { }

  todos: ITask[] = this._todoListService.getTodos();

  onSelect() {
  }

  newTask: ITask = {
    id: this.todos.length,
    title: "",
    project: "",
    done: false,
    editMode: false,
    details: ""
  }

  onClick() {
    this._todoListService.addTask(this.newTask);
  }

  ngOnInit(): void {
  }

}
