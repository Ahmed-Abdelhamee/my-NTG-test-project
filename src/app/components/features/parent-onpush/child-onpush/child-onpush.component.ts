import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-child-onpush',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child-onpush.component.html',
  styleUrl: './child-onpush.component.scss',
  changeDetection : ChangeDetectionStrategy.Default
})
export class ChildOnpushComponent {
  @Input() obj:any ;

}
