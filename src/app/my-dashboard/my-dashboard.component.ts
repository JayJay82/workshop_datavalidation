import { SearchService } from './../search/service/search.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Video } from '../search/model/video.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'my-dashboard',
  templateUrl: './my-dashboard.component.html',
  styleUrls: ['./my-dashboard.component.css']
})
export class MyDashboardComponent implements OnInit, OnDestroy {
  
  cards : Video[] = [];
  videoChangeSubscription : Subscription = new Subscription();
  
  constructor(private searchService : SearchService) {
  }
  
  ngOnInit(): void {
  this.videoChangeSubscription = this.searchService.videoSubject.subscribe( data => {
        this.cards = data;
    })
  }
  ngOnDestroy(): void {
     this.videoChangeSubscription.unsubscribe();
  }
  
}
