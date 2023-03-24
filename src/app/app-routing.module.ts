import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScientistsComponent } from './scientists/scientists.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ScientistDetailComponent } from './scientist-detail/scientist-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'scientists', component: ScientistsComponent},
  { path: 'detail/:id', component: ScientistDetailComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
