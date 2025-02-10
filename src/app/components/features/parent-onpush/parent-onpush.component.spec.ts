import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentOnpushComponent } from './parent-onpush.component';

describe('ParentOnpushComponent', () => {
  let component: ParentOnpushComponent;
  let fixture: ComponentFixture<ParentOnpushComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentOnpushComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentOnpushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
