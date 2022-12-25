import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostItemComponent } from './post-item/post-item.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { AnimalListItemComponent } from './animal-list-item/animal-list-item.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UsersComponent } from './users/users.component';
import { FormsModule } from '@angular/forms';
import { CreatePostComponent } from './create-post/create-post.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostItemComponent,
    AnimalListComponent,
    PageNotFoundComponent,
    AnimalListItemComponent,
    NavBarComponent,
    UsersComponent,
    CreatePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
