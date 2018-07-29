import { Video } from './../search/model/video.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carditem',
  templateUrl: './carditem.component.html',
  styleUrls: ['./carditem.component.css']
})
export class CarditemComponent implements OnInit {
 @Input() element : Video;
  constructor() { }

  ngOnInit() {

  }

}
