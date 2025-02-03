import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { cartSelector } from '../../core/selectors';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  val:any;
  constructor(private store:Store<{cart:any}>){
    store.select(cartSelector).subscribe((res:any) => {
      this.val = res.cart;
      
    })
  }
}
