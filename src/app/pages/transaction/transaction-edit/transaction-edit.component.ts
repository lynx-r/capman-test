import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Transaction } from '../../../model';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-transaction-edit',
  templateUrl: './transaction-edit.component.html',
  styles: [],
})
export class TransactionEditComponent implements OnInit {

  transaction: Transaction;

  private transactionId: string;

  constructor(
    private dataService: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe(params => {
        this.transactionId = params.transactionId;
        if (!this.transactionId) {
          this.transaction = new Transaction();
        }
      });
  }


  onSubmit(companyForm: NgForm) {
    this.dataService.createTransaction(companyForm.value)
      .subscribe(() => {
        this.router.navigate(['../..'], {relativeTo: this.activatedRoute});
      });
  }

}
