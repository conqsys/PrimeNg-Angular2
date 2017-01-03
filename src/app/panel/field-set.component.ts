import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'my-fieldSet',
  templateUrl: './field-set.component.html'
})


export class FieldSetComponent {

    constructor(private commonService: CommonService) {
  }

    msgs=[];

   
}