import { Component, Input } from '@angular/core';
import { Todo } from '@app/core/interfaces/todo.interface';
import { TodosService } from '@app/core/services/todos/todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  @Input() todo: Todo;

  constructor(private readonly todosService: TodosService) {}

  toggleComplete(todo: Todo): void {
    const toggledTodo = { ...todo, completed: !todo.completed };

    this.todosService.updateTodo(todo, toggledTodo);
  }
}
