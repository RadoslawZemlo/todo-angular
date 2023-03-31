import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorRoutingModule } from './error-routing.module';
import { ErrorComponent } from './components/error/error/error.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [ErrorComponent],
  imports: [CommonModule, ErrorRoutingModule, SharedModule],
})
export class ErrorModule {}
