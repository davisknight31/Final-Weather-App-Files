import { Component } from '@angular/core';
import { ApiService } from '../../services/apiService';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forecast',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './forecast.component.html',
  styleUrl: './forecast.component.scss',
})
export class ForecastComponent {
  forecast: any;
  location: string = '';
  days: string = '';
  constructor(private apiService: ApiService) {}

  ngOnInit() {}

  getWeather(): void {
    // const observables: Observable<any>[] = [];
    this.apiService
      .getForecast(this.location, this.days)
      .subscribe((response: string) => {
        this.forecast = response;
        console.log(response);
      });
  }
}
