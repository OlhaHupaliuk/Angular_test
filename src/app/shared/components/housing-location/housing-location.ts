import {Component, input} from '@angular/core';
import { HousingLocationInfo } from '../../../housinglocation';

@Component({
  selector: 'app-housing-location',
  imports: [],
  templateUrl: './housing-location.html',
  styleUrls: ['./housing-location.scss']
})
export class HousingLocation {
  housingLocation = input.required<HousingLocationInfo>();
}
