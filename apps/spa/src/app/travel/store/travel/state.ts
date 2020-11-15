import { Travel } from './../../model/travel.model';

export interface InitialTravelState {
  type: 'initial';
}

export interface LoadingTravelState {
  type: 'loading';
}

export interface ErrorTravelState {
  type: 'error';
}

export interface LoadTravelState {
  type: 'load';
  travel: Travel;
}

export type TravelState =
  InitialTravelState |
  LoadingTravelState |
  ErrorTravelState |
  LoadTravelState;
