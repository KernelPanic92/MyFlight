import { TravelState } from './state';
import { createSelector } from '@ngrx/store';

export const TRAVEL_STORE = 'travel';

const selectFeature = (state) => state[TRAVEL_STORE] as TravelState;

export const travelSelector = createSelector(selectFeature, state => {
  if (state.type === 'load') {
    return state.travel;
  }

  return void 0;
});

export const loadingSelector = createSelector(selectFeature, state => state.type === 'loading');
export const noTravelSelector = createSelector(selectFeature, state => state.type === 'load' && !state.travel);

