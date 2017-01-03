import { Http, Response, URLSearchParams, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
// import 'Rxjs/Rx';
import 'rxjs/Rx';

export interface Car {
  vin;
  year;
  brand;
  color;
};

@Injectable()

export class CommonService {
  constructor(private http: Http) {

  }

  private apiServiceBase: string = 'http://192.168.1.183:8081';


  public upload() {
    return this.http
      .get(this.apiServiceBase + 'upload')
      .map(
      (res: Response) =>
        res.json()
      );
  }
  public getDataFromURL(url) {
    return this.http
      .get(this.apiServiceBase + url)
      .map(
      (res: Response) =>
        res.json()
      );
  }

  getCarsLarge() {
    return this.http
      .get(this.apiServiceBase + '/gridData')
      .toPromise()
      .then(res => <Car[]>res.json().data)
      .then(data => {
        return data;
      });
  }

   getCarsSmall() {
    return this.http
      .get(this.apiServiceBase + '/carSmall')
      .toPromise()
      .then(res => <Car[]>res.json().data)
      .then(data => {
        return data;
      });
  }

  getCarsMedium() {
    return this.http
      .get(this.apiServiceBase + '/carMedium')
      .toPromise()
      .then(res => <Car[]>res.json().data)
      .then(data => {
        return data;
      });
  }

}
