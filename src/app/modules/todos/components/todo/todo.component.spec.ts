import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { HarnessLoader } from '@angular/cdk/testing';
import { MatButtonHarness } from '@angular/material/button/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from '@app/shared/shared.module';
import { TodoComponent } from './todo.component';
import { TodosService } from '@app/core/services/todos/todos.service';
import { Todo } from '@app/core/interfaces/todo.interface';

describe('TodoComponent', () => {
  const todo: Todo = {
    task: 'todo new',
    priority: 2,
    addedAt: new Date(),
    completed: false,
    id: 1,
  };

  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;
  let loader: HarnessLoader;

  const todosServiceSpy = jasmine.createSpyObj<TodosService>('TodoService', [
    'updateTodo',
    'deleteTodo',
  ]);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoComponent],
      imports: [MatDialogModule, SharedModule],
      providers: [{ provide: TodosService, useValue: todosServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    component.todo = todo;

    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 3 buttons', async () => {
    const buttons = await loader.getAllHarnesses(MatButtonHarness);

    expect(buttons.length).toBe(3);
  });

  it('should call todoService.updateTodo', async () => {
    const toggleTodo = { ...todo, completed: !todo.completed };
    const buttons = await loader.getAllHarnesses(MatButtonHarness);
    const toggleButton = buttons[0];

    await toggleButton.click();

    expect(todosServiceSpy.updateTodo).toHaveBeenCalledOnceWith(
      todo,
      toggleTodo
    );
  });

  it('should call editTodo method', async () => {
    spyOn(component, 'editTodo');

    const buttons = await loader.getAllHarnesses(MatButtonHarness);
    const toggleButton = buttons[1];

    await toggleButton.click();

    expect(component.editTodo).toHaveBeenCalled();
  });

  it('should call deleteTodo method', async () => {
    spyOn(component, 'deleteTodo');

    const buttons = await loader.getAllHarnesses(MatButtonHarness);
    const toggleButton = buttons[2];

    await toggleButton.click();

    expect(component.deleteTodo).toHaveBeenCalled();
  });
});
