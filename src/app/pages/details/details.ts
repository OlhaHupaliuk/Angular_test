import { Component, inject } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.scss'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingLocationId = 0;
  constructor(){
    this.housingLocationId = Number(this.route.snapshot.params['id'])
  }
}
