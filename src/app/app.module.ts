
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ParkingLotComponent } from './parking-lot/parking-lot.component';

@NgModule({
  declarations: [ParkingLotComponent],
  imports: [BrowserModule, HttpClientModule],
  bootstrap: [ParkingLotComponent]
})
export class AppModule {}
