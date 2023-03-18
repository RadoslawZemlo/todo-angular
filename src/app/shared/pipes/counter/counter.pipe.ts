import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '@app/core/interfaces/todo.interface';

@Pipe({
  name: 'counter',
})
export class CounterPipe implements PipeTransform {
  transform(todos: Todo[]): number {
    return todos.length;
  }
}
