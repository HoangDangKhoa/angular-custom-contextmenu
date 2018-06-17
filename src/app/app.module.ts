import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { AppComponent } from './app.component';
import { ContextMenuComponent } from './context-menu-component/context-menu-holder.component';
import { ContextMenuService } from './context-menu-component/context-menu.service';
import { ContextMenuDirective } from './context-menu-component/context-menu.directive';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TestComponent } from './test-component/test.component';

@NgModule({
  declarations: [    
    AppComponent,
    ContextMenuComponent,
    ContextMenuDirective,
    TestComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatListModule,
    MatButtonModule
  ],
  providers: [ContextMenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
