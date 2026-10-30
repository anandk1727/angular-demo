import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';

import { ScoutApiResponse } from '../types';
import { map } from 'rxjs';
import { toScoutObject } from '../utils/transformer/api.transformer';

@Service()
export class ScoutApiService {
  private _http = inject(HttpClient);
  getScoutResponse() {
    return this._http
      .get<ScoutApiResponse>('/api/scout.api')
      .pipe(map((res) => res.data.map(toScoutObject)));
  }
}
