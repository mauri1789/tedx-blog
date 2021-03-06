import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { 
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatListModule
} from '@angular/material';

import { PostService } from './services/post.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'
import { AdminComponent } from './view/admin/admin.component'
import { BlogComponent } from './view/blog/blog.component'

import { QuillModule } from 'ngx-quill'

let MaterialModules = 
  [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ]

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    QuillModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ... MaterialModules
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
