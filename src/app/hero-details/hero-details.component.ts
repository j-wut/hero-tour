import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormBuilder } from "@angular/forms";
import { Location } from "@angular/common";

import { HeroService } from "../hero.service";

@Component({
  selector: "app-hero-details",
  templateUrl: "./hero-details.component.html",
  styleUrls: ["./hero-details.component.css"]
})
export class HeroDetailsComponent implements OnInit {
  hero;
  editForm;
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private formBuilder: FormBuilder,
    private location: Location
  ) {}

  ngOnInit() {
    this.hero = this.heroService.getHero(
      this.route.snapshot.paramMap.get("id")
    );
    this.editForm = this.formBuilder.group({ name: this.hero.name });
  }
  goBack() {
    this.location.back();
    return false;
  }
  save(form) {
    this.heroService.updateHero(this.hero, form.name);
    this.location.back();
  }
}
