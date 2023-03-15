import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddTodoRoutingModule } from './add-todo-routing.module';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [AddTodoComponent],
  imports: [CommonModule, AddTodoRoutingModule, SharedModule],
  exports: [AddTodoComponent],
})
export class AddTodoModule {}
