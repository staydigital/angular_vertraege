import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {PersonenComponent} from './personen/personen.component';
import {VertraegeComponent} from './vertraege/vertraege.component';
import {SchaedenComponent} from './schaeden/schaeden.component';
import {EinstellungenComponent} from './einstellungen/einstellungen.component';


const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'personen', component: PersonenComponent},
  { path: 'vertraege', component: VertraegeComponent},
  { path: 'schaeden', component: SchaedenComponent},
  { path: 'einstellungen', component: EinstellungenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
