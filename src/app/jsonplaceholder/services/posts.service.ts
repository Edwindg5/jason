import { Injectable } from '@angular/core';
import { Iposts } from '../models/Iposts';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(readonly httpClient:HttpClient) {

  }

  getPosts(): Observable<Iposts[]> {
    return this.httpClient.get<Iposts[]>(this.url);
  }

  postPosts(object: Iposts): Observable<Iposts[]> {
    return this.httpClient.post<Iposts[]>(this.url, object)
  }
}