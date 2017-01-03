import { RouterModule, Routes } from '@angular/router';
import { GridComponent } from './grid/grid.component';
import { DataTableComponent } from './data-table/data-table.component';
import { CrudComponent } from './data-table/crud.component';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/grid', pathMatch: 'full' },
  { path: 'grid', component: GridComponent },
  { path: 'dataTable', component: DataTableComponent },
  { path: 'crud', component: CrudComponent }
];
export const routing = RouterModule.forRoot(APP_ROUTES);