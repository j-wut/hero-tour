import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";

import { HeroService } from "../hero.service";

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
    console.log("adding: ", formData);
    this.heroService.addHero(formData);
    this.newHero.setValue({ name: "" });
  }

  delete(index) {
    console.log("deleting: ", this.heroes[index]);
    this.heroService.deleteHero(index);
  }
}
