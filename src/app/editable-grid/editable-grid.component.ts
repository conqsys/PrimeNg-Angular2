import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

export interface Car {
  vin;
  year;
  brand;
  color;
};

@Component({
  selector: 'adv-editable-grid',
  templateUrl: './editable-grid.component.html'
})


export class EditableGridComponent implements OnInit {

  cars: Array<Car>;

  constructor(private commonService: CommonService) {
  }

  ngOnInit() {
    this.commonService.getCarsSmall().then(cars => this.cars = cars);
  }
}
