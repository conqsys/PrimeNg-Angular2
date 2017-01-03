
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
  ToolbarModule,
  GrowlModule,
  SliderModule,
  MultiSelectModule,
  ConfirmDialogModule,
  ConfirmationService,
  RatingModule,
  TabViewModule,
  AccordionModule,
  SplitButtonModule,
  FieldsetModule
} from 'primeng/primeng';



/* include all component here */

import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { DataTableComponent } from './data-table/data-table.component';
import { CrudComponent } from './crud/crud.component';
import { ExportGridComponent } from './export-grid/export-grid.component';
import { EditableGridComponent } from './editable-grid/editable-grid.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { TabViewComponent} from './panel/tab-view.component';
import { AccordionComponent } from './panel/accordion.component';
import { PanelComponent } from './panel/panel.component';
import { FieldSetComponent } from './panel/field-set.component';
import { ToolBarComponent } from './panel/tool-bar.component';

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
    AccordionModule,
    CalendarModule,
    ButtonModule,
    SplitButtonModule,
    InputTextModule,
    MenubarModule,
    RadioButtonModule,
    TooltipModule,
    FieldsetModule,
    TabViewModule,
    PanelModule,
    FileUploadModule,
    DataGridModule,
    ToolbarModule,
    DialogModule,
    DataTableModule,
    SharedModule,
    GrowlModule,
    SliderModule,
    MultiSelectModule,
    ConfirmDialogModule,
    RatingModule
  ],
  declarations: [
    AppComponent,
    CrudComponent,
    DataTableComponent,
    GridComponent,
    ConfirmComponent,
    ExportGridComponent,
    EditableGridComponent,
    TabViewComponent,
    AccordionComponent,
    ToolBarComponent,
    PanelComponent,
    FieldSetComponent
  ],
  providers: [CommonService, ConfirmationService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }
