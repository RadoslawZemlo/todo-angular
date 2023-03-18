import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Todo } from '@app/core/interfaces/todo.interface';
import { TodosService } from '@app/core/services/todos/todos.service';
import { Observable } from 'rxjs';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {
  todos$: Observable<Todo[]> = this.todosService.todos$;

  constructor(private readonly todosService: TodosService) {}

  ngOnInit() {
    this.todosService.getTodos();
  }
}
