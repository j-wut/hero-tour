import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";

import { HeroService } from "../hero.service";
import { Hero } from "../hero";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"]
})
export class HeroesComponent implements OnInit {
  heroes;
  newHero;
  constructor(
    private heroService: HeroService,
    private formBuilder: FormBuilder
  ) {
    this.newHero = this.formBuilder.group({
      name: ""
    });
  }

  ngOnInit() {
    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes));
  }

  onSubmit(formData) {
    this.heroService.addHero(formData).subscribe((h: Hero) => {
      this.heroes.push(h);
      this.newHero.setValue({ name: "" });
    });
  }

  delete(index) {
    console.log(index);
    this.heroService.deleteHero(this.heroes[index]).subscribe((h: Hero) => {
      this.heroes.splice(index, 1);
    });
  }
}
