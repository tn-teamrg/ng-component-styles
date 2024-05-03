import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroControlsComponent } from './hero-controls.component';

describe('HeroControlsComponent', () => {
  let component: HeroControlsComponent;
  let fixture: ComponentFixture<HeroControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroControlsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
