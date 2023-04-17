import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '@app/shared/shared.module';
import { TodosComponent } from './todos.component';
import { TodosService } from '@app/core/services/todos/todos.service';
import { Todo } from '@app/core/interfaces/todo.interface';
import { of } from 'rxjs';

describe('TodosComponent', () => {
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

  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  const todosServiceSpy = jasmine.createSpyObj<TodosService>('TodoService', [
    'todos$',
    'getTodos',
    'getTodo',
    'addTodo',
    'updateTodo',
    'deleteTodo',
  ]);

  todosServiceSpy.todos$ = of(mockTodos);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodosComponent],
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
        NoopAnimationsModule,
        SharedModule,
      ],
      providers: [{ provide: TodosService, useValue: todosServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(TodosComponent);
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
