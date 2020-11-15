import { createReducer, on } from '@ngrx/store';
import * as SearchActions from './action';
import { TravelState } from './state';

const initialState: TravelState = { type: 'initial' };

export const travelReducer = createReducer<TravelState>(
  initialState,
  on(SearchActions.search, () => ({ type: 'loading' })),
  on(SearchActions.searchSuccess, (_, { travel }) => ({ type: 'load', travel })),
  on(SearchActions.searchError, () => ({ type: 'error' }))
);

