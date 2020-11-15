import { TravelService } from './../../services/travel.service';
import { search, searchSuccess, searchError } from './action';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class TravelEffects {

  public search$ = createEffect(() =>
    this.actions$.pipe(
      ofType(search),
      exhaustMap(action =>
        this.travelService.findBestTravel(action.search)
          .pipe(
            map(travel => searchSuccess({travel})),
            catchError(() => of(searchError()))
          )
      ),

    )
  );

  public constructor(
    private readonly actions$: Actions,
    private readonly travelService: TravelService
  ) {}
}
