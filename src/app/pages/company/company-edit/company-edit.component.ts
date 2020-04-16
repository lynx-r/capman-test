import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from 'app/model';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-company-add',
  templateUrl: './company-edit.component.html',
  styles: [],
})
export class CompanyEditComponent implements OnInit {

  company: Company;

  private companyId: string;

  constructor(
    private dataService: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe(params => {
        this.companyId = params.id;
        if (!this.companyId) {
          this.company = new Company();
        }
      });
  }


  onSubmit(companyForm: NgForm) {
    this.dataService.createCompany(companyForm.value)
      .subscribe(() => {
        this.router.navigate(['..', 'list'], {relativeTo: this.activatedRoute});
      });
  }
}
