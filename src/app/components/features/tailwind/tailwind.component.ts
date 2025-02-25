import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-tailwind',
  standalone: true,
  imports: [],
  templateUrl: './tailwind.component.html',
  styleUrl: './tailwind.component.scss'
})
export class TailwindComponent {

  constructor(private renderer2:Renderer2){}

  darkMode(){
    if(document.body.classList.contains("dark"))
      this.renderer2.removeClass(document.body,'dark')
      else
    this.renderer2.addClass(document.body,'dark')
  }
}
