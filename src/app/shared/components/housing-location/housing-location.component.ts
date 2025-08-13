import { Component, Input, input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router'
import { HousingLocationInfo } from '../../../core/services';

@Component({
  selector: 'app-housing-location',
  imports: [RouterModule],
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.scss']
})
export class HousingLocationComponent {
  housingLocation = input.required<HousingLocationInfo>();
  // @Input({ required: true }) housingLocation!: HousingLocationInfo;
}
