import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-spinner',
  template: `
    <div *ngIf="(isLoadingResults$ | async) || (isError$ | async)"
         class="loading-shade">
      <mat-spinner *ngIf="isLoadingResults$ | async" diameter="20"></mat-spinner>
      <div *ngIf="isError$ | async">
        Error occurred
      </div>
    </div>
  `,
  styles: [`
      .loading-shade {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 56px;
          right: 0;
          background: rgba(0, 0, 0, 0.15);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
      }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpinnerComponent {

  @Input() isLoadingResults$: BehaviorSubject<boolean>;
  @Input() isError$: BehaviorSubject<boolean>;

}
