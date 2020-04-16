import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Shareholder } from '../../model/shareholder.model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-shareholder',
  templateUrl: './shareholder.component.html',
  styles: [],
})
export class ShareholderComponent implements OnInit {

  displayedColumns: string[];
  dataSource: MatTableDataSource<Shareholder>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private mockDataService: DataService) {
  }

  ngOnInit() {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
