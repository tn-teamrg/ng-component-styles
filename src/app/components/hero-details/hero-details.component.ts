import { Component, Input } from '@angular/core';
import { Hero } from '../models/hero';
import { HeroTeamComponent } from '../hero-team/hero-team.component';

@Component({
  selector: 'app-hero-details',
  standalone: true,
  imports: [HeroTeamComponent],
  templateUrl: './hero-details.component.html',
  styleUrl: './hero-details.component.css'
})
export class HeroDetailsComponent {
  @Input() hero!: Hero;
}
