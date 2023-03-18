import { Component, OnInit } from '@angular/core';
import { Todo } from '@app/core/interfaces/todo.interface';
import { TodosService } from '@app/core/services/todos/todos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  todos$: Observable<Todo[]> = this.todosService.todos$;

  constructor(private readonly todosService: TodosService) {}

  ngOnInit() {
    this.todosService.getTodos();
  }
}
