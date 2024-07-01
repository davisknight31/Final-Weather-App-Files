import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:5293';

  constructor(private http: HttpClient) {}

  getForecast(location: string, days: string): Observable<any> {
    return this.http
      .get<any>(`${this.apiUrl}/Forecast/GetWeather/${location}/${days}`)
      .pipe(
        catchError((error) => {
          console.error('Error:', error);
          throw error;
        })
      );
  }
}
