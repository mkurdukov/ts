import { Component, OnInit  } from '@angular/core';
import{ Hero } from '../Data/Hero';
import { HeroService } from '../Services/hero.service';

@Component({
  selector: 'heroes-list',
  providers: [HeroService],
  template: `
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <hero-detail [hero]="selectedHero"></hero-detail>
  `
})

export class HeroesComponent  implements OnInit {
  constructor(private heroService: HeroService) { }

  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(){
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}
