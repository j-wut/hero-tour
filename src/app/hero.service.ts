import { Injectable } from "@angular/core";
import { HEROES } from "./mock-heroes";

@Injectable({
  providedIn: "root"
})
export class HeroService {
  heroes;
  constructor() {
    this.heroes = HEROES;
  }
  getHeroes() {
    return this.heroes;
  }
  addHero(hero) {
    this.heroes.push(hero);
  }
  deleteHero(index) {
    this.heroes.splice(index, 1);
  }
  updateHero(hero, name) {
    hero.name = name;
  }
}