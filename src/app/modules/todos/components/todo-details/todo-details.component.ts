import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '@app/core/interfaces/todo.interface';
import { TodosService } from '@app/core/services/todos/todos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.scss'],
})
export class TodoDetailsComponent implements OnInit {
  id: number;
  todo$: Observable<Todo>;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly todosService: TodosService
  ) {}

  ngOnInit(): void {
    const todoId = this.route.snapshot.paramMap.get('id');

    if (todoId) {
      this.todo$ = this.todosService.getTodo(+todoId);
    }
  }
}
