import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosRoutingModule } from './todos-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { TodosComponent } from './components/todos/todos.component';
import { TodoComponent } from './components/todo/todo.component';
import { AddTodoModule } from '../add-todo/add-todo.module';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';

@NgModule({
  declarations: [TodosComponent, TodoComponent, EditDialogComponent],
  imports: [CommonModule, TodosRoutingModule, AddTodoModule, SharedModule],
})
export class TodosModule {}
