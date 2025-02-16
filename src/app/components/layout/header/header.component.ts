import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { Store } from '@ngrx/store';
import { cartSelector } from '../../core/selectors';
import { RouterModule } from '@angular/router';
import anime from 'animejs';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements AfterViewInit {
  val: any;

  constructor(
    private store: Store<{ cart: any }>,
    @Inject(PLATFORM_ID) private platFormId: object
  ) {
    store.select(cartSelector).subscribe((res: any) => {
      this.val = res.cart;
    });
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platFormId)) {
      // Select all <path> elements in the document
      let pathEls: any = document.querySelectorAll('path');

      pathEls.forEach((item: any) => {
        // Calculate the total length of the path's stroke and store it
        const offset = anime.setDashoffset(item);

        // Set the stroke-dashoffset attribute to the calculated offset,
        // making the stroke initially invisible
        item.setAttribute('stroke-dashoffset', offset);

        // Animate the stroke of the path using Anime.js
        anime({
          targets: item, // The path element to be animated
          strokeDashoffset: [offset, 0], // Animate from full offset (hidden) to 0 (fully drawn)
          duration: anime.random(1000, 3000), // Set a random animation duration between 1s and 3s
          delay: anime.random(0, 0), // No delay before the animation starts
          loop: true, // Repeat the animation infinitely
          direction: 'alternate', // Make the stroke appear and disappear alternately
          easing: 'easeInOutSine', // Use a smooth easing function for a natural look
          autoplay: true, // Start the animation automatically
        });
      });
    }
  }
}
