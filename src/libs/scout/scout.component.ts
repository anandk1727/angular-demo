import { Component, inject, signal } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GetRowIdFunc, RowClickedEvent } from 'ag-grid-community';
import { MessageModule } from 'primeng/message';
import { scoutStore } from './store/scout.store';
import { ScoutObject } from './types';
import { ButtonModule } from 'primeng/button';
import { DefaultColRef, ScoutColDef } from './contants';
import { InputTextModule } from 'primeng/inputtext';
import { scoutGridTheme } from '@global/ui';
import { DialogModule } from 'primeng/dialog';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-scout',
  templateUrl: './scout.component.html',
  imports: [
    AgGridAngular,
    MessageModule,
    ButtonModule,
    InputTextModule,
    DialogModule,
    KeyValuePipe,
  ],
})
export class ScoutComponent {
  protected readonly store = inject(scoutStore);
  protected readonly getRowId: GetRowIdFunc<ScoutObject> = (p) => p.data.designation;
  protected readonly defaultColDef: ColDef<ScoutObject> = DefaultColRef;
  protected readonly colDefs = ScoutColDef;

  protected readonly quickFilter = signal('');
  protected readonly theme = scoutGridTheme;

  protected onRowClicked(event: RowClickedEvent<ScoutObject>) {
    this.store.select(event.data?.designation ?? null);
  }
}
