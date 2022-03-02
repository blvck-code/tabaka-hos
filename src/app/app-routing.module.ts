import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {ContactComponent} from "./components/contact/contact.component";
import {SpecialistComponent} from "./components/specialist/specialist.component";
import {ManagementComponent} from "./components/management/management.component";
import {LaboratoryComponent} from "./components/laboratory/laboratory.component";
import {PharmacyComponent} from "./components/pharmacy/pharmacy.component";
import {NursingComponent} from "./components/nursing/nursing.component";
import {RadiologyComponent} from "./components/radiology/radiology.component";
import {AmbulanceComponent} from "./components/ambulance/ambulance.component";
import {NewsmediaComponent} from "./components/newsmedia/newsmedia.component";

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'about-us', component: AboutComponent},
  {path:'contact', component: ContactComponent},
  {path:'specialistcenter', component: SpecialistComponent},
  {path:'senior-management', component: ManagementComponent},
  {path:'lab', component: LaboratoryComponent},
  {path:'pharmacy', component: PharmacyComponent},
  {path:'nursing-services', component: NursingComponent},
  {path:'radiology', component: RadiologyComponent},
  {path:'ambulance-services', component:AmbulanceComponent},
  {path:'newsmedia', component: NewsmediaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
