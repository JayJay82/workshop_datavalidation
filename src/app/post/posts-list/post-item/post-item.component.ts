import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../model/post.model';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {
  @Input() postElement : Post;
  @Output() delete = new EventEmitter<Post>();

   
  constructor() { }
  
  deleteItem() {
    this.delete.emit(this.postElement);
  }
  ngOnInit() {
  }

}
