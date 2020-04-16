import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
