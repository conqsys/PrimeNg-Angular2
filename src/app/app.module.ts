
/* include all important initials modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';



// import { ModalModule } from 'angular2-modal';
// import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';


/* import NgPrime module */
import {
  DropdownModule,
  CalendarModule,
  ButtonModule,
  InputTextModule,
  MenubarModule,
  RadioButtonModule,
  TooltipModule,
  PanelModule,
  FileUploadModule,
  DataGridModule,
  DialogModule,
  DataTableModule,
  SharedModule,
  GrowlModule,
  SliderModule,
  MultiSelectModule
} from 'primeng/primeng';



/* include all component here */

import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { DataTableComponent } from './data-table/data-table.component';
import { CrudComponent } from './data-table/crud.component';


/* include all Services here */

import { CommonService } from './services/common.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    // ModalModule.forRoot(),
    // BootstrapModalModule,
    DropdownModule,
    CalendarModule,
    ButtonModule,
    InputTextModule,
    MenubarModule,
    RadioButtonModule,
    TooltipModule,
    PanelModule,
    FileUploadModule,
    DataGridModule,
    DialogModule,
    DataTableModule,
    SharedModule,
    GrowlModule,
    SliderModule,
    MultiSelectModule
  ],
  declarations: [
    AppComponent,
    CrudComponent,
    DataTableComponent,
    GridComponent
  ],
  providers: [CommonService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }
