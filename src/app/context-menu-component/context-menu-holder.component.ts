import { Component, Input, HostListener, trigger, state, style, transition, animate } from '@angular/core';
import { ContextMenuService } from './context-menu.service';

@Component({
  selector: 'context-menu-holder',
  templateUrl: './context-menu-holder.component.html',
  styleUrls: ['./context-menu-holder.component.css'],
  animations: [
    trigger('slideInOut', [
      state('true', style({
        transform: 'scale(1, 1)'
      })),
      state('false', style({
        transform: 'scale(1, 0.5)'
      })),
      transition('true => false', animate('150ms 50ms linear')),
      transition('false => true', animate('300ms cubic-bezier(0.25, 0.8, 0.25, 1)'))
    ]),
  ]
})
export class ContextMenuComponent {
    @Input() x=0;
    @Input() y=0;
    isShown = false;
    transferData: number;

    constructor(private contextMenuService: ContextMenuService) {
        this.contextMenuService.openContextMenud$.subscribe(
            (data) => this.openContextMenu(data)
        );
    }
    
    @HostListener('document:click', ['$event'])
    clickout() {
        this.isShown = false;
    }

    openContextMenu(data: any) {
        this.isShown = true;
        this.x = data.x;
        this.y = data.y;
        this.transferData = data.transferData;
    }

    logTransferData() {
      console.log(this.transferData);
    }
}
