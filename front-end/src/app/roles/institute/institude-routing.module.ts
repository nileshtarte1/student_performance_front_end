import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstituteDashboardComponent } from './components/institute-dashboard/institute-dashboard.component';


const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: InstituteDashboardComponent },
  ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstitudeRoutingModule { }
