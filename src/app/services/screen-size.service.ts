import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ScreenSizeService {
  screenSize: Subject<any> = new Subject();
  constructor() {}

  setSize(width: number): Observable<any> {
    if (width < 576) this.screenSize.next('XS');
    if (576 < width && width < 768) this.screenSize.next('SM');
    if (768 < width && width < 992) this.screenSize.next('MD');
    if (992 < width && width < 1200) this.screenSize.next('LG');
    if (1200 < width) this.screenSize.next('XL');

    return this.screenSize;
  }
}
