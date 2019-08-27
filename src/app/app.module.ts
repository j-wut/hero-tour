import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeroesComponent } from "./heroes/heroes.component";
import { HeroDetailsComponent } from "./hero-details/hero-details.component";
import { AppRoutingModule } from "./app-routing.module";
import { DashboardComponent } from './dashboard/dashboard.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [AppComponent, HeroesComponent, HeroDetailsComponent, DashboardComponent, MessageComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  title = "Hero Tour";
}
