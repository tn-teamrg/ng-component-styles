import { Component, Input } from '@angular/core';
import { Hero } from '../models/hero';

@Component({
  selector: 'app-hero-controls',
  standalone: true,
  imports: [],
  templateUrl: './hero-controls.component.html',
  styleUrl: './hero-controls.component.css'
})
export class HeroControlsComponent {
  @Input() hero!: Hero;

  activate() {
    this.hero.active = true;
  }
}
