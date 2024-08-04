import { Routes } from '@angular/router';
import { LabsComponent } from "./components/labs/labs.component";
import { HomeComponent } from "./components/home/home.component";

export const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'labs', component:LabsComponent}
];
