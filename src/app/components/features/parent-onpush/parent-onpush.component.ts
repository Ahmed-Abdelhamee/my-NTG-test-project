import { Component } from '@angular/core';
import { ChildOnpushComponent } from '../child-onpush/child-onpush.component';

@Component({
  selector: 'app-parent-onpush',
  standalone: true,
  imports: [ChildOnpushComponent],
  templateUrl: './parent-onpush.component.html',
  styleUrl: './parent-onpush.component.scss'
})
export class ParentOnpushComponent {

  value : any = {
    msg:"hello",
    num1:1,
    num2:2,
    address:{
      city:'sohag'
    }
  }

  change(){
    // this.value = {
    //   msg : this.value.msg =='hello'? 'welcome':"hello",
    //   num1: this.value.num1,
    //   num2: ++this.value.num2,
    //   address:{
    //     city: this.value.address.city == 'cairo' ? 'sohag' : 'cairo' 
    //   }
    // }
    this.value.num1 = ++this.value.num1
  }
}
