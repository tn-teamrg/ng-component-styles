import { Component, Input } from '@angular/core';
import { Hero } from '../models/hero';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-team.component.html',
  styleUrl: './hero-team.component.css'
})
export class HeroTeamComponent {
  @Input() hero!: Hero;

}
