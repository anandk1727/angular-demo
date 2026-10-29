import { Component, inject } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GetRowIdFunc, RowClickedEvent } from 'ag-grid-community';
import { MessageModule } from 'primeng/message';
import { scoutStore } from './store/scout.store';
import { ScoutObject } from './types';
import { ButtonModule } from 'primeng/button';
import { DefaultColRef, ScoutColDef } from './contants';

@Component({
  selector: 'app-scout',
  templateUrl: './scout.component.html',
  imports: [AgGridAngular, MessageModule, ButtonModule],
})
export class ScoutComponent {
  protected readonly store = inject(scoutStore);
  protected readonly getRowId: GetRowIdFunc<ScoutObject> = (p) => p.data.designation;
  protected readonly defaultColDef: ColDef<ScoutObject> = DefaultColRef;
  protected readonly colDefs = ScoutColDef;

  protected onRowClicked(event: RowClickedEvent<ScoutObject>) {
    this.store.select(event.data?.designation ?? null);
  }
}
