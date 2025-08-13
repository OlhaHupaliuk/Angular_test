import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { CommonModule} from '@angular/common'
import { HousingLocationComponent } from '../../shared/components';
import { HousingService, HousingLocationInfo } from '../../core/services';

@Component({
  selector: 'app-home',
  imports: [HousingLocationComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  housingLocationList: HousingLocationInfo[] = [];
  filteredLocationList: HousingLocationInfo[] = [];

  constructor(private housingService: HousingService, private cdr: ChangeDetectorRef){}

  ngOnInit(): void {
    this.housingService
    .getAllHousingLocations()
    .subscribe((housingLocationList: HousingLocationInfo[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
      this.cdr.markForCheck();
    })
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    this.filteredLocationList = this.housingLocationList.filter((housingLocation) =>
      housingLocation?.city.toLowerCase().includes(text.toLowerCase()), 
    );
  }

}