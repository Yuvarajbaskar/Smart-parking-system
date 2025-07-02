
import { Component, OnInit } from '@angular/core';
import { ParkingService } from '../services/parking.service';

@Component({
  selector: 'app-parking-lot',
  templateUrl: './parking-lot.component.html'
})
export class ParkingLotComponent implements OnInit {
  slots: any[] = [];

  constructor(private parkingService: ParkingService) {}

  ngOnInit() {
    this.parkingService.getSlots().subscribe(data => this.slots = data);
  }

  bookSlot(id: number) {
    this.parkingService.bookSlot(id).subscribe(() => {
      alert('Slot booked!');
      this.ngOnInit();
    });
  }
}
