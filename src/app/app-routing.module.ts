import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { IdentityComponent } from './identity/identity.component';
import { PhotographyComponent } from './photography/photography.component';
import { VideographyComponent } from './videography/videography.component';

const routes: Routes = [
	{ 
		path: '',      
		component: LandingComponent 
	},
	{
	path:'videography',
	component: VideographyComponent
	},
	{
	path:'identity',
	component: IdentityComponent
	},
	{
	path:'photography',
	component: PhotographyComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
