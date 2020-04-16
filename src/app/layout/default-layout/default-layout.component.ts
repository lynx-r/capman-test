import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styles: [`
      .layout {
          height: 100%;
      }

      .main-wrapper {
          overflow: auto;
      }

      .content-wrapper {
          margin-bottom: 4px;
      }
  `],
})
export class DefaultLayoutComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
