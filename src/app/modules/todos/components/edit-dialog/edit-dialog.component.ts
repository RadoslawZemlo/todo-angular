import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Todo } from '@app/core/interfaces/todo.interface';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss'],
})
export class EditDialogComponent implements OnInit {
  editTodoForm: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public toEdit: Todo
  ) {}

  ngOnInit(): void {
    this.editTodoForm = this.formBuilder.group({
      task: [this.toEdit.task, Validators.required],
      priority: [this.toEdit.priority, Validators.required],
      completed: [this.toEdit.completed, Validators.required],
    });
  }
}
