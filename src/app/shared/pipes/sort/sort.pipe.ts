import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '@app/core/interfaces/todo.interface';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(todos: Todo[], sortBy: string): Todo[] {
    if (sortBy === 'priority') {
      return todos.sort((a: Todo, b: Todo) => a.priority - b.priority);
    }

    return todos.sort((a: Todo, b: Todo) =>
      a.addedAt > b.addedAt ? 1 : a.addedAt < b.addedAt ? -1 : 0
    );
  }
}
