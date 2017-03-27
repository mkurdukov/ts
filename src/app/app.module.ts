import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './Components/hero-detail.component';
import { HeroesComponent } from './Components/heroes.component';
import { DashboardComponent } from './Components/dashboard.component';

import { RouterModule }   from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    RouterModule.forRoot([
    {
      path: 'heroes',
      component: HeroesComponent
    }, {
      path: 'dashboard',
      component: DashboardComponent
    }, {
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full'
    }])
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  bootstrap: [ AppComponent ]
})



export class AppModule { }