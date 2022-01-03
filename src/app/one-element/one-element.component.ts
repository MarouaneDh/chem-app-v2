import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-element',
  templateUrl: './one-element.component.html',
  styleUrls: ['./one-element.component.scss'],
})
export class OneElementComponent implements OnInit {
  @Input() element: any;
  constructor() { }

  ngOnInit() {}

}
