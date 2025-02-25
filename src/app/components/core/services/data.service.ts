import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  sharedOrdinarySignal:any=signal(10);
  ordinaryVariable:number=5;

  private API_URL = 'https://jsonplaceholder.typicode.com/posts'; // Sample API

  constructor(private http: HttpClient) { }

  getPosts(page: number, limit: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL}?_page=${page}&_limit=${limit}`);
  }
  
}
