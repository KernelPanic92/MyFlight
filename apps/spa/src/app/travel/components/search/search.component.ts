import { Airport } from './../../model/airport.model';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SameAirportErrorStateMatcher, sameAirportValidator } from './validators';
import { Search } from '../../model/search.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @Input()
  public airports: Airport[];

  @Output()
  public readonly selectedTravel = new EventEmitter<Search>();

  public readonly form: FormGroup;

  public readonly sameAirportErrorStateMatcher = new SameAirportErrorStateMatcher();

  public constructor() {
    this.form = new FormGroup({
      departure: new FormControl('', Validators.required),
      arrival: new FormControl('', Validators.required),
      maxStepOvers: new FormControl('')
    }, sameAirportValidator);
  }

  public onSubmit(): void {
    this.selectedTravel.emit(this.form.value);
  }

}
