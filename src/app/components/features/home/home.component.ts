import { Component, HostListener, Signal, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { add, cartActions, loadApi } from '../../core/actions';
import { cartSelector } from '../../core/selectors';
import { CommonModule } from '@angular/common';
import { DataService } from '../../core/services/data.service';
import { HomeChildComponent } from './home-child/home-child.component';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HomeChildComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  data = signal<any>([]);

  constructor(
    private store: Store<{ cart: any }>,
    private dataService: DataService,
    private http:HttpClient
  ) {
    store
      .select(cartSelector)
      .subscribe((res: any) => this.data.update((items) => res.others.data));
  }

  add() {
    let value = { id: 1, name: 'medo' };
    this.store.dispatch(cartActions.addItem({ obj: value }));

    // this.store.dispatch(add({obj:value}))
  }

  load() {
    this.store.dispatch(loadApi());
  }

  // ----------------------------------------

  posts: any[] = [];
  page: number = 1;
  limit: number = 10;
  loading: boolean = false;

  ngOnInit() {
    
    this.fun()
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
    // this.dataService.getPosts(this.page, this.limit).subscribe({
    //   next: (newPosts) => {
    //     this.posts = [...this.posts, ...newPosts];
    //     this.page++;
    //   },
    //   complete: () => (this.loading = false),
    // });

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

  async fun(){
    console.log("*".repeat(20))
    // await fetch("https://jsonplaceholder.typicode.com/posts").then(val=>console.log(val))
    let res = await firstValueFrom( this.http.get("https://jsonplaceholder.typicode.com/posts"))
    console.log(res);
    
    console.log("*".repeat(20))
  }
}
