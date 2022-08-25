import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteEvent = new EventEmitter();
  @Output() completeEvent = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  deleteTodo(todo: any) {
    this.deleteEvent.emit(todo);
  }

  completeTodo(todo: any) {
    this.completeEvent.emit(todo);
  }
}

export interface Todo {
  name: string;
  status: 'Incomplete' | 'done';
}
