import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectorRef,
  OnDestroy,
  Pipe,
  PipeTransform,
} from '@angular/core';
import { formatDistance } from 'date-fns';
import { Observable, timer } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

@Pipe({
  name: 'timeAgo',
  pure: false,
})
export class TimeAgoPipe implements PipeTransform, OnDestroy {
  private startDate: Date;
  private endDate: Date | number;
  private asyncPipe: AsyncPipe;
  private formatted$: Observable<any>;

  constructor(private cd: ChangeDetectorRef) {
    this.asyncPipe = new AsyncPipe(this.cd);
    this.formatted$ = timer(0, 1000).pipe(
      map(() => {
        return formatDistance(this.startDate, this.endDate, {
          addSuffix: typeof this.endDate === 'number' ? true : false,
          includeSeconds: true,
        });
      }),
      distinctUntilChanged()
    );
  }

  transform(startDate: any, endDate?: any): any {
    if (!startDate) {
      return '';
    } else {
      this.startDate = new Date(startDate);
      this.endDate = endDate ? new Date(endDate) : Date.now();

      return this.asyncPipe.transform(this.formatted$);
    }
  }

  ngOnDestroy(): void {
    this.asyncPipe.ngOnDestroy();
  }
}
