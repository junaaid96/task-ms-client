import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskComponent } from './task/task.component';
import { ProjectComponent } from './project/project.component';
import { FilterByProjectIdPipe } from './pipes/filter-by-project-id.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TaskComponent,
    ProjectComponent,
    FilterByProjectIdPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
