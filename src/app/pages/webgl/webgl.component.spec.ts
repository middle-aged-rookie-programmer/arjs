import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebglComponent } from './webgl.component';

describe('WebglComponent', () => {
  let component: WebglComponent;
  let fixture: ComponentFixture<WebglComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebglComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebglComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
