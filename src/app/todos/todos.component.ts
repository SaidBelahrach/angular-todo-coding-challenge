import { ElementRef } from '@angular/core';
import { OnChanges } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Todo } from '../todo/todo.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  todoForm: FormGroup;
  @ViewChild('todoInputRef') todoInputRef: ElementRef;
  errors = '';
  constructor() {}

  ngOnInit() {
    this.todos = [
      { name: 'do', status: 'done' },
      { name: 'do 2', status: 'Incomplete' },
    ];

    this.todoForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      date: new FormControl(new Date().getDate()),
    });
  }
  createTodo(todo: Todo) {
    console.log(this.todoForm.controls);
    todo.status = 'Incomplete';
    if (this.todos.some((t) => t.name == todo.name)) {
      this.errors = 'todo already exists!';
      return;
    } else this.errors = '';
    if (!this.todoForm.valid) return;
    this.todos.push(todo);
    this.todoInputRef.nativeElement.value = '';
  }

  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter((t) => t.name != todo.name);
    console.log('deleting', todo);
  }

  completeTodo(todo: Todo) {
    this.todos = this.todos.map((t) =>
      t.name == todo.name
        ? { ...t, status: t.status == 'Incomplete' ? 'done' : 'Incomplete' }
        : t
    );
    console.log('deleting', todo);
  }

  HandleCreateOneLink(event: MouseEvent) {
    event.preventDefault();
    this.todoInputRef.nativeElement.focus();
  }
}
