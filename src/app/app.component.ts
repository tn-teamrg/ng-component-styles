import { Component, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeroMainComponent } from './components/hero-main/hero-main.component';
import { Hero } from './components/models/hero';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeroMainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-component-styles';
  hero = new Hero('Human Torch', ['Mister Fantastic', 'Invisible Woman', 'Thing']);
  @HostBinding('class') get themeClass() {
    return 'theme-light';
  }
}
