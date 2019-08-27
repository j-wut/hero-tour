import { Injectable } from "@angular/core";
import { HEROES } from "./mock-heroes";
import { MessageService } from "./message.service";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { Hero } from "./hero";

import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HeroService {
  heroes;

  heroesUrl = "api/heroes";
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(private http: HttpClient, private log: MessageService) {
    this.heroes = HEROES;
  }
  getHero(id): Observable<Hero> {
    return this.http
      .get<Hero>("${this.heroUrl}/#{id}")
      .pipe(tap(_ => this.log.info("Fetching Heroes")));
  }
  getHeroes(): Observable<Hero[]> {
    return this.http
      .get<Hero[]>(this.heroesUrl)
      .pipe(tap(_ => this.log.info("Fetching Heroes")));
  }
  addHero(hero): Observable<Hero> {
    return this.http
      .post<Hero>(this.heroesUrl, hero, this.httpOptions)
      .pipe(tap((h: Hero) => this.log.info("adding new Hero: ", h.id)));
  }
  deleteHero(hero: Hero | number): Observable<Hero> {
    return this.http
      .delete<Hero>(
        "${this.heroUrl}/#{typeof hero === 'number' ? hero | hero.id}",
        this.httpOptions
      )
      .pipe(tap((h: Hero) => this.log.info("deleting hero: ", h.id)));
  }
  updateHero(hero): Observable<Hero> {
    return this.http
      .put<Hero>(this.heroesUrl, hero, this.httpOptions)
      .pipe(tap((h: Hero) => this.log.info("updating Hero: ", h.id)));
  }
}
