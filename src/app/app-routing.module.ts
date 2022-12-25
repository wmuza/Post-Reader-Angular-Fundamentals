import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { UsersComponent } from './users/users.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { title: 'Home', path: '', component: PostsComponent },
  { title: 'Posts', path: 'posts', component: PostsComponent },
  { title: 'Users', path: 'users', component: UsersComponent },
  { title: 'Animals', path: 'animals', component: AnimalListComponent },
  { title: '404', path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
