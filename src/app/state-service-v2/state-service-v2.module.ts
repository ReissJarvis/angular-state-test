import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { MatDialogModule, MatInputModule, MatSnackBarModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';


import { StateServiceV2Component } from './state-service-v2.component';
import { MaterialModule } from '../shared/modules/material.module';
import { UserService } from './user.service';
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
