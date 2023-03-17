import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TodosService } from '@app/core/services/todos/todos.service';
import { Todo } from '@interfaces/todo.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  toolbarForm: FormGroup;
  todos$: Observable<Todo[]> = this.todosService.todos$;

  constructor(
    private readonly todosService: TodosService,
    private readonly formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.todosService.getTodos();

    this.toolbarForm = this.formBuilder.group({
      filter: 'all',
    });
  }
}
