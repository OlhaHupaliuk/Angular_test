import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HousingLocationInfo } from './housing.interface';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
  url = 'http://localhost:3000/locations';
  housingLocationList: HousingLocationInfo[] = [];

  constructor(private http: HttpClient){}

  getAllHousingLocations(): Observable<HousingLocationInfo[]> {
    return this.http.get<HousingLocationInfo[]>(this.url);
  };

  getHousingLocationById(id: number): Observable<HousingLocationInfo[]> {
    return this.http.get<HousingLocationInfo[]>(`${this.url}?id=${id}`);
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
    );
  }

}
