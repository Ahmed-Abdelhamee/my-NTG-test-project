import { Routes } from '@angular/router';
import { HomeComponent } from './components/features/home/home.component';
import { TailwindComponent } from './components/features/tailwind/tailwind.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'tailwind', component:TailwindComponent}
];
