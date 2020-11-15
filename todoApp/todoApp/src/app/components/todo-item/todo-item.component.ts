import { Component, OnInit, Input } from '@angular/core';
import { ITask } from '../../task';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input('parentData') public todoList;

  constructor(){};

  ngOnInit(): void { }

}