import {Component, inject} from '@angular/core';
import {HousingLocationComponent} from '../../shared/components/housing-location/housing-location';
import {HousingService} from '../../services/housing.service';
import { HousingLocationInfo } from '../../housinglocation.model';
@Component({
  selector: 'app-home',
  imports: [HousingLocationComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class HomeComponent {
  housingLocationList: HousingLocationInfo[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: HousingLocationInfo[] = [];
  
  constructor() {
    this.housingService
    .getAllHousingLocations()
    .then((housingLocationList: HousingLocationInfo[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    })

    
  }

  filterResults(text: string) {
    console.log(text)
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    this.filteredLocationList = this.housingLocationList.filter((housingLocation) =>
      housingLocation?.city.toLowerCase().includes(text.toLowerCase()), 
    );
  }
}