import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '@app/shared/shared.module';
import { TodosService } from '@app/core/services/todos/todos.service';
import { DashboardComponent } from './dashboard.component';
import { Todo } from '@app/core/interfaces/todo.interface';
import { of } from 'rxjs';

describe('DashboardComponent', () => {
  const mockTodos: Todo[] = [
    {
      task: 'todo one',
      priority: 2,
      addedAt: new Date(),
      completed: false,
      id: 1,
    },
    {
      task: 'todo two',
      priority: 3,
      addedAt: new Date(),
      completed: false,
      id: 2,
    },
    {
      task: 'todo three',
      priority: 1,
      addedAt: new Date(),
      completed: true,
      id: 3,
    },
    {
      task: 'todo four',
      priority: 2,
      addedAt: new Date(),
      completed: false,
      id: 4,
    },
  ];

  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  const todosServiceSpy = jasmine.createSpyObj<TodosService>('TodoService', [
    'todos$',
    'getTodos',
  ]);

  todosServiceSpy.todos$ = of(mockTodos);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [SharedModule],
      providers: [{ provide: TodosService, useValue: todosServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should recive a list of tasks', (done) => {
    component.todos$.subscribe((todos) => {
      expect(todos.length).toBe(4);
      expect(todos[0].task).toEqual('todo one');

      done();
    });
  });
});
