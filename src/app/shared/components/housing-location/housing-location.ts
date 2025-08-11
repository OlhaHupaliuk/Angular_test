import {Component, input} from '@angular/core';
import { HousingLocationInfo } from '../../../services/housing/housing.interface';
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
