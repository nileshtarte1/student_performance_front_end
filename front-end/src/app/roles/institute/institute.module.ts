import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstituteDashboardComponent } from './components/institute-dashboard/institute-dashboard.component';
import { InstitudeRoutingModule } from './institude-routing.module';



@NgModule({
  declarations: [InstituteDashboardComponent],
  imports: [
    CommonModule, 
    InstitudeRoutingModule
  ]
})
export class InstituteModule { }
