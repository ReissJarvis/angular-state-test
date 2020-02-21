import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    LayoutModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
