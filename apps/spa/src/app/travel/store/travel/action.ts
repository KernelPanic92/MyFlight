import { Search } from './../../model/search.model';
import { createAction, props } from '@ngrx/store';
import { Travel } from '../../model/travel.model';

export const search = createAction(
  '[TravelPage] search',
  props<{search: Search}>()
);

export const searchSuccess = createAction(
  '[TravelPage] search success',
  props<{ travel: Travel } >()
);

export const searchError = createAction(
  '[TravelPage] search error'
);
