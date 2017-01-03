import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

export interface Car {
  vin;
  year;
  brand;
  color;
};

@Component({
  selector: 'adv-grid',
  templateUrl: './grid.component.html'
})

export class GridComponent implements OnInit {

  private cars: Array<Car>;
  private datasource: Array<Car>;
  private selectedCar: Car = null;
  private displayDialog: boolean = false;
  private totalRecords: number = 0;

  constructor(private commonService: CommonService) {
  }

  ngOnInit() {
    this.commonService.getCarsLarge().then(cars => {
      this.datasource = cars;
      this.totalRecords = this.datasource.length;
      this.cars = this.datasource.slice(0, 10);
    });
  }

  private selectCar(car: Car) {
    this.selectedCar = car;
    this.displayDialog = true;
  };

  private onDialogHide() {
    this.selectedCar = null;
  };


  /* this is used for lazy loading*/
  private loadData(event) {
    setTimeout(() => {
      if (this.datasource) {
        this.cars = this.datasource.slice(event.first, (event.first + event.rows));
      }
    }, 250);
  };
}
