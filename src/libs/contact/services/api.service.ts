import { Service } from '@angular/core';
import { delay, of, switchMap, throwError, timer } from 'rxjs';

@Service()
export class ContactApiService {
  submitForm(data: any) {
    if (data.email.includes('fail')) {
      return timer(1000).pipe(
        switchMap(() =>
          throwError(() => new Error('Could not send your message. Please try again.')),
        ),
      );
    }
    return of({ data, message: 'Message sent successfully' }).pipe(delay(1000));
  }
}
