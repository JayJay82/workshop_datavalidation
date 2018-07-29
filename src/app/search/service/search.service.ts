import { Injectable, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { Video } from '../model/video.model';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class SearchService {
  search_url = "https://www.googleapis.com/youtube/v3/search?part=snippet&order=relevance&maxResults=10&q=";
  api_key = "&type=video&key=AIzaSyDYY7s68X-pS4ouLUvEKNP1mzKZxOe3MoQ";
  videoSubject: Subject<Video[]> = new Subject<Video[]>();
 

  
  url: string;
    constructor(private http : Http){}

    search_word(term){
        return this.http.get(this.search_url + term + this.api_key).pipe(
          map(res => {
            let data = res.json().items;
            let descriptionData : Video [] = [];
            for(let item of data ) {
                let currentItem = new Video(item.snippet.thumbnails.high.url,item.snippet.title,"",item.snippet.thumbnails.default.url,item.snippet.publishedAt);
                descriptionData.push(currentItem);
            }
          return descriptionData;
        }))
    }

    onVideoSelected(term) {
      this.search_word(term).subscribe(res => {
         this.videoSubject.next(res);
      });
      
    }
}
