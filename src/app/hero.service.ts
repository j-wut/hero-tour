import { Injectable } from "@angular/core";
import { HEROES } from "./mock-heroes";
import { MessageService } from "./message.service";
import { Observable, of } from "rxjs";
import { Hero } from "./hero";

@Injectable({
  providedIn: "root"
})
export class HeroService {
  heroes;
  constructor(private log: MessageService) {
    this.heroes = HEROES;
  }
  genId() {
    return Math.max.apply(null, this.heroes.map(h => h.id)) + 1;
  }
  getHero(id) {
    this.log.info("Pulling hero: ", id);
    return this.heroes.filter(hero => hero.id == id)[0];
  }
  getHeroes(): Observable<Hero[]> {
    this.log.info("Fetching Heroes");
    return of(this.heroes);
  }
  addHero(hero) {
    this.log.info("Adding Hero: ", hero.id);
    hero.id = this.genId();
    this.heroes.push(hero);
  }
  deleteHero(index) {
    this.log.info("Deleting hero: ", this.heroes[index].id);
    this.heroes.splice(index, 1);
  }
  updateHero(hero, name) {
    hero.name = name;
    this.log.info("Hero ", hero.id, " updated to ", name);
  }
}
