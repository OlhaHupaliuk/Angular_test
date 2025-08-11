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
  constructor(){
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}