import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./in-memory-data.service";

import { AppComponent } from "./app.component";
import { HeroesComponent } from "./heroes/heroes.component";
import { HeroDetailsComponent } from "./hero-details/hero-details.component";
import { AppRoutingModule } from "./app-routing.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MessageComponent } from "./message/message.component";

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailsComponent,
    DashboardComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,

    //Simulated Server
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  title = "Hero Tour";
}
