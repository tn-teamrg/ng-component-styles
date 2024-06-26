import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroTeamComponent } from './hero-team.component';

describe('HeroTeamComponent', () => {
  let component: HeroTeamComponent;
  let fixture: ComponentFixture<HeroTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroTeamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
