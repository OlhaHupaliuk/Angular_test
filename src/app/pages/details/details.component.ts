import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HousingService, HousingLocationInfo } from '../../core/services';

@Component({
  selector: 'app-details',
  imports: [ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {
  housingLocation: HousingLocationInfo | undefined;
  housingLocationId = 0;
  applyForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
    email: new FormControl('',[
      Validators.email,
      Validators.required 
    ]
    )
  })

  constructor(private route: ActivatedRoute, private housingService: HousingService){}

  ngOnInit(): void {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingService.getHousingLocationById(housingLocationId).subscribe((housingLocation) => {
      this.housingLocation = housingLocation[0];
    })
  }

  submitApplication(){
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    )
  }

}
