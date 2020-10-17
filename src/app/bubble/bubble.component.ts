import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-bubble',
  templateUrl: './bubble.component.html',
  styleUrls: ['./bubble.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BubbleComponent implements OnInit {
  data: number[];
  index: number;
  jIndex: number;
  speed = '300';
  length = '50';
  open = '{';
  close = '}';
  constructor() {}

  ngOnInit(): void {
    this.generateData();
  }

  timeout(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async generateData(): Promise<void> {
    this.data = [];
    this.index = 0;
    this.jIndex = 0;
    for (let i = 0; i < Number(this.length); i++) {
      await this.timeout(5);
      this.data.push(Math.round(Math.random() * 999));
    }
  }

  checkIndex(index: number): string {
    if (index === this.jIndex) {
      return 'active';
    }
    if (index === this.jIndex - 1) {
      return 'index';
    }
    if (index > this.data.length - this.index - 1) {
      return 'active';
    }
  }

  async sort(): Promise<void> {
    for (this.index = 0; this.index < this.data.length; this.index++) {
      for (
        this.jIndex = 0;
        this.jIndex < this.data.length - this.index - 1;
        this.jIndex++
      ) {
        await this.timeout(Number(this.speed));
        if (this.data[this.jIndex] > this.data[this.jIndex + 1]) {
          [this.data[this.jIndex], this.data[this.jIndex + 1]] = [
            this.data[this.jIndex + 1],
            this.data[this.jIndex],
          ];
        }
      }
    }
  }
}
