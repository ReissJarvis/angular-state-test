import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { MatDialogModule, MatInputModule, MatSnackBarModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

import { UserService, MaterialModule } from '@shared/index';
import { StateServiceV2Component } from './state-service-v2.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';

const routes: Route[] = [
  {
    path: '',
    component: StateServiceV2Component
  }
];

@NgModule({
  declarations: [StateServiceV2Component, ConfirmationDialogComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MaterialModule,
    MatInputModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  providers: [UserService],
  entryComponents: [ConfirmationDialogComponent]
})
export class StateServiceV2Module { }
