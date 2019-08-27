import { Injectable } from "@angular/core";
import { HEROES } from "./mock-heroes";
import { MessageService } from "./message.service";

@Injectable({
  providedIn: "root"
})
export class HeroService {
  heroes;
  constructor(private log: MessageService) {
    this.heroes = HEROES;
  }
  getHero(id) {
    this.log.info("Pulling hero: ", id);
    return this.heroes.filter(hero => hero.id == id)[0];
  }
  getHeroes() {
    return this.heroes;
  }
  addHero(hero) {
    this.log.info("Adding Hero: ", hero.id);
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
