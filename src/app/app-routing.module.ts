import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { IdentityComponent } from './identity/identity.component';
import { RocksonComponent } from './rockson/rockson.component';
import { PhotographyComponent } from './photography/photography.component';
import { VideographyComponent } from './videography/videography.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: LandingComponent,
  },
  {
    path: 'videography',
    component: VideographyComponent,
  },
  {
    path: 'identity',
    component: IdentityComponent,
  },
  {
    path: 'rockson',
    component: RocksonComponent,
  },
  {
    path: 'photography',
    component: PhotographyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
