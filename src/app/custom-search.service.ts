import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CustomSearchService {
searchSubject=new Subject<any>();
  constructor(private http:HttpClient) { }
  getSearchQuery(query:any){
    console.log("query",query)
    const result={
      fa: [
        { type: 'organization', text: 'Facebook' },
        {type: 'organization',text: 'FasTrak',subtitle: 'Government office, San Francisco, CA', },
        { type: 'text', text: 'face' },
      ],
      fac: [
        { type: 'organization', text: 'Facebook' },
        { type: 'text', text: 'face' },
        { type: 'text', text: 'facebook messenger' },
      ],
      face: [
        { type: 'organization', text: 'Facebook' },
        { type: 'text', text: 'face' },
        { type: 'text', text: 'facebook stock' },
      ],
      faces: [
        { type: 'television', text: 'Faces of COVID', subtitle: 'TV program' },
        { type: 'musician', text: 'Faces', subtitle: 'Rock band' },
        { type: 'television', text: 'Faces of Death', subtitle: 'Film series' },
      ],
      // ...
    };
    //this.http.post('https://developers.google.com/custom-search/v1',query);
    return result;
  }
}
