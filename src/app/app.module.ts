import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatIconModule, MatListModule, MatMenuModule, MatSidenavModule, MatTreeModule} from '@angular/material';
import { PersonenComponent } from './personen/personen.component';
import { VertraegeComponent } from './vertraege/vertraege.component';
import { SchaedenComponent } from './schaeden/schaeden.component';
import { EinstellungenComponent } from './einstellungen/einstellungen.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    PersonenComponent,
    VertraegeComponent,
    SchaedenComponent,
    EinstellungenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    MatTreeModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
