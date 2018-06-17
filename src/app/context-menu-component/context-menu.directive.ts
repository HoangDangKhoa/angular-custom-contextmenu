import { Directive, Input } from "@angular/core";
import { ContextMenuService } from "./context-menu.service";

@Directive({
    selector: '[context-menu]',
    host: { '(contextmenu)': 'rightClicked($event)' }
})
export class ContextMenuDirective {
    @Input() numberData: number;
    constructor(private contextMenuService: ContextMenuService) {
    }
    rightClicked(event: MouseEvent) {
        this.contextMenuService.openContextMenu(
            {
                x: event.clientX,
                y: event.clientY,
                transferData: this.numberData
            }
        );
        event.preventDefault();
    }
}