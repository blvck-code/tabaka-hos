import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/common/nav/nav.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { HeaderComponent } from './components/common/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { SpecialistComponent } from './components/specialist/specialist.component';
import { ManagementComponent } from './components/management/management.component';
import { LaboratoryComponent } from './components/laboratory/laboratory.component';
import { PharmacyComponent } from './components/pharmacy/pharmacy.component';
import { NursingComponent } from './components/nursing/nursing.component';
import { RadiologyComponent } from './components/radiology/radiology.component';
import { AmbulanceComponent } from './components/ambulance/ambulance.component';
import { NewsmediaComponent } from './components/newsmedia/newsmedia.component';
import {HomeComponent} from "./components/home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    SpecialistComponent,
    ManagementComponent,
    LaboratoryComponent,
    PharmacyComponent,
    NursingComponent,
    RadiologyComponent,
    AmbulanceComponent,
    NewsmediaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
