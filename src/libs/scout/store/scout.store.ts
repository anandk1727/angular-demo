import { computed, inject } from '@angular/core';
import { ScoutApiService } from '../services/api.service';
import { ScoutObject } from '../types';
import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { HttpErrorResponse } from '@angular/common/http';

type LoadStatus = 'idle' | 'loading' | 'success' | 'error';

interface ScoutState {
  objects: ScoutObject[];
  status: LoadStatus;
  error: string | null;
  selectedDesignation: string | null;
}

const initialState: ScoutState = {
  objects: [],
  status: 'idle',
  error: null,
  selectedDesignation: null,
};

export const scoutStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(({ objects, status, selectedDesignation }) => ({
    isLoading: computed(() => status() === 'loading'),
    count: computed(() => objects().length),
    selected: computed(
      () => objects().find((o) => o.designation === selectedDesignation()) ?? null,
    ),
  })),
  withMethods((store, api = inject(ScoutApiService)) => ({
    load() {
      patchState(store, { status: 'loading', error: null });
      api.getScoutResponse().subscribe({
        next: (objects) => patchState(store, { objects, status: 'success' }),
        error: (err: HttpErrorResponse) =>
          patchState(store, { status: 'error', error: err.message }),
      });
    },
    select(designation: string | null) {
      patchState(store, { selectedDesignation: designation });
    },
  })),
  withHooks({
    onInit(store) {
      store.load();
    },
  }),
);
