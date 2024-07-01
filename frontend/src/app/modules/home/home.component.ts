import { Component } from '@angular/core';
import { ForecastComponent } from '../../components/forecast/forecast.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ForecastComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
