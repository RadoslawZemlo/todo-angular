import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ConvertPriorityPipe } from './pipes/convert-priority/convert-priority.pipe';
import { FilterPipe } from './pipes/filter/filter.pipe';

@NgModule({
  declarations: [ConvertPriorityPipe, FilterPipe],
  imports: [CommonModule],
  exports: [
    MaterialModule,
    ReactiveFormsModule,
    ConvertPriorityPipe,
    FilterPipe,
  ],
})
export class SharedModule {}
