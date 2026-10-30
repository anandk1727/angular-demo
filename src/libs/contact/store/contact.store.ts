import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { ContactApiService } from '../services/api.service';
import { inject } from '@angular/core';

const initialState: ContactState = {
  status: 'idle',
  error: null,
};

interface ContactState {
  status: 'idle' | 'submitting' | 'success' | 'error';
  error: string | null;
}

export const contactStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),

  withMethods((store, api = inject(ContactApiService)) => ({
    submit(formData: any) {
      patchState(store, { status: 'submitting' });
      api.submitForm(formData).subscribe({
        next: () => {
          patchState(store, { status: 'success', error: null });
        },
        error: (err) => {
          patchState(store, { status: 'error', error: err.message });
        },
      });
    },
  })),
);
