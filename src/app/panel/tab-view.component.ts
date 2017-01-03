import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'tab-view',
  templateUrl: './tab-view.component.html'
})

export class TabViewComponent{

     constructor(private commonService: CommonService) {
  }

    msgs=[];
    
    onTabChange(event) {
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'Tab Expanded', detail: 'Index: ' + event.index});
    }
}