import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { CreateComponent } from './blog/create/create.component';
import { ReadComponent } from './blog/read/read.component';

const appRoutes: Routes = [{ path: 'viewblogs', component: ReadComponent }];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    CreateComponent,
    ReadComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
