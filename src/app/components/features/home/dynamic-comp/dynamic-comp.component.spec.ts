import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicCompComponent } from './dynamic-comp.component';

describe('DynamicCompComponent', () => {
  let component: DynamicCompComponent;
  let fixture: ComponentFixture<DynamicCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
