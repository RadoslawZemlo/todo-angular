import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { TodosService } from './core/services/todos/todos.service';
import { AppComponent } from '@app/app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
  ],
  providers: [TodosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
