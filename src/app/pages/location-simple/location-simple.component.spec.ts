import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationSimpleComponent } from './location-simple.component';

describe('LocationSimpleComponent', () => {
  let component: LocationSimpleComponent;
  let fixture: ComponentFixture<LocationSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationSimpleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
