import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'v1',
    loadChildren: () => import('./state-service-v1/state-service-v1.module').then(m => m.StateServiceV1Module)
  },
  {
    path: 'v2',
    loadChildren: () => import('./state-service-v2/state-service-v2.module').then(m => m.StateServiceV2Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
