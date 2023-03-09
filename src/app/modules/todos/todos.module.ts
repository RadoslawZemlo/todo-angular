import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosRoutingModule } from './todos-routing.module';
import { SharedModule } from '@app/shared/shared.module';

import { TodosComponent } from './components/todos/todos.component';

@NgModule({
  declarations: [TodosComponent],
  imports: [CommonModule, TodosRoutingModule, SharedModule],
})
export class TodosModule {}
