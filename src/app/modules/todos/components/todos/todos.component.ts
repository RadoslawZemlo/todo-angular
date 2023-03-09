import { Component } from '@angular/core';
import { Todo } from '@interfaces/todo.interface';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent {
  todos: Todo[] = [
    {
      id: 1,
      task: 'Todo One',
      priority: 2,
      addedAt: new Date('2022-12-15T18:22:51.331Z'),
      completed: false,
    },
    {
      id: 2,
      task: 'Todo Two',
      priority: 3,
      addedAt: new Date('2022-12-15T18:28:51.331Z'),
      completed: false,
    },
  ];
}
