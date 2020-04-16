import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { BehaviorSubject, merge, of } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { CapTableLog } from '../../../model';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styles: []
})
export class CompanyListComponent implements AfterViewInit {

  data: CapTableLog[];
  resultsLength: number;

  displayedColumns = ['Name'];
  isLoadingResults$ = new BehaviorSubject(true);
  isError$ = new BehaviorSubject(false);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private dataService: DataService) {
  }

  ngAfterViewInit() {
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults$.next(true);
          return this.dataService.getTable('company', this.sort.active, this.sort.direction, this.paginator.pageIndex);
        }),
        map(data => {
          this.isLoadingResults$.next(false);
          this.isError$.next(false);
          this.resultsLength = data.total_count;

          return data.items;
        }),
        catchError(() => {
          this.isLoadingResults$.next(false);
          this.isError$.next(true);
          return of([]);
        })
      )
      .subscribe(data => {
        this.data = data;
      });
  }

  applyFilter(event: Event) {
    //   const filterValue = (event.target as HTMLInputElement).value;
    //   this.dataSource.filter = filterValue.trim().toLowerCase();
    //
    //   if (this.dataSource.paginator) {
    //     this.dataSource.paginator.firstPage();
    //   }
  }
}
