import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private API_URL = 'https://jsonplaceholder.typicode.com/posts'; // Sample API

  constructor(private http: HttpClient) { }

  getPosts(page: number, limit: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL}?_page=${page}&_limit=${limit}`);
  }
  
}
