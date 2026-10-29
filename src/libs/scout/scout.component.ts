import { afterNextRender, Component, inject, OnInit } from '@angular/core';
import { ScoutApiService } from './services/api.service';

@Component({
  selector: 'app-scout',
  templateUrl: './scout.component.html',
})
export class ScoutComponent implements OnInit {
  private api = inject(ScoutApiService);

  ngOnInit(): void {
    this.api.getScoutResponse().subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }
}
