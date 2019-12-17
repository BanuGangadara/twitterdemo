import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guards/auth-guard.service';

const routes: Routes = [{path:'dashboard', component:DashboardComponent, canActivate: [AuthGuard]},
						{path: '', component: HomeComponent},
						{path: 'home', component: HomeComponent}
						];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
