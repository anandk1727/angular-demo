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
    name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
    email: ['', [Validators.required, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/)]],
    company: ['', [Validators.minLength(2), Validators.maxLength(10)]],
    employee_count: [''],
    message: ['', [Validators.required]],
  });

  onSubmit() {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      console.log(this.form.get('name')?.errors);
      return;
    }
    console.log(this.form.getRawValue());
  }
}
