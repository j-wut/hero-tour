import { Component, OnInit } from "@angular/core";
import { HeroService } from "../hero.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  heroes;
  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.heroes = this.heroService
      .getHeroes()
      .slice()
      .sort((h1, h2) => {
        return h2.id - h1.id;
      })
      .slice(0, 4);
  }
}
