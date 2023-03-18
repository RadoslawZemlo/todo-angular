import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { TodosService } from '@app/core/services/todos/todos.service';
import { Todo } from '@interfaces/todo.interface';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  toolbarForm: FormGroup;
  todos$: Observable<Todo[]> = this.todosService.todos$;
  isAllCompleted$: Observable<boolean>;

  constructor(
    private readonly todosService: TodosService,
    private readonly formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.todosService.getTodos();

    this.isAllCompleted$ = this.todos$.pipe(
      map((todos) => todos.every((todo) => todo.completed))
    );

    this.toolbarForm = this.formBuilder.group({
      filter: 'all',
      sortBy: 'date',
    });
  }

  toggleAll(event: MatCheckboxChange): void {
    this.todosService.toggleAllTodos(event.source.checked);
  }
}
