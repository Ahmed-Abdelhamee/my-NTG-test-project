import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Inject,
  NgZone,
  PLATFORM_ID,
} from '@angular/core';
import anime from 'animejs';
import { DataService } from '../../core/services/data.service';

@Component({
  selector: 'app-animejs',
  standalone: true,
  imports: [],
  templateUrl: './animejs.component.html',
  styleUrl: './animejs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimejsComponent implements AfterViewInit {
  constructor(
    @Inject(PLATFORM_ID) private platFormId: object,
    private ngZone: NgZone,
  ) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platFormId)) {
      this.ngZone.runOutsideAngular(() => {
        let pathEls: any = document.querySelectorAll('path');
        for (let item of pathEls) {
          let offset: any = anime.setDashoffset(item);
          item.setAttribute('stroke-dashoffset', offset);
          anime({
            targets: item,
            strokeDashoffset: [offset, 0],
            duration: anime.random(1000, 3000),
            delay: anime.random(10, 100),
            loop: true,
            direction: 'alternate',
            easing: 'easeInOutSine',
            autoplay: true,
          });
        }
      });

      this.ngZone.runOutsideAngular(() => {
        let letterEls: any = document.querySelectorAll('.letter');
        for (let item of letterEls) {
          let offset = anime.setDashoffset(item);
          item.setAttribute('stroke-dashoffset', offset);
          anime({
            targets: item,
            duration: anime.random(0, 1000),
            delay: anime.random(0, 300),
            opacity: [{ value: 0, duration: anime.random(0, 300) }],
            loop: true,
          });
        }
      });
    }
  }
}
