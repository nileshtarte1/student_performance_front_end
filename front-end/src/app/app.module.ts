import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AdminModule } from './roles/admin/admin.module';
import { CandidateModule } from './roles/candidate/candidate.module';
import { InstituteModule } from './roles/institute/institute.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    CandidateModule,
    InstituteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
