import { MyDashboardComponent } from './../my-dashboard/my-dashboard.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from '../post/post.component';
import { PostAddComponent } from '../post/posts-list/post-add/post-add.component';
import { PostsListComponent } from '../post/posts-list/posts-list.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: 'dashboard', component: MyDashboardComponent},
  {path: 'post', component: PostComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: PostsListComponent },
      { path: 'add', component: PostAddComponent },
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
