import { MatIconModule } from '@angular/material/icon';
import { TRAVEL_STORE, TravelEffects, travelReducer } from './store/travel';
import { AirportsResolver } from './services/airports.resolver';
import { TravelService } from './services/travel.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelComponent } from './components/travel/travel.component';
import { Routes, RouterModule } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './components/search/search.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MatChipsModule } from '@angular/material/chips';

const routes: Routes = [{
  path: '',
  component: TravelComponent,
  resolve: { airports: AirportsResolver }
}];

@NgModule({
  declarations: [TravelComponent, SearchComponent],
  providers: [
    TravelService,
    AirportsResolver,
    TravelEffects,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    MatSelectModule,
    MatCardModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatButtonModule,
    StoreModule.forFeature(TRAVEL_STORE, travelReducer),
    EffectsModule.forFeature([TravelEffects]),
    MatIconModule,
    MatChipsModule,
  ]
})
export class TravelModule { }
