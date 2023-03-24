import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScientistsComponent } from './scientists/scientists.component';

const routes: Routes = [
  { path: 'scientists', component: ScientistsComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
