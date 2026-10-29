import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { RouterModule } from '@angular/router';
import { GlobalHeaderComponent } from '../libs/shared/ui/global-header/header.component';

@Component({
  imports: [FormsModule, InputTextModule, TextareaModule, RouterModule, GlobalHeaderComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-demo');
}
