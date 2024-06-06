import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NutritionService {
  private apiUrl = 'https://api.calorieninjas.com/v1/nutrition';
  private apiKey = 'agExl/P/VA29PGqKmZ+kZw==rvnxU7sXTk8AL5Db';

  constructor(private http: HttpClient) { }

  getNutrition(query: string): Observable<any> {
    const headers = new HttpHeaders({
      'X-Api-Key': this.apiKey
    });
    return this.http.get<any>(`${this.apiUrl}?query=${query}`, { headers });
  }
}
