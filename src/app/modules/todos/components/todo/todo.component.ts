import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Todo } from '@app/core/interfaces/todo.interface';
import { TodosService } from '@app/core/services/todos/todos.service';
import { take } from 'rxjs';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  @Input() todo: Todo;

  constructor(
    private readonly todosService: TodosService,
    private readonly dialog: MatDialog
  ) {}

  toggleComplete(todo: Todo): void {
    const toggledTodo = { ...todo, completed: !todo.completed };

    this.todosService.updateTodo(todo, toggledTodo);
  }

  editTodo(todo: Todo) {
    const editDialog = this.dialog.open(EditDialogComponent, {
      data: {
        task: todo.task,
        priority: todo.priority,
        completed: todo.completed,
      },
    });

    editDialog
      .afterClosed()
      .pipe(take(1))
      .subscribe((edited) => {
        if (edited) {
          this.todosService.updateTodo(todo, edited);
        }
      });
  }
}
