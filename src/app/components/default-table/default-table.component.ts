import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CapTableLog, TableType } from 'app/model';
import { BehaviorSubject, merge, of, Subscription } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-default-table',
  templateUrl: './default-table.component.html',
  styles: [],
})
export class DefaultTableComponent implements AfterViewInit, OnDestroy {

  @Input() type: TableType;
  @Input() addButtonLabel: string;

  @Output() add = new EventEmitter();

  data: CapTableLog[];
  resultsLength: number;

  displayedColumns: string[] = [];

  isLoadingResults$ = new BehaviorSubject(true);
  isError$ = new BehaviorSubject(false);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  private tableSub$: Subscription;
  private sortSub$: Subscription;

  constructor(private dataService: DataService) {
  }

  ngAfterViewInit() {
    this.sortSub$ = this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    this.tableSub$ = merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults$.next(true);
          return this.dataService.getTable(this.type, this.sort.active, this.sort.direction, this.paginator.pageIndex);
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
        this.displayedColumns = Object.keys(data[0]);
        this.data = data;
      });
  }

  ngOnDestroy(): void {
    this.tableSub$.unsubscribe();
    this.sortSub$.unsubscribe();
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
