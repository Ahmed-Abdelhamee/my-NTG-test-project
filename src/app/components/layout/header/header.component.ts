import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { cartSelector } from '../../core/selectors';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterModule],
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
