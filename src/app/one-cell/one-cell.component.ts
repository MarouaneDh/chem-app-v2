import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-cell',
  templateUrl: './one-cell.component.html',
  styleUrls: ['./one-cell.component.scss'],
})
export class OneCellComponent implements OnInit {
  @Input() element: any;
  constructor() { }

  ngOnInit() {}

}
