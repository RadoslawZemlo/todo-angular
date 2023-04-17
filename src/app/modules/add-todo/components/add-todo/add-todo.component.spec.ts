import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { SharedModule } from '@app/shared/shared.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TodosService } from '@app/core/services/todos/todos.service';
import { MatInputHarness } from '@angular/material/input/testing';
import { MatSelectHarness } from '@angular/material/select/testing';
import { MatButtonHarness } from '@angular/material/button/testing';
import { AddTodoComponent } from './add-todo.component';

describe('AddTodoComponent', () => {
  let component: AddTodoComponent;
  let fixture: ComponentFixture<AddTodoComponent>;
  let loader: HarnessLoader;

  const todosServiceSpy = jasmine.createSpyObj<TodosService>('TodoService', [
    'addTodo',
  ]);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddTodoComponent],
      imports: [HttpClientTestingModule, NoopAnimationsModule, SharedModule],
      providers: [{ provide: TodosService, useValue: todosServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(AddTodoComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have todo description input', async () => {
    const inputs = await loader.getAllHarnesses(MatInputHarness);

    expect(inputs.length).toBe(1);
  });

  it('should have todo priority select', async () => {
    const selects = await loader.getAllHarnesses(MatSelectHarness);

    expect(selects.length).toBe(1);
  });

  it('should have 3 priority options to select', async () => {
    const todoSelect = await loader.getAllHarnesses(MatSelectHarness);

    expect(todoSelect.length).toBe(1);

    await todoSelect[0].open();
    const options = await todoSelect[0].getOptions();

    expect(options.length).toBe(3);
    expect(await options[0].getText()).toBe('High');
    expect(await options[1].getText()).toBe('Medium');
    expect(await options[2].getText()).toBe('Low');
  });

  it('should have add todo button', async () => {
    const buttons = await loader.getAllHarnesses(MatButtonHarness);

    expect(buttons.length).toBe(1);

    const addTodoButton = buttons[0];

    expect(await addTodoButton.getText()).toBe('add Add Todo');
  });

  it('should call TodoService.addTodo', async () => {
    expect(todosServiceSpy.addTodo).not.toHaveBeenCalled();

    const todoInput = await loader.getHarness(MatInputHarness);
    const todoSelect = await loader.getAllHarnesses(MatSelectHarness);
    const button = await loader.getHarness(MatButtonHarness);
    const task = 'test task';
    const priority = 1;

    await todoSelect[0].open();

    const options = await todoSelect[0].getOptions();

    options[0].click();

    fixture.detectChanges();

    await todoInput.setValue(task);
    await button.click();

    expect(todosServiceSpy.addTodo).toHaveBeenCalledOnceWith(task, priority);
  });

  describe('todoForm', () => {
    it('should be invalid if value of task is empty', () => {
      const invalidTask = '';
      component.todoForm.get('task')?.patchValue(invalidTask);

      expect(component.todoForm.valid).toBeFalsy();
    });
  });
});
