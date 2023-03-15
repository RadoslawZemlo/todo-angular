import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ConvertPriorityPipe } from './pipes/convert-priority/convert-priority.pipe';

@NgModule({
  declarations: [ConvertPriorityPipe],
  imports: [CommonModule],
  exports: [MaterialModule, ReactiveFormsModule, ConvertPriorityPipe],
})
export class SharedModule {}
