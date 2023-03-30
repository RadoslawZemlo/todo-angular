import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentage'
})
export class PercentagePipe implements PipeTransform {

  transform(todosCount: number, allTodosCount: number): number {
    const precentage = (todosCount * 100) / allTodosCount;

    return Number(precentage.toFixed(2));
  }

}
