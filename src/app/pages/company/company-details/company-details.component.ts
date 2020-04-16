import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanyDetailsComponent implements OnInit {

  tabIndex: number;

  TAB_QUERY_NAME = 'tab';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.tabIndex = this.activatedRoute.snapshot.queryParams[this.TAB_QUERY_NAME];
  }

  onTabChange(tabIndex: number) {
    this.router.navigate([], {queryParams: {[this.TAB_QUERY_NAME]: tabIndex}});
  }
}
