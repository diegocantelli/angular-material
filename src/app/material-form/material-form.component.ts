import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-material-form',
  templateUrl: './material-form.component.html',
  styleUrls: ['./material-form.component.scss']
})
export class MaterialFormComponent implements OnInit {

  selectedValue: string;
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  options: string[] = ['Angular', 'React', 'Vue'];
  minDate = new Date();
  maxDate = new Date(2020, 31, 11);

  constructor() { }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    )
  }

  dateFilter = date => {
    const day = date.getDay();
    return day != 0 && day != 6;
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue))
  }

}
