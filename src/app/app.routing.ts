import { RouterModule, Routes } from '@angular/router';
import { GridComponent } from './grid/grid.component';
import { DataTableComponent } from './data-table/data-table.component';
import {TabViewComponent} from './panel/tab-view.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { CrudComponent } from './crud/crud.component';
import { ExportGridComponent } from './export-grid/export-grid.component';
import { EditableGridComponent } from './editable-grid/editable-grid.component';
import { AccordionComponent } from './panel/accordion.component';
import { PanelComponent } from './panel/panel.component';
import { FieldSetComponent} from './panel/field-set.component';
import { ToolBarComponent } from './panel/tool-bar.component';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/grid', pathMatch: 'full' },
  { path: 'grid', component: GridComponent },
  { path: 'dataTable', component: DataTableComponent },
  { path: 'crud', component: CrudComponent },
  { path: 'confirm', component: ConfirmComponent},
  { path: 'exportGrid', component: ExportGridComponent },
  { path: 'editGrid', component: EditableGridComponent },
  { path: 'tabView', component: TabViewComponent},
  { path: 'accordion', component: AccordionComponent},
  { path: 'panel', component: PanelComponent},
  { path: 'fieldSet', component: FieldSetComponent},
  { path: 'toolBar', component: ToolBarComponent}
];
export const routing = RouterModule.forRoot(APP_ROUTES);
