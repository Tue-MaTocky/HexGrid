import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GridComponent } from './pages/gird/grid.component';
import { ConfigComponent } from './pages/config/config.component';

const routes: Routes = [
  { path: 'grid', component: GridComponent },
  { path: 'config', component: ConfigComponent },
  { path: '', redirectTo: 'grid', pathMatch: 'full' },
  { path: '**', redirectTo: 'grid', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
