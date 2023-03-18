import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ConvertPriorityPipe } from './pipes/convert-priority/convert-priority.pipe';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { SortPipe } from './pipes/sort/sort.pipe';
import { CounterPipe } from './pipes/counter/counter.pipe';

@NgModule({
  declarations: [ConvertPriorityPipe, FilterPipe, SortPipe, CounterPipe],
  imports: [CommonModule],
  exports: [
    MaterialModule,
    ReactiveFormsModule,
    ConvertPriorityPipe,
    FilterPipe,
    SortPipe,
    CounterPipe,
  ],
})
export class SharedModule {}
