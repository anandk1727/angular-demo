import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GlobalHeaderComponent } from '@shared/ui';

@Component({
  imports: [RouterModule, GlobalHeaderComponent],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-demo');
}
