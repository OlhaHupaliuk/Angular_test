import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousingLocationComponent } from './housing-location.component';

describe('HousingLocation', () => {
  let component: HousingLocationComponent;
  let fixture: ComponentFixture<HousingLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HousingLocationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HousingLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
