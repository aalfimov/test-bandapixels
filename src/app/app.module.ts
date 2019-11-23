import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';
import {StoreModule} from '@ngrx/store';

import {AppComponent} from './app.component';
import {DisplayVarComponent} from './component/display-var/display-var.component';
import {SecondComponent} from './component/second/second.component';
import {reducers} from './store/app.reducer';

@NgModule({
    declarations: [
        AppComponent,
        DisplayVarComponent,
        SecondComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatButtonModule,
        StoreModule.forRoot(reducers)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
