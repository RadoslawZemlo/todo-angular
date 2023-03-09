import { Component } from '@angular/core';
import { TodosService } from '@app/core/services/todos/todos.service';
import { Todo } from '@interfaces/todo.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent {
  todos: Observable<Todo[]> = this.todosService.getTodos();

  constructor(private readonly todosService: TodosService) {}
}
