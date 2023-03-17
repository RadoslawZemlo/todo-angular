import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '@app/core/interfaces/todo.interface';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(todos: Todo[], filter: string): Todo[] {
    if (filter === 'completed') {
      return todos.filter((todo: Todo) => todo.completed);
    } else if (filter === 'uncompleted') {
      return todos.filter((todo: Todo) => !todo.completed);
    }

    return todos;
  }
}
