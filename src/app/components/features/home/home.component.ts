import { Component, ComponentRef, HostListener, Signal, signal, ViewChild, viewChild, ViewContainerRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { add, cartActions, loadApi } from '../../core/actions';
import { cartSelector } from '../../core/selectors';
import { CommonModule } from '@angular/common';
import { DataService } from '../../core/services/data.service';
import { HomeChildComponent } from './home-child/home-child.component';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DynamicCompComponent } from './dynamic-comp/dynamic-comp.component';

export interface posts {}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HomeChildComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  // for NGRX-Signal Store managment
  signalStoreNgrx = signal<any>([]);
  users: any = signal([]);

  // signal examples
  sharedOrdinarySignal: any;
  sharedOrdinaryVariable: any;

  constructor(
    private store: Store<{ cart: any }>,
    private dataService: DataService,
    private http: HttpClient
  ) {
    store
      .select(cartSelector)
      .subscribe((res: any) =>
        this.signalStoreNgrx.update((items) => res.others.data)
      );
    // signal examples
    this.sharedOrdinarySignal = dataService.sharedOrdinarySignal;
    this.sharedOrdinaryVariable = dataService.ordinaryVariable;
  }

  add() {
    let value = { id: 1, name: 'medo' };
    // NGRX Example
    // this.store.dispatch(add({obj:value}))
    this.store.dispatch(cartActions.addItem({ obj: value }));

    // signal update examples
    this.dataService.sharedOrdinarySignal.update((item: number) => item + 1);
    this.dataService.ordinaryVariable += 1;
    console.log(this.sharedOrdinarySignal());
    console.log(this.sharedOrdinaryVariable);
  }

  load() {
    this.store.dispatch(loadApi());
    this.store.select(cartSelector).subscribe((res) => {
      this.users.set(res.others.data);
      console.log(this.users());
    });
  }

  // ------------------------ dynamic component control-----------------
  @ViewChild('DynamicCompRef',{read:ViewContainerRef, static: true}) container_of_Dynamic_comp_ref!:ViewContainerRef;  // ViewContainerRef is for managing dynamic component
  componentRef!:ComponentRef<DynamicCompComponent>


  addDynamicComponent() {
    this.container_of_Dynamic_comp_ref.clear(); // for empty the ng-container tag from any contents inside it

    // this.container_of_Dynamic_comp_ref.createComponent(DynamicCompComponent)   // to create the dynamic component in the container 

    this.componentRef /* to store a reference from the created component to controle it & make a destroy for remove it*/ 
    = this.container_of_Dynamic_comp_ref.createComponent(DynamicCompComponent)
  }

  deleteDynamicComponent(){
    this.componentRef.destroy()

  }




}
