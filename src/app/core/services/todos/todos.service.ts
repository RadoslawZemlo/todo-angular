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

  replaceTodo(todos: Todo[], todo: Todo, editedTodo: Todo): void {
    const todoIndex = todos.indexOf(todo);

    todos.splice(todoIndex, 1, editedTodo);
  }

  updateTodo(todo: Todo, edited: Todo): void {
    const todoUrl = `${this.todosUrl}/${todo.id}`;
    const editedTodo = { ...todo, ...edited };
    const request$ = this.http.put<Todo>(todoUrl, editedTodo);

    combineLatest([this.todos$, request$])
      .pipe(take(1))
      .subscribe(([todos, editedTodo]) => {
        this.replaceTodo(todos, todo, editedTodo);

        this.sourceTodos$.next([...todos]);
      });
  }

  toggleAllTodos(isChecked: boolean): void {
    this.todos$.pipe(take(1)).subscribe((todos) => {
      todos.map((todo) => {
        const toggledTodo = { ...todo, completed: isChecked };

        this.updateTodo(todo, toggledTodo);

        return toggledTodo;
      });
    });
  }

  deleteTodo(todo: Todo): void {
    const todoUrl = `${this.todosUrl}/${todo.id}`;
    const request$ = this.http.delete<Todo>(todoUrl);

    combineLatest([this.todos$, request$])
      .pipe(take(1))
      .subscribe(([todos, _]) => {
        this.sourceTodos$.next(todos.filter((t) => t.id !== todo.id));
      });
  }
}
