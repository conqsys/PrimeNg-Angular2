import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

export interface Car {
  vin;
  year;
  brand;
  color;
};

@Component({
  selector: 'adv-export-grid',
  templateUrl: './export-grid.component.html'
})


export class ExportGridComponent implements OnInit {

  cars: Array<Car>;

  constructor(private commonService: CommonService) {
  }

  ngOnInit() {
    this.commonService.getCarsSmall().then(cars => this.cars = cars);
  }
}
