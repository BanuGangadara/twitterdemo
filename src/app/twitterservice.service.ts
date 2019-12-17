import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TwitterserviceService {
  api_url = 'http://localhost:3000';
  
  constructor(private http: HttpClient) { }
 
  getTweets() {
    return this.http
      .get<any[]>(this.api_url+'/search')
      .pipe(map(data => data));
 
  }

  }

