import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-element-details',
  templateUrl: './element-details.page.html',
  styleUrls: ['./element-details.page.scss'],
})
export class ElementDetailsPage implements OnInit {
  id = this.route.snapshot.paramMap.get('id');
  all
  element
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getElement()
  }
  getElement() {
    this.dataService.getData().subscribe(async(res) => {
      this.all = await res,
        this.all.map((el) => (
          el.Z == this.id ? this.element = el : null
        ))
    })
  }
}
