import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-tabs',
  templateUrl: './material-tabs.component.html',
  styleUrls: ['./material-tabs.component.scss']
})
export class MaterialTabsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logChange(index) {
    console.log(index);
  }

}
