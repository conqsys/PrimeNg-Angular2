import { RouterModule, Routes } from '@angular/router';
import { GridComponent } from './grid/grid.component';
import { DataTableComponent } from './data-table/data-table.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { CrudComponent } from './crud/crud.component';
import { ExportGridComponent } from './export-grid/export-grid.component';
import { EditableGridComponent } from './editable-grid/editable-grid.component';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/grid', pathMatch: 'full' },
  { path: 'grid', component: GridComponent },
  { path: 'dataTable', component: DataTableComponent },
  { path: 'crud', component: CrudComponent },
  { path: 'confirm', component: ConfirmComponent},
  { path: 'exportGrid', component: ExportGridComponent },
  { path: 'editGrid', component: EditableGridComponent }
];
export const routing = RouterModule.forRoot(APP_ROUTES);
