import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  constructor(private snackBar: MatSnackBar) {
  }

  success(message: string, action?: string) {
    action = action || 'Success';
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  error(message: string, action?: string) {
    action = action || 'Error';
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
