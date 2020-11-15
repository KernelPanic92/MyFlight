import { Search } from './../../model/search.model';
import { Travel } from './../../model/travel.model';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Airport } from '../../model/airport.model';
import { Store } from '@ngrx/store';
import { TravelState, search as searchAction, loadingSelector, noTravelSelector } from '../../store/travel';
import { travelSelector } from '../../store/travel';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.scss']
})
export class TravelComponent {

  public readonly travel$: Observable<Travel>;

  public readonly airports$: Observable<Airport[]>;

  public readonly loading$: Observable<boolean>;

  public readonly noTravel$: Observable<boolean>;

  public constructor(
    private readonly route: ActivatedRoute,
    private readonly store: Store<{travel: TravelState}>
  ) {

    this.airports$ = route.data.pipe(map(data => data.airports));

    this.travel$ = this.store.select(travelSelector);

    this.loading$ = this.store.select(loadingSelector);

    this.noTravel$ = this.store.select(noTravelSelector);

  }

  public searchBestTravel(search: Search): void {
    this.store.next(searchAction({ search }));
  }

}
