import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import anime from 'animejs';

@Component({
  selector: 'app-animejs',
  standalone: true,
  imports: [],
  templateUrl: './animejs.component.html',
  styleUrl: './animejs.component.scss'
})
export class AnimejsComponent implements AfterViewInit{
  
  
  constructor(@Inject(PLATFORM_ID) private platFormId :object){ }
  
  ngAfterViewInit(): void {
    if(isPlatformBrowser(this.platFormId)){
      let pathEls:any = document.querySelectorAll('path');
      for ( let item of pathEls) {
        let offset:any = anime.setDashoffset(item);
        item.setAttribute('stroke-dashoffset', offset);
        anime({
          targets: item,
          strokeDashoffset: [offset, 0],
          duration: anime.random(1000, 3000),
          delay: anime.random(10, 100),
          loop: true,
          direction: 'alternate',
          easing: 'easeInOutSine',
          autoplay: true
        });
      }
      
      let letterEls:any = document.querySelectorAll('.letter');
      for (let item of letterEls) {
        let offset = anime.setDashoffset(item);
        item.setAttribute('stroke-dashoffset', offset);
         anime({
          targets: item,
          duration: anime.random(0, 1000),
          delay: anime.random(0, 300),
          opacity: [
            { value: 0, duration: anime.random(0, 300) },
          ],
          loop: true
        });
      }
    }
    

  }
  
  
  
  
}
