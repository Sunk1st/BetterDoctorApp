import { NgModule}       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { jqxGridComponent } from 'components/angular_jqxgrid';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, jqxGridComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

