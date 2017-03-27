import { Injectable } from '@angular/core';
import { Hero } from '../Data/Hero';
import { HEROES } from './Mocks/hero.mock';


@Injectable()
export class HeroService {
    getHeroes(): Promise<Hero[]>{
        return Promise.resolve(HEROES);
    }

     getHeroes2(): Hero[]{
        return [{ id: 11, name: 'Mr. Nice' }, {id: 12, name: 'Narco' }];
    }
}