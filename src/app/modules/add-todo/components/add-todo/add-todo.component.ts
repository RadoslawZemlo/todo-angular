import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodosService } from '@app/core/services/todos/todos.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent implements OnInit {
  todoForm: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly todosService: TodosService
  ) {}

  ngOnInit(): void {
    this.todoForm = this.formBuilder.group({
      task: ['', [Validators.required]],
      priority: ['', [Validators.required]],
    });
  }

  addTodo(): void {
    this.todosService.addTodo(
      this.todoForm.value.task,
      this.todoForm.value.priority
    );

    this.todoForm.reset();
  }
}
