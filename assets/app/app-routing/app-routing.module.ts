import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';


import { AutorizationComponent } from '../autorization/autorization.component';
import { MainPageComponent } from '../main-page/main-page.component';
import { AboutAuthorComponent } from '../about-author/about-author.component';

const routes: Routes = [
	{
	  path: '',
	  redirectTo: '/main-page',
	  pathMatch: 'full'
	},
	{
		path: 'main-page',
		component: MainPageComponent
	},
	{
	  path: 'autorization',
	  component: AutorizationComponent
	},
	{
	  path: 'about-author',
	  component: AboutAuthorComponent
	}
];

@NgModule({
  imports: [
  	RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
