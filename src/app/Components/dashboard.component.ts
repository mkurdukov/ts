import { Component, OnInit   } from '@angular/core';
import { Hero } from '../Data/Hero'
import { HeroService } from '../Services/hero.service'

@Component({
    selector: 'dashboard',
    providers: [HeroService],
    templateUrl: './dashboard.component.html'
})

class DashboardComponent implements OnInit {
    heroes: Hero[];

     constructor(private heroService: HeroService) { }

    ngOnInit(): void{
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
}

export { DashboardComponent }