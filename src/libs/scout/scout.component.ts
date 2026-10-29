import { Component, inject } from '@angular/core';

import { scoutStore } from './store/scout.store';

@Component({
  selector: 'app-scout',
  templateUrl: './scout.component.html',
})
export class ScoutComponent {
  protected readonly store = inject(scoutStore);
}
