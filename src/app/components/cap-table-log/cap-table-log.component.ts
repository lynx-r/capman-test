import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-cap-table-log',
  templateUrl: './cap-table-log.component.html',
  styles: [],
})
export class CapTableLogComponent {

  constructor(
    private dataService: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  onAdd() {
    this.router.navigate(['transaction/add'], {relativeTo: this.activatedRoute});
  }
}
