import {Component, inject} from '@angular/core';
import {HousingLocation} from '../../shared/components/housing-location/housing-location';
import {HousingService} from '../../housing.service';
import { HousingLocationInfo } from '../../housinglocation';
@Component({
  selector: 'app-home',
  imports: [HousingLocation],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class Home {
  housingLocationList: HousingLocationInfo[] = [];
  housingService: HousingService = inject(HousingService);
  constructor(){
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}