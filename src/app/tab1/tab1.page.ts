import { Component,OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  data
  donnee
  elements: any=[]
  groups: any = ["All"]
  group
  filter="All"
  constructor(
    private dataService:DataService
  ) {}
  ngOnInit(): void {
    this.getFilters()
    this.getElements()
  }
  getFilters() {
    this.dataService.getData().subscribe(async(res) => {
      this.data = await res,
        await this.data.map((el) => (
          !this.groups.includes(el.group) ? this.groups.push(el.group) : null
        ))
    })
  }
  getElements() {
    this.elements=[]
    this.dataService.getData().subscribe(async (res) => {
      this.donnee = await res
      if (this.filter === "All") {
        this.elements = this.donnee
      } else {
        this.donnee.map(el => (
          el.group===this.filter?this.elements.push(el):null
        ))
      }
    })
  }
  options(group) {
    this.filter = group
    this.getElements()
  }
}
