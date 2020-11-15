import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Airport } from '../model/airport.model';
import { Search } from '../model/search.model';
import { Travel } from '../model/travel.model';

@Injectable()
export class TravelService {


  public constructor(private readonly http: HttpClient) { }

  public findAllAirports(): Observable<Airport[]> {
    return this.http.get<Airport[]>(`${environment.baseUrl}/airports`);
  }

  public findBestTravel(search: Search): Observable<Travel> {
    const { arrival, departure, maxStepOvers } = search;

    let params = new HttpParams()
      .set('arrival', arrival)
      .set('departure', departure);

    if (maxStepOvers) {
      params = params.set('maxStepOvers', maxStepOvers.toString());
    }

    return this.http.get<Travel>(`${environment.baseUrl}/travels/best`, { observe: 'body', params });
  }

}
