import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";

import { HeroService } from "../hero.service";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"]
})
export class HeroesComponent implements OnInit {
  newHero;
  constructor(
    private heroService: HeroService,
    private formBuilder: FormBuilder
  ) {
    this.newHero = this.formBuilder.group({
      id:
        Math.max.apply(
          null,
          this.heroService.getHeroes().map(h => {
            return h.id;
          })
        ) + 1,
      name: ""
    });
  }

  get heroes() {
    return this.heroService.getHeroes();
  }

  ngOnInit() {}

  onSubmit(formData) {
    console.log("adding: ", formData);
    this.heroes.push(formData);
    this.newHero.setValue({ id: this.newHero.value.id + 1, name: "" });
  }

  delete(index) {
    console.log("deleting: ", this.heroes[index]);
    this.heroService.deleteHero(index);
  }
}
