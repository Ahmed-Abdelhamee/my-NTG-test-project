import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { add, cartActions, loadApi } from '../../core/actions';
import { cartSelector } from '../../core/selectors';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  data : any = [];

  constructor(private store:Store<{cart:any}>){
    store.select(cartSelector).subscribe(res => this.data = res.others)
   }

  add(){
    let value = {id :1 ,name : "medo"}
    this.store.dispatch(cartActions.addItem({obj:value}))
    
    // this.store.dispatch(add({obj:value}))
  }

  load(){
    this.store.dispatch(loadApi())
  }
}
