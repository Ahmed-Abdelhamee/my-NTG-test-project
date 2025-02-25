import { Component, HostListener, signal } from '@angular/core';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { DataService } from '../../core/services/data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-loading-request',
  standalone: true,
  imports: [],
  templateUrl: './loading-request.component.html',
  styleUrl: './loading-request.component.scss',
})
export class LoadingRequestComponent {

  signalStoreNgrx = signal<any>([]);
  
  constructor(private dataService:DataService, private http:HttpClient){}

  posts: any[] = [];
  page: number = 1;
  limit: number = 10;
  loading: boolean = false;

  ngOnInit() {
    this.fun();
    this.loadMorePosts();
  }

  @HostListener('window:scroll', []) onScroll(): void {
    if (this.loading) {
      console.log(this.loading);
      return;
    } else {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight &&
        !this.loading
      ) {
        this.loadMorePosts();
      }
    }
  }

  async loadMorePosts() {
    this.loading = true;
    this.dataService.getPosts(this.page, this.limit).subscribe({
      next: (newPosts) => {
        this.posts = [...this.posts, ...newPosts];
        this.page++;
      },
      complete: () => (this.loading = false),
    });

    let x = new Promise((resolve, reject) =>
      firstValueFrom(this.dataService.getPosts(this.page, this.limit)).then(
        (value) => resolve(value)
      )
    );
    console.log('from x promise converted from rxjs operator ');
    x.then((value) => console.log(value));

    //  ---- using await is inside the async function
    // & must the code after it is an promise and resove value
    // then in the code below we save the resoved or rejected value which extracted from the promise in y
    //  & print the value stored in it
    const y = await lastValueFrom(
      this.dataService.getPosts(this.page, this.limit)
    );
    console.log('from y promise converted from rxjs operator ');
    console.log(y);
  }

  async fun() {
    console.log('*'.repeat(20));
    // await fetch("https://jsonplaceholder.typicode.com/posts").then(val=>console.log(val))
    let res = await firstValueFrom(
      this.http.get('https://jsonplaceholder.typicode.com/posts')
    );
    console.log(res);

    console.log('*'.repeat(20));
  }
}
