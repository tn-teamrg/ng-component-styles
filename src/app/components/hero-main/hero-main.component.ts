import { Component, Input } from '@angular/core';
import { Hero } from '../models/hero';
import { HeroControlsComponent } from '../hero-controls/hero-controls.component';
import { HeroDetailsComponent } from '../hero-details/hero-details.component';
import { QuestSummaryComponent } from '../quest-summary/quest-summary.component';

@Component({
  selector: 'app-hero-main',
  standalone: true,
  imports: [
    HeroControlsComponent,
    HeroDetailsComponent,
    QuestSummaryComponent
  ],
  templateUrl: './hero-main.component.html',
  styleUrl: './hero-main.component.css'
})
export class HeroMainComponent {
  @Input() hero!: Hero;
}
