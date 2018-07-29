import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing/routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule,MatSnackBarModule, MatAutocompleteModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { CarditemComponent } from './carditem/carditem.component';
import { SearchComponent } from './search/search.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { PostsListComponent } from './post/posts-list/posts-list.component';
import { ApiConfigurationService } from '../shared/api-configuration.service';
import { PostService } from './post/posts-list/service/post.service';
import { PostItemComponent } from './post/posts-list/post-item/post-item.component';
import { PostAddComponent } from './post/posts-list/post-add/post-add.component';


@NgModule({
  declarations: [
    AppComponent,
    MyDashboardComponent,
    CarditemComponent,
    SearchComponent,
    PostComponent,
    PostsListComponent,
    PostItemComponent,
    PostAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule

  ],
  providers: [ApiConfigurationService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
