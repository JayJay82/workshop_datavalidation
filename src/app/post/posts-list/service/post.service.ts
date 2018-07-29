import { Injectable } from '@angular/core';
import { ApiConfigurationService } from '../../../../shared/api-configuration.service';
import { Http } from '@angular/http';
import {map} from 'rxjs/operators';
import { Post } from '../model/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private configuration : ApiConfigurationService, private http : Http) { }
  
  getPosts() {
    return this.http.get(this.configuration.postsUri).pipe(
      map(res => {
        let data = res.json();
        let descriptionData : Post [] = [];
        for(let item of data ) {   
            let currentItem = new Post(item.id,item.userId,item.title,item.body);
            descriptionData.push(currentItem);
        }
      return descriptionData.sort(function(a,b){return b.id-a.id});
    }))
  }

  deletePost(post : Post) {
    return this.http.delete(this.configuration.postsUri + "/" + post.id);
  }

  addPost(post : Post) {
    return  this.http.post(this.configuration.postsUri,post);
  }
}
