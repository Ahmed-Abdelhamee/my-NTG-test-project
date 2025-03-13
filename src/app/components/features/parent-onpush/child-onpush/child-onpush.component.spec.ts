import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildOnpushComponent } from './child-onpush.component';

describe('ChildOnpushComponent', () => {
  let component: ChildOnpushComponent;
  let fixture: ComponentFixture<ChildOnpushComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildOnpushComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildOnpushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
