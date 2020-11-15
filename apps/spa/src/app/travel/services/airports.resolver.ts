import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Airport } from '../model/airport.model';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { TravelService } from './travel.service';


@Injectable()
export class AirportsResolver implements Resolve<Airport[]> {
  constructor(private service: TravelService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    return this.service.findAllAirports();
  }
}
