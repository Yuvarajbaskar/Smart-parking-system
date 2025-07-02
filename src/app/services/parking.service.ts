
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ParkingService {
  private apiUrl = 'http://localhost:8080/api/parking';

  constructor(private http: HttpClient) {}

  getSlots(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/slots`);
  }

  bookSlot(id: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/book/${id}`, {});
  }
}
