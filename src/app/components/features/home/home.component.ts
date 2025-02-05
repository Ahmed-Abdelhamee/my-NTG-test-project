import { Component, HostListener, Signal, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { add, cartActions, loadApi } from '../../core/actions';
import { cartSelector } from '../../core/selectors';
import { CommonModule } from '@angular/common';
import { DataService } from '../../core/services/data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  
  data = signal<any>([]);

  constructor(
    private store: Store<{ cart: any }>,
    private dataService: DataService
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
    this.loadMorePosts();
  }

  @HostListener('window:scroll', []) onScroll(): void {

    if (this.loading) {
      console.log(this.loading);
      return;
    }
    else {      
      if ( window.innerHeight + window.scrollY >= document.body.offsetHeight && !this.loading ) {
        this.loadMorePosts();
      }
    }
  }

  loadMorePosts() {
    this.loading = true;
    this.dataService.getPosts(this.page, this.limit).subscribe({
      next: (newPosts) => {
        this.posts = [...this.posts, ...newPosts];
        this.page++;
      },
      complete: () => (this.loading = false),
    });
  }
}
