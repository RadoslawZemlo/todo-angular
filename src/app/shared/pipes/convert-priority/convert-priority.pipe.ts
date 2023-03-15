import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertPriority',
})
export class ConvertPriorityPipe implements PipeTransform {
  transform(priority: number): string {
    if (priority === 1) {
      return 'High';
    } else if (priority === 2) {
      return 'Medium';
    } else {
      return 'Low';
    }
  }
}
