import { Directive, HostListener } from '@angular/core';
import { ScreenSizeService } from '../services/screen-size.service';

@Directive({
  selector: '[appDetectScreenSize]',
})
export class DetectScreenSizeDirective {
  constructor(private service: ScreenSizeService) {}

  @HostListener('window:load', ['$event'])
  onLoad(event) {
    this.sendSizetoService(event.currentTarget.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.sendSizetoService(event.currentTarget.innerWidth);
  }

  sendSizetoService(width: number) {
    this.service.setSize(width);
  }
}
