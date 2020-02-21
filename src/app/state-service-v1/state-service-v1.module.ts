import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { StateServiceV1Component } from './state-service-v1.component';
import { StateServiceV1 } from './state-service-v1.service';


const routes: Route[] = [
  {
    path: '',
    component: StateServiceV1Component
  }
];

@NgModule({
  declarations: [StateServiceV1Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [StateServiceV1]
})
export class StateServiceV1Module { }
