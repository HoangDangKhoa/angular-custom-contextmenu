import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ContextMenuService {

    // Observable string sources
    private openContextMenuSource = new Subject<any>();

    // Observable string streams
    openContextMenud$ = this.openContextMenuSource.asObservable();

    // Service message commands
    openContextMenu(data: any) {
        this.openContextMenuSource.next(data);
    }
}