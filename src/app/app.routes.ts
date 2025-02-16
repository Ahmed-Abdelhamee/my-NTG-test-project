import { Routes } from '@angular/router';
import { HomeComponent } from './components/features/home/home.component';
import { TailwindComponent } from './components/features/tailwind/tailwind.component';
import { ParentOnpushComponent } from './components/features/parent-onpush/parent-onpush.component';
import { AnimejsComponent } from './components/features/animejs/animejs.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'animejs', component:AnimejsComponent},
    {path:'tailwind', component:TailwindComponent},
    {path:'onpush', component:ParentOnpushComponent},
];
