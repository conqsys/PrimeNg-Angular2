import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

export interface Car {
  vin;
  year;
  brand;
  color;
};

@Component({
  selector: 'adv-data-table',
  templateUrl: './data-table.component.html'
})

export class DataTableComponent implements OnInit {

  cars: Car[];
  brands: Array<any> = [];
  colors: Array<any> = [];

  constructor(private commonService: CommonService) {
  }


  ngOnInit() {
    this.commonService.getCarsMedium().then(cars => this.cars = cars);

    this.brands = [];
    this.brands.push({ label: 'All Brands', value: null });
    this.brands.push({ label: 'Audi', value: 'Audi' });
    this.brands.push({ label: 'BMW', value: 'BMW' });
    this.brands.push({ label: 'Fiat', value: 'Fiat' });
    this.brands.push({ label: 'Honda', value: 'Honda' });
    this.brands.push({ label: 'Jaguar', value: 'Jaguar' });
    this.brands.push({ label: 'Mercedes', value: 'Mercedes' });
    this.brands.push({ label: 'Renault', value: 'Renault' });
    this.brands.push({ label: 'VW', value: 'VW' });
    this.brands.push({ label: 'Volvo', value: 'Volvo' });

    this.colors = [];
    this.colors.push({ label: 'White', value: 'White' });
    this.colors.push({ label: 'Green', value: 'Green' });
    this.colors.push({ label: 'Silver', value: 'Silver' });
    this.colors.push({ label: 'Black', value: 'Black' });
    this.colors.push({ label: 'Red', value: 'Red' });
    this.colors.push({ label: 'Maroon', value: 'Maroon' });
    this.colors.push({ label: 'Brown', value: 'Brown' });
    this.colors.push({ label: 'Orange', value: 'Orange' });
    this.colors.push({ label: 'Blue', value: 'Blue' });
  }

}
