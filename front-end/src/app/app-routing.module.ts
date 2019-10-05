import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'admin', loadChildren: './roles/admin/admin.module#AdminModule' },
  { path: 'candidate', loadChildren: './roles/candidate/candidate.module#CandidateModule' },
  { path: 'institute', loadChildren: './roles/institute/institute.module#InstituteModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
