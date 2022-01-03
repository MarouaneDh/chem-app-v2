import { Component,OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  elements: any = []
  firstRow;
  firstSecondRow;
  secondSecondRow;
  firstThirdRow;
  secondThirdRow;
  fourthRow;
  fifthRow;
  firstSixthRow;
  annexFirstRow;
  secondSixthRow;
  firstSeventhRow;
  annexSecondRow;
  secondSeventhRow
  constructor(
    private dataService:DataService
  ) {}
  ngOnInit(): void {
    this.getElements()
  }

  getElements() {
    this.dataService.getData().subscribe(async (res) => {
      this.elements = await res
      this.firstRow = this.elements.splice(0, 2)
      this.firstSecondRow = this.elements.splice(0, 2)
      this.secondSecondRow = this.elements.splice(0, 6)
      this.firstThirdRow = this.elements.splice(0, 2)
      this.secondThirdRow = this.elements.splice(0, 6)
      this.fourthRow = this.elements.splice(0, 18)
      this.fifthRow = this.elements.splice(0, 18)
      this.firstSixthRow = this.elements.splice(0, 2)
      this.annexFirstRow = this.elements.splice(0, 15)
      this.secondSixthRow = this.elements.splice(0, 15)
      this.firstSeventhRow = this.elements.splice(0, 2)
      this.annexSecondRow = this.elements.splice(0, 15)
      this.secondSeventhRow = this.elements.splice(0, 15)
    })
  }
}
