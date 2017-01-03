import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'my-toolBar',
  templateUrl: './tool-bar.component.html'
})


export class ToolBarComponent {
  items=[];

    constructor(private commonService: CommonService) {
  }

   ngOnInit() {
        this.items = [
            {label: 'Update', icon: 'fa-refresh', command: () => {
                this.update();
            }},
            {label: 'Delete', icon: 'fa-close', command: () => {
                this.delete();
            }},
            
            {label: 'routing', icon: 'fa-link', routerLink: ['/grid']}
        ];
    }
    save() {
        alert('save done');
    }

    update() {
        alert('update done');
    }
    
    delete() {
        alert('delete done');
    }

    open() {
      window.location.href='http://www.google.co.in';
    }
   
}
