//Modulos
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { CostumesComponent } from './views/costumes/costumes.component';
import { ClientsComponent } from './views/clients/clients.component';
import { MessagesComponent } from './views/messages/messages.component';
import { CategoriesComponent } from './views/categories/categories.component';
import { ReservatiuonComponent } from './views/reservatiuon/reservatiuon.component';
import { AdminsComponent } from './views/admins/admins.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'costumes', component: CostumesComponent},
  {path: 'clients', component: ClientsComponent},
  {path: 'messages', component: MessagesComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'reservation', component: ReservatiuonComponent},
  {path: 'admins', component: AdminsComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'},
];


export const appRouting = RouterModule.forRoot(routes);
