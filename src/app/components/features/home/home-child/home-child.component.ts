import { Component } from '@angular/core';
import { ImpurePipePipe } from '../../../core/pipes/impure-pipe.pipe';

@Component({
  selector: 'app-home-child',
  standalone: true,
  imports: [ImpurePipePipe],
  templateUrl: './home-child.component.html',
  styleUrl: './home-child.component.scss'
})
export class HomeChildComponent {

}
