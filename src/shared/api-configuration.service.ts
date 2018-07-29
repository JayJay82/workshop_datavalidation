import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiConfigurationService {
  apiEndpoint : string = "http://localhost:3000";
  postsUri : string = this.apiEndpoint + "/posts";
  constructor() { }
}
