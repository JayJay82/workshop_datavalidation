import { Component, OnInit } from '@angular/core';
import { Post } from './model/post.model';
import { PostService } from './service/post.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  postList : Post[] = [];
  constructor(private postService : PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(data => {
      this.postList = data;
    });
}

deletePost(post : Post) {
  this.postService.deletePost(post).subscribe(res => {
    var index = this.postList.indexOf(post);
    if (index > -1) {
      this.postList.splice(index, 1);
    }
  })
}
}
