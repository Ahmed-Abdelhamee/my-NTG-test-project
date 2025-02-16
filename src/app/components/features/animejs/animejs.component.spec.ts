import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimejsComponent } from './animejs.component';

describe('AnimejsComponent', () => {
  let component: AnimejsComponent;
  let fixture: ComponentFixture<AnimejsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimejsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimejsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
