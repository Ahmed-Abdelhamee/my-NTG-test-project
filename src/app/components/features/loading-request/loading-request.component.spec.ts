import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingRequestComponent } from './loading-request.component';

describe('LoadingRequestComponent', () => {
  let component: LoadingRequestComponent;
  let fixture: ComponentFixture<LoadingRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingRequestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadingRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
