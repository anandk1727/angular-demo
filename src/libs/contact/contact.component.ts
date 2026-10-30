import { Component, inject } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  imports: [InputTextModule, TextareaModule, ReactiveFormsModule, ButtonModule],
})
export class ContactComponent {
  private _fb = inject(FormBuilder);

  protected readonly form = this._fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.email, Validators.required]],
    company: [''],
    employee_count: [''],
    message: ['', [Validators.required]],
  });

  onSubmit() {
    console.log(this.form.getRawValue());
  }
}
