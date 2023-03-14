import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '@interfaces/todo.interface';
import { BehaviorSubject, combineLatest, Observable, take } from 'rxjs';

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

  addTodo(task: string, priority: number): void {
    const newTodo: Todo = {
      task,
      priority,
      addedAt: new Date(),
      completed: false,
    };

    const request$ = this.http.post<Todo>(this.todosUrl, newTodo);

    combineLatest([this.todos$, request$])
      .pipe(take(1))
      .subscribe(([todos, todo]) => {
        this.sourceTodos$.next([...todos, todo]);
      });
  }
}
