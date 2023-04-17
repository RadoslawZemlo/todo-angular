import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { FAKE_TODO_RESPONSE } from '../testing/mocks';
import { TodosService } from './todos.service';
import { of } from 'rxjs';

describe('TodosService', () => {
  let service: TodosService;

  const httpClientMock = jasmine.createSpyObj('HttpClient', [
    'get',
    'post',
    'patch',
    'delete',
  ]);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useValue: httpClientMock }],
    });
    service = TestBed.inject(TodosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getTodos', () => {
    it('should have method getTodos', () => {
      expect(service.getTodos).toBeTruthy();
    });

    it('should return list of todos', (done) => {
      httpClientMock.get = jasmine
        .createSpy()
        .and.returnValue(of(FAKE_TODO_RESPONSE));

      expect(httpClientMock.get).not.toHaveBeenCalled();

      service.getTodos();

      expect(httpClientMock.get).toHaveBeenCalledTimes(1);

      service.todos$.subscribe((todos) => {
        expect(todos).toEqual(FAKE_TODO_RESPONSE);
        done();
      });
    });
  });

  describe('addTodo', () => {
    it('should have methods addTodo', () => {
      expect(service.addTodo).toBeTruthy();
    });
  });
});
