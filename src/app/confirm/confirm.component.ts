import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { ConfirmDialogModule, ConfirmationService } from 'primeng/primeng';

@Component({
    templateUrl: '/confirm.component.html',
})
export class ConfirmComponent {

    msgs: Array<Object> = [];
    display: boolean = false;
    ratingValue:Number= 5;
    constructor(private confirmationService: ConfirmationService) { }


    showDialog(): void {
        this.display = true;
    }

    dialogClose(): void {
        this.display = false;
    }

    dialogOk(): void {
        this.display = false;
    }

    confirm(): void {
         this.confirmationService.confirm({
            header: 'confirm dialogBox',
            message: 'Are you sure that you want to perform this action?',
            accept: () => {
                this.msgs = [];
                this.msgs.push({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
            }
        });
    }

    delete(): void {
        this.confirmationService.confirm({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'fa fa-trash',
            accept: () => {
                this.msgs = [];
                this.msgs.push({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' });
            },
            reject: () => {
                this.msgs.push({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
            }
        });
    }
}