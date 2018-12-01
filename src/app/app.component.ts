import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data = [{ name: "data1" }, { name: "data2" }, { name: "data3" }, { name: "data4" },
  { name: "data5" }, { name: "data6" }, { name: "data7" }, { name: "data8" },
  { name: "data9" }, { name: "data10" }, { name: "data11" }, { name: "data12" },
  { name: "data13" }];
  cardData = [];
  cardSize = 3;
  start = 0;
  end = this.cardSize;
  innerWidth = 0;
  ngOnInit() {
    this.onResizeWindow();
  }

  onRightArrowClick() {
    if (this.end + this.cardSize < this.data.length + 3) {
      this.start += this.cardSize;
      this.end += this.cardSize;
      this.populateCards();
    }
  }

  onLeftArrowClick() {
    if (!(this.start - this.cardSize < 0)) {
      this.start -= this.cardSize;
      this.end -= this.cardSize;
      this.populateCards();
    }
  }

  populateCards() {
    this.cardData = [];
    this.data.map((d, i) => {
      if (i < this.end && i >= this.start) {
        this.cardData.push(d);
      }
    })
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.onResizeWindow()
  }
  onResizeWindow() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth >= 768) {
      this.cardSize = 3;
    } else {
      this.cardSize = 1;
    }
    this.start = 0;
    this.end = this.cardSize;
    this.populateCards();
  }
}
