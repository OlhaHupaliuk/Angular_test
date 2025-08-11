import {Component, input} from '@angular/core';
import { HousingLocationInfo } from '../../../housinglocation.model';
import { RouterModule } from '@angular/router'
@Component({
  selector: 'app-housing-location',
  imports: [RouterModule],
  templateUrl: './housing-location.html',
  styleUrls: ['./housing-location.scss']
})
export class HousingLocationComponent {
  housingLocation = input.required<HousingLocationInfo>();
}
