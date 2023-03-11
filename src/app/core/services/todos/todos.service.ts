import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '@interfaces/todo.interface';
import { BehaviorSubject, Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private todosUrl = 'http://localhost:3000/todos';

  private readonly sourceTodos$: BehaviorSubject<Todo[]> = new BehaviorSubject<
    Todo[]
  >([]);
  todos$: Observable<Todo[]> = this.sourceTodos$.asObservable();

  constructor(private readonly http: HttpClient) {}

  getTodos(): void {
    this.http
      .get<Todo[]>(this.todosUrl)
      .pipe(take(1))
      .subscribe((todos) => this.sourceTodos$.next(todos));
  }
}
