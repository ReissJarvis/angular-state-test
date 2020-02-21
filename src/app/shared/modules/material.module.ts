import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatIconModule, MatListModule, MatProgressSpinnerModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  exports: [
    MatCardModule,
    MatIconModule,
    MatProgressSpinnerModule,
    FlexLayoutModule,
    MatListModule,
    MatButtonModule,
  ]
})
export class MaterialModule { }
