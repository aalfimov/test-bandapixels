import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DisplayVarComponent} from './display-var/display-var.component';
import {SecondComponent} from './second/second.component';
import {MatButtonModule} from '@angular/material';
import {StoreModule} from '@ngrx/store';
import {reducers, metaReducers} from './reducers';

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
        StoreModule.forRoot(reducers, {
            metaReducers,
            runtimeChecks: {
                strictStateImmutability: true,
                strictActionImmutability: true
            }
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
