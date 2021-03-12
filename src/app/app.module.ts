import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { ParimparComponent } from "./parimpar/parimpar.component";
import { RouterModule } from "@angular/router";
import { TabuadaComponent } from "./tabuada/tabuada.component";
import { HomeComponent } from "./home/home.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "home", component: HomeComponent },
      { path: "parimpar", component: ParimparComponent },
      { path: "tabuada", component: TabuadaComponent }
    ])
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    NavbarComponent,
    ParimparComponent,
    TabuadaComponent,
    HomeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
