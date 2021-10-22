import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CostumesComponent } from './views/costumes/costumes.component';
import { ClientsComponent } from './views/clients/clients.component';
import { MessagesComponent } from './views/messages/messages.component';
import { CategoriesComponent } from './views/categories/categories.component';
import { ReservatiuonComponent } from './views/reservatiuon/reservatiuon.component';
import { ScoreComponent } from './views/score/score.component';
import { AdminsComponent } from './views/admins/admins.component';
import { appRouting } from './app.routes';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ServiceService } from './service/service.service';
import { CostumesService } from './service/costumes.service';

@NgModule({
  declarations: [
    AppComponent,
    CostumesComponent,
    ClientsComponent,
    MessagesComponent,
    CategoriesComponent,
    ReservatiuonComponent,
    ScoreComponent,
    AdminsComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    appRouting
  ],
  providers: [ServiceService, CostumesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
