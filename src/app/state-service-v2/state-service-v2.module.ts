import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { StateServiceV2Component } from './state-service-v2.component';
import { MaterialModule } from '../shared/modules/material.module';
import { StateV2Service } from './state-v2.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UserService } from './user.service';
import { MatButtonModule, MatInputModule, MatListModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Route[] = [
  {
    path: '',
    component: StateServiceV2Component
  }
];

@NgModule({
  declarations: [StateServiceV2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MaterialModule,
    MatInputModule
  ],
  providers: [UserService]
})
export class StateServiceV2Module { }
