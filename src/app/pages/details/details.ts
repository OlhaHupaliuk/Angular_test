import { Component, inject } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { HousingService } from '../../services/housing.service';
import { HousingLocationInfo } from '../../housinglocation.model';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.scss'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocationInfo | undefined;
  housingLocationId = 0;
  constructor(){
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.housingService.getHousingLocationById(housingLocationId)
  }
}
