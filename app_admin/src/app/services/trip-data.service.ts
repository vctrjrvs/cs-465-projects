import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthResponse } from '../models/authresponse';
import { Trip } from '../models/trip';
import { User } from '../models/user';
import { BROWSER_STORAGE } from '../storage';

@Injectable({
  providedIn: 'root',
})
export class TripDataService {
  constructor(
    private http: HttpClient,
    @Inject(BROWSER_STORAGE) private storage: Storage
  ) {}

  private apiBaseUrl = 'http://localhost:3000/api/';
  private tripUrl = `${this.apiBaseUrl}api/`;

  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong!', error);
    return Promise.reject(error.message || error);
  }

  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.apiBaseUrl);
  }

  AddTrip(formData: Trip): Observable<Trip> {
    return this.http.post<Trip>(this.apiBaseUrl, formData);
  }

  getTrip(tripCode: string): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.apiBaseUrl + '/' + tripCode);
  }

  updateTrip(formData: Trip): Observable<Trip> {
    return this.http.put<Trip>(this.apiBaseUrl + '/' + formData.code, formData);
  }
  public login(user: User): Promise<AuthResponse> {
    return this.makeAuthApiCall('login', user);
  }
  public register(user: User): Promise<AuthResponse> {
    return this.makeAuthApiCall('register', user);
  }
  private makeAuthApiCall(urlPath: string, user: User): Promise<AuthResponse> {
    console.log('Inside makeAuthApiCall');
    const url: string = `${this.apiBaseUrl}/${urlPath}`;
    return this.http
      .post(url, user)
      .toPromise()
      .then((response) => response as AuthResponse)
      .catch(this.handleError);
  }
}
